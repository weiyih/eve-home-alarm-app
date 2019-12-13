import { Component } from '@angular/core';
import { Router, ChildActivationEnd,ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/database';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private  firebaseObject:any;
  private  route:any="alarms";
  public iffirsttime:boolean;
  res:any;

  constructor(private router: Router,public activatedRoute : ActivatedRoute,) {
     this.firebaseObject = firebase.database().ref("alarms");
     this.activatedRoute.queryParams.subscribe((res)=>{
      this.res=res.ifleave;
   });

  }

  navigate(){

    firebase.database().ref(this.route+"/alrmidhere")
    .update(
    {
    Description:"Someone breaks inside door",ID:"alrmidhere",approve:false})
    

  }

  ionViewDidEnter(){
    
    var ok = this;
    this.firebaseObject.on("value",snapshot=>{


    if(ok.iffirsttime===false){

      if(this.res=="")
        {
          if(snapshot.hasChild("alrmidhere"))
          {
         ok.iffirsttime=true;
        this.router.navigateByUrl('/auth');}}
      else{
         this.res=""

      }
    
    }

    ok.iffirsttime=false;

   })
   
  
}
  ngOnInit(){
  
    this.iffirsttime=true;
    this.res="";

  }
}
