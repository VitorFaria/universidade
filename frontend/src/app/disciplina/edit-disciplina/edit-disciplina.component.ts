import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Disciplina} from "../../model/disciplina.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {ApiService} from "../../core/api.service";

@Component({
  selector: 'app-edit-disciplina',
  templateUrl: './edit-disciplina.component.html',
  styleUrls: ['./edit-disciplina.component.css']
})
export class EditDisciplinaComponent implements OnInit {

  disciplina: Disciplina;
  editForm: FormGroup;
  submitted = false;
  errorText = null;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  get nome() { return this.editForm.get('nome'); }
  get id_curso() { return this.editForm.get('id_curso'); }

  ngOnInit() {
    let disciplinaId = window.localStorage.getItem("editDisciplinaId");
    if(!disciplinaId) {
      alert("Invalid action.")
      this.router.navigate(['list-disciplina']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      id_curso: ['', Validators.required],
      nome_curso: ['', Validators.required],
    });
    this.apiService.getDisciplinaById(+disciplinaId)
      .subscribe( data => {
        this.editForm.setValue({
          id: data.result.id,
          nome: data.result.nome,
          id_curso: data.result.curso.id,
          nome_curso: data.result.curso.nome
        });
      });
  }

  onSubmit() {
    this.submitted = true;
    this.errorText = "";

    if(this.editForm.invalid){
      return;
    }

    this.apiService.updateDisciplina(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        if(data.status === 200) {
            alert("Disciplina atualizada corretamente!")
            this.router.navigate(['list-disciplina']);
          }else {
            this.errorText = data.message;
          }
      },
      error =>{
        this.errorText = error.message;
      });
  }

}
