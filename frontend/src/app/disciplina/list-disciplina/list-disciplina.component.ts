import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Disciplina} from "../../model/disciplina.model";
import {ApiService} from "../../core/api.service";

@Component({
  selector: 'app-list-disciplina',
  templateUrl: './list-disciplina.component.html',
  styleUrls: ['./list-disciplina.component.css']
})
export class ListDisciplinaComponent implements OnInit {

  disciplinas: Disciplina[];
  errorText = null;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getDisciplinas()
      .subscribe( data => {
          this.disciplinas = data.result;
      });
  }

  deleteDisciplina(disciplina: Disciplina): void {
    this.errorText = null;
    this.apiService.deleteDisciplina(disciplina.id)
      .subscribe( data => {
        if(data.status === 200) {
            this.disciplinas = this.disciplinas.filter(u => u !== disciplina);
          }else {
            this.errorText = data.message;
          }
      })
  };

  editDisciplina(disciplina: Disciplina): void {
    window.localStorage.removeItem("editDisciplinaId");
    window.localStorage.setItem("editDisciplinaId", disciplina.id.toString());
    this.router.navigate(['edit-disciplina']);
  };

  addDisciplina(): void {
    this.router.navigate(['add-disciplina']);
  };
}
