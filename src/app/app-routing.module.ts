import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { PageOneComponent } from './components/pages/page-one/page-one.component';
import { PageTwoComponent } from './components/pages/page-two/page-two.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'actividad1/niveles/nivel1-1',
        component: PageOneComponent,
      },
      {
        path: 'actividad1/niveles/nivel1-2',
        component: PageTwoComponent,
      },
    ],
  },
  {
    path: '**', 
    redirectTo: '',
    pathMatch: 'full'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
