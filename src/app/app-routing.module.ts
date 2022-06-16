import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './profile/about/about.component';
import { EducationComponent } from './profile/education/education.component';

const routes: Routes = [
  
{path:'',component:AboutComponent},
{path:'Education',component:EducationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
