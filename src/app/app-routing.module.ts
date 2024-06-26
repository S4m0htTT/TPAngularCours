import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'specialite', component: SpecialiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
