import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  //baseUrl="https://localhost:44346/api/"
  constructor(private http:HttpClient) { 

  }


  Projects:any=[
    {
      id: 1,
      title: 'Transportation Estimation Website',
      desc: '',
      githurl: 'https://github.com/SirineSabbeh/web_site_estimation',
      imgUrl: 'assets/images/TransportWebSite.PNG',
      worktech: 'Angular 13 ,Asp.net Core 5 ,Email JS'
    },
    {
      id: 2,
      title: 'My Personnel WebSite',
      desc: '',
      githurl: 'https://github.com/SirineSabbeh/MyPersonnalWebSite',
      imgUrl: 'assets/images/MyPersonnalProjects.PNG',
      worktech: 'Angular 13 ,GitHub,Email JS'
    },
    {
      id: 3,
      title: '(Freelance) Bazinfo WebSite Backend',
      desc: '',
      githurl: 'https://github.com/SirineSabbeh/BAZINFO_WEB_SITE',
      imgUrl: 'assets/images/E-Commerce.jpg',
      worktech: 'Angular 13 ,Asp.net Core 5 ,Email JS'

    },
    {

      id: 4,
      title: 'Students Management(CRUD)',
      desc: '',
      githurl: 'https://github.com/SirineSabbeh/STUDENTCRUD_ASP.NET_MVC',
      imgUrl: 'assets/images/StudentMVC.PNG',
      worktech: ' Asp.net MVC ,MongoDB'
    
    },
    {

      id: 5,
      title: 'Mobile Order Management App',
      desc: '',
      githurl: 'https://github.com/Sirine17111997/MyFood-App-Mobile',
      imgUrl: 'assets/images/Android.png',
      worktech: 'Android ,SqlLite,Java'
    },
    {
      id: 6,
      title: 'project end of studies',
      desc: '',
      githurl: 'https://github.com/SirineSabbeh/PROJECT-PFE-Code',
      imgUrl: 'assets/images/salesforce.PNG',
      worktech: 'LWC,APEX,SOQL'
      



    }
]
  
Experience:any=[
 {
  id: 1,
  company :'Q3 Advocacy',
  location :'Tunis-Tunisia',
  timeline :'November 2021 to May 2022',
  role :'Software Engineer',
  work :'Regular update of a great solution that built using   ASP.NET MVC according to needs and demands,  Perform the necessary tests after the end of some tickets,And write and modify functional specifications'
},
{
  id: 2,
  company :'Cloud Monsters Tunisia',
  location :'Nabeul-Tunisia',
  timeline :'Feb 2021 to July 2022',
  role :'salesforce developer intern',
  work :' Create a custom application on the Salesforce platform to manage IT project resources and time tracking for each project task using APEX ,LWC.'
},
{
  id: 3,
  company :'GCI STUDIO',
  location :'Nabeul-Tunisia',
  timeline :' Juin 2020 to August 2020',
  role :'Engineering Internship ',
  work :' Creating a simple animated game using unity 3D and C#.'
}]

Skills:any=[
  {
    id: 1,
    skill:'ANGULAR 2+',
    progress:'80%'
  },
  {
    id: 2,
    skill:'ASP.NET CORE',
    progress:'80%'
  },
  {
    id: 3,
    skill:'HTML,CSS',
    progress:'85%'
  },
  {
    id: 3,
    skill:'JAVASCRIPT,JQUERY',
    progress:'75%'
  },
  {
    id: 3,
    skill:'SQL , MYSQL,MONOGO, ORACALE',
    progress:'80%'
  },
  {
    id: 3,
    skill:'C,C++,C#,JAVA',
    progress:'75%'
  },
  {
    id: 3,
    skill:'Machine learning ,Data mining',
    progress:'75%'
  },
  {
    id: 3,
    skill:'Git ,GitHub',
    progress:'75%'
  },
  {
    id: 3,
    skill:'Salesforce',
    progress:'65%'
  }


]
exprience() : Observable<any>{
    // return this.http.get(this.baseUrl + 'Experience')
    return this.Experience;
  }
projects() : Observable<any>{
    // return this.http.get(this.baseUrl + 'Projects')
    return this.Projects;
    
  }
skills() : Observable<any>{
   // return this.http.get(this.baseUrl + 'Skillls')
    return this.Skills;
}
  //Education() : Observable<any>{
    // return this.http.get(this.baseUrl + 'Education')
    
 // }
  //contacts(data:any):Observable<any>{
    //{
      // return this.http.post(this.baseUrl+'Contact',data)
   // }
  //}
}
