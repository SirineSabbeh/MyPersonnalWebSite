import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private  ProfileService :ProfileService ) { }
  projects:any

  ngOnInit(): void {
    
   this.getProjects();
 
  };



  getProjects(){
    this.ProfileService.projects().subscribe(
      Response=>{
       this.projects=Response
      }
    )
}
}
