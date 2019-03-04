import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../core/api.service";

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;
  submitted = false;
  errorText = null;

  get nome() { return this.addForm.get('nome'); }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      data_inicio: [''],
      data_fim: ['']
    });

  }

  onSubmit() {
    this.submitted = true;
    this.errorText = "";

    if(this.addForm.invalid){
      return;
    }

    this.apiService.createCurso(this.addForm.value)
      .subscribe( data => {
        if(data.status === 200) {
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
