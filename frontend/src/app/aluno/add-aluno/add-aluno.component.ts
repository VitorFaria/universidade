import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../core/api.service";

@Component({
  selector: 'app-add-aluno',
  templateUrl: './add-aluno.component.html',
  styleUrls: ['./add-aluno.component.css']
})
export class AddAlunoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern('[0-9]{11}$')]],
      email: ['', [Validators.required, Validators.email]],
      data_nascimento: ['', Validators.required]
    });

  }

  get email() { return this.addForm.get('email'); }

  onSubmit() {
    this.submitted = true;

    if(this.addForm.invalid){
      alert("Campos inválidos!");
      return;
    }

    this.apiService.createAluno(this.addForm.value)
      .subscribe( data => {
        if(data.status === 200) {
            this.router.navigate(['list-aluno']);
          }else {
            alert(data.message);
          }
      },
      error =>{
        alert(error.message);
      });
  }

}
