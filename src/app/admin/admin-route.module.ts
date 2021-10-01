import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMatchComponent } from './add-match/add-match.component';
import { AddResultComponent } from './add-result/add-result.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'addmatch',
    component: AddMatchComponent,
  },
  {
    path: 'addresult',
    component: AddResultComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule {}
