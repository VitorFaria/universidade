import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../core/api.service";

@Component({
  selector: 'app-add-matricula',
  templateUrl: './add-matricula.component.html',
  styleUrls: ['./add-matricula.component.css']
})
export class AddMatriculaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;
  submitted = false;
  errorText = null;

  get id_aluno() { return this.addForm.get('id_aluno'); }
  get id_curso() { return this.addForm.get('id_curso'); }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id_aluno: ['', Validators.required],
      id_curso: ['', Validators.required],
      turno: [''],
      data_matricula: ['']
    });

  }

  onSubmit() {
    this.submitted = true;
    this.errorText = "";

    if(this.addForm.invalid){
      return;
    }

    this.apiService.createMatricula(this.addForm.value)
      .subscribe( data => {
        if(data.status === 200) {
            this.router.navigate(['list-matricula']);
          }else {
            this.errorText = data.message;
          }
      },
      error =>{
        this.errorText = error.message;
      });
  }

}
