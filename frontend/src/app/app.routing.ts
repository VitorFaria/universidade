import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./user/add-user/add-user.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";
import {AddAlunoComponent } from './aluno/add-aluno/add-aluno.component';
import {ListAlunoComponent} from "./aluno/list-aluno/list-aluno.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'add-aluno', component: AddAlunoComponent },
  { path: 'list-aluno', component: ListAlunoComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
