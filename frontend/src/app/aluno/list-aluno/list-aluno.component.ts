import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Aluno} from "../../model/aluno.model";
import {ApiService} from "../../core/api.service";

@Component({
  selector: 'app-list-aluno',
  templateUrl: './list-aluno.component.html',
  styleUrls: ['./list-aluno.component.css']
})
export class ListAlunoComponent implements OnInit {

  alunos: Aluno[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getAlunos()
      .subscribe( data => {
          this.alunos = data.result;
      });
  }

  deleteAluno(aluno: Aluno): void {
    this.apiService.deleteAluno(aluno.id)
      .subscribe( data => {
        this.alunos = this.alunos.filter(u => u !== aluno);
      })
  };

  editAluno(aluno: Aluno): void {
    window.localStorage.removeItem("editAlunoId");
    window.localStorage.setItem("editAlunoId", aluno.id.toString());
    this.router.navigate(['edit-aluno']);
  };

  addAluno(): void {
    this.router.navigate(['add-aluno']);
  };
}
