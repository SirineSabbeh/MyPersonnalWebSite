import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service'
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private  ProfileService :ProfileService ) { }
  exps:any=[]
  ngOnInit(): void {

  //  this.getExperience();
  this.exps=this.ProfileService.exprience();

  }



  // getExperience(){
  //   this.ProfileService.exprience().subscribe(
  //     Response=>{
  //      this.exps=Response
  //     }
  //   )
     
    
  // }
}
