import { EditEnrolleeComponent } from './edit-enrollee/edit-enrollee.component';
import { EnrolleesListComponent } from './enrollees-list/enrollees-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: EnrolleesListComponent,
  },
  {
    path: 'enrollee/:id',
    component: EditEnrolleeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
