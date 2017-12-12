import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';
import {LoginPage} from '../login/login';
import { NativeAudio } from '@ionic-native/native-audio';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController,public storage: Storage, 
    public navParams: NavParams, private alertCtrl: AlertController, private nativeAudio: NativeAudio) {
    
}

verwijderProgres(){
  //een alert ge maakt
  let alert = this.alertCtrl.create({
    title: 'Progress wissen?',
    message: 'weet je zeker dat je alle gegevens wilt wissen?',
    //de knoppen en de code achter de knoppen worden hier aan gemaakt
    buttons: [
        {
          text: 'Nee',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        },
        {
          text: 'Ja',
          handler: () => {
            this.storage.set('status', 0);

            //deze code zorcht er voor dat de battery verdwijnt
            document.getElementById("b1").style.visibility = "hidden";
            document.getElementById("b2").style.visibility = "hidden";
            document.getElementById("b3").style.visibility = "hidden";
            document.getElementById("b4").style.visibility = "hidden";

            this.storage.get('muziek').then((val) => {
                   
              if(val== undefined || val== null || val == 1){
                this.nativeAudio.stop('uniqueId1');
              }
            });

            //deze code zorcht er voor dat de battery terug komt met een vertraging van 1500
            setTimeout(() => {
              
              document.getElementById("b1").style.visibility = "visible";
              document.getElementById("b2").style.visibility = "visible";
              document.getElementById("b3").style.visibility = "visible";
              document.getElementById("b4").style.visibility = "visible";

              this.storage.get('muziek').then((val) => {
                
                if(val== undefined || val== null || val == 1){
                  this.nativeAudio.loop('uniqueId1');
                }
              });
              
            }, 1500);

          }
        }
    ]
  });
  //de alert word getoond
  alert.present();
}

  ionViewDidLoad() {
  }
  terug(){
    //er wort terug genaviegeert naar home
    this.navCtrl.pop();
  }

  logoutUser(){
    this.nativeAudio.stop('uniqueId1');
    this.storage.set('muziek', 0);

    firebase.auth().signOut();
    
    this.navCtrl.push(LoginPage);
  

  }

  song(){

     this.storage.get('muziek').then((val) => {
      

      if(val== undefined || val== null || val == 0){

        this.storage.set('muziek', 1);
        this.nativeAudio.loop('uniqueId1');

      }else{

        this.storage.set('muziek', 0);
        this.nativeAudio.stop('uniqueId1');
        
      }

    });
  }
}
