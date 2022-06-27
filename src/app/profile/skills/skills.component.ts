import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service'
import * as AOS from 'aos'


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  constructor(private  ProfileService :ProfileService ) { }
  skills:any=[]

  ngOnInit(): void {
   AOS.init();
  //  this.getSkills();
   this.skills=this.ProfileService.skills();
  };



//   getSkills(){
//     this.ProfileService.skills().subscribe(
//       Response=>{
//        this.skills=Response
//       }
//     )
// }

}
