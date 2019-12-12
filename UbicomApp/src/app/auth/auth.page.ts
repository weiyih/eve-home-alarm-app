import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { AlertController } from '@ionic/angular';
import { Router, ChildActivationEnd ,ActivatedRoute} from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/database';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(public alertController: AlertController,public router:Router,public authenticator: FingerprintAIO) { 


  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'You are not allowed to go inside this room, if you are still there for more than 5 minites, police will have a cup of coffee with you',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            this.gobacklogic()
            
          }
        }
       
      ]
    });

    await alert.present();
  }
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Ok',
      message: 'You are free to go in',
      buttons: [   {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
  
          firebase.database().ref("alarms/alrmidhere")
          .update(
          {
          Description:"Someone breaks inside door",ID:"alrmidhere",approve:true}).then(()=>{

            this.gobacklogic()
     


          })
          
      
        }
      }]
    });

    await alert.present();
  }

   gobacklogic(){
    var object = {ifleave:false};
           
    this.router.navigateByUrl('/home',{
      queryParams: object
      });  
    
   }
   ngOnInit() {
   

    this.authenticator.isAvailable().then(result => {
    if(result == "face"){
 
      this.authenticator.show({
   
        description:"moron"}).then((result: any)=>{
          if(result == "Success"){
            this.presentAlert2();
       
         
          }




        }).catch(e=>{
         
          this.presentAlert();


  })



}});

}}
