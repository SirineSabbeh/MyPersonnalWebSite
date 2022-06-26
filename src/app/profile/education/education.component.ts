import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import * as AOS from 'aos'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private profileService:ProfileService ) { }
 
  ngOnInit(): void {
   AOS.init();
  }


}
