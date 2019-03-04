import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Curso} from "../../model/curso.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {ApiService} from "../../core/api.service";

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.css']
})
export class EditCursoComponent implements OnInit {

  curso: Curso;
  editForm: FormGroup;
  submitted = false;
  errorText = null;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  get nome() { return this.editForm.get('nome'); }

  ngOnInit() {
    let cursoId = window.localStorage.getItem("editCursoId");
    if(!cursoId) {
      alert("Invalid action.")
      this.router.navigate(['list-curso']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      data_inicio: [''],
      data_fim: ['']
    });
    this.apiService.getCursoById(+cursoId)
      .subscribe( data => {
        if(data.result.data_inicio)
          data.result.data_inicio = data.result.data_inicio.split("T")[0];
        if(data.result.data_fim)
          data.result.data_fim = data.result.data_fim.split("T")[0];
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {
    this.submitted = true;
    this.errorText = "";

    if(this.editForm.invalid){
      return;
    }

    this.apiService.updateCurso(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        if(data.status === 200) {
            alert("Curso atualizado corretamente!")
            this.router.navigate(['list-curso']);
          }else {
            this.errorText = data.message;
          }
      },
      error =>{
        this.errorText = error.message;
      });
  }

}
