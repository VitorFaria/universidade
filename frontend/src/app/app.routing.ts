import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from "./login/login.component";
import { AddUserComponent} from "./user/add-user/add-user.component";
import { ListUserComponent} from "./user/list-user/list-user.component";
import { EditUserComponent} from "./user/edit-user/edit-user.component";
import { AddAlunoComponent } from './aluno/add-aluno/add-aluno.component';
import { ListAlunoComponent} from "./aluno/list-aluno/list-aluno.component";
import { EditAlunoComponent} from "./aluno/edit-aluno/edit-aluno.component";
import { AddCursoComponent } from './curso/add-curso/add-curso.component';
import { ListCursoComponent } from './curso/list-curso/list-curso.component';
import { EditCursoComponent } from './curso/edit-curso/edit-curso.component';
import { AddMatriculaComponent } from './matricula/add-matricula/add-matricula.component';
import { ListMatriculaComponent } from './matricula/list-matricula/list-matricula.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'add-aluno', component: AddAlunoComponent },
  { path: 'list-aluno', component: ListAlunoComponent },
  { path: 'edit-aluno', component: EditAlunoComponent },
  { path: 'add-curso', component: AddCursoComponent },
  { path: 'list-curso', component: ListCursoComponent },
  { path: 'edit-curso', component: EditCursoComponent },
  { path: 'add-matricula', component: AddMatriculaComponent },
  { path: 'list-matricula', component: ListMatriculaComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
