import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.AboutComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AboutRoutingModule {}
