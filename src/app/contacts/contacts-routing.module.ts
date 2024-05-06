import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent }, 
  { path: 'add', component: AddComponent },  
  { path: 'update/:contact_id', component: UpdateComponent },
  { path: 'detail/:contact_id', component: DetailComponent },   
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
