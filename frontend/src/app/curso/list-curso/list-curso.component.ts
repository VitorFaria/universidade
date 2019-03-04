import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Curso} from "../../model/curso.model";
import {ApiService} from "../../core/api.service";

@Component({
  selector: 'app-list-curso',
  templateUrl: './list-curso.component.html',
  styleUrls: ['./list-curso.component.css']
})
export class ListCursoComponent implements OnInit {

  cursos: Curso[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getCursos()
      .subscribe( data => {
          this.cursos = data.result;
      });
  }

  deleteCurso(curso: Curso): void {
    this.apiService.deleteCurso(curso.id)
      .subscribe( data => {
        this.cursos = this.cursos.filter(u => u !== curso);
      })
  };

  editCurso(curso: Curso): void {
    window.localStorage.removeItem("editCursoId");
    window.localStorage.setItem("editCursoId", curso.id.toString());
    this.router.navigate(['edit-curso']);
  };

  addCurso(): void {
    this.router.navigate(['add-curso']);
  };
}
