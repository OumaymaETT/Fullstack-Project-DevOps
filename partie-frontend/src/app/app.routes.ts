import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { TypeUserFormComponent } from './type-user-form/type-user-form.component';
import { TypeUserListComponent } from './type-user-list/type-user-list.component';
import { TypeUserEditComponent } from './type-user-edit/type-user-edit.component';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'edituser/:id', component: UserEditComponent },
  { path: 'type-users', component: TypeUserListComponent },
  { path: 'add-type-user', component: TypeUserFormComponent },
  { path: 'edit-type-user/:id', component: TypeUserEditComponent },

  { path: '', redirectTo: '/type-users', pathMatch: 'full' },
];
