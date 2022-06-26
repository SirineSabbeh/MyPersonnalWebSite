import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './profile/about/about.component';
import { ContactComponent } from './profile/contact/contact.component';
import { EducationComponent } from './profile/education/education.component';
import { ExperienceComponent } from './profile/experience/experience.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import { SkillsComponent } from './profile/skills/skills.component';

const routes: Routes = [
  
{path:'',component:AboutComponent},
{path:'Education',component:EducationComponent},
{path:'projects',component:ProjectsComponent},
{path:'skills',component:SkillsComponent},
{path:'experience',component:ExperienceComponent},
{path:'contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
