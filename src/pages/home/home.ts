import { Component } from '@angular/core';
import { NavController, IonicPage} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import {Level} from '../../app/services/level';
import { LevelpaginaPage } from '../levelpagina/levelpagina';

import { NativeAudio } from '@ionic-native/native-audio';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  status: any;
  calkulatDisplay: any;
  allevels: any;

  

  constructor(public navCtrl: NavController, public storage: Storage
    , public levels:Level, private nativeAudio: NativeAudio, 
    private screenOrientation: ScreenOrientation) {
   
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    catch(err) {
      console.log("orientation lock error");
    }


    this.allevels = levels
    //this.storage.set('status', );

    this.nativeAudio.preloadComplex('uniqueId1', 'assets/8-bitsong.wav', 1, 1, 0);
    this.storage.get('muziek').then((val) => {
      

      if(val== undefined || val== null || val == 1){
        this.storage.set('muziek', 1);
        this.nativeAudio.loop('uniqueId1');
      }
      if(val == 0){
        
      }
    });

    
    this.calkulatDisplay= "(: ! Hallo ! :)"
    for(let i = 0; i < 5; i++){
      setTimeout(() => {
        this.calkulatDisplay= " ";
      }, 400 * i - 50);
      setTimeout(() => {
        this.calkulatDisplay= "(: ! Hallo ! :)"
      }, 400 * i + 50);
    }
    for(let i = 0; i < 200; i++){
      setTimeout(() => {
        
          this.calkulatDisplay = Math.random() * (100000000 - 0) + 0;
          this.calkulatDisplay = parseInt(this.calkulatDisplay);
        
      }, 2000);
    }   


  }

  
  ionViewDidEnter() {

    for(let i=1; i < this.allevels.getLevels().length + 1; i++){
      
         document.getElementById(i+"").classList.add("levelButtonHomeDisabelt");
    }

    this.storage.get('status').then((val) => {
      
      this.status = val;

      if(this.status== undefined || this.status== null){
        this.storage.set('status', 0);
      }

      this.storage.get('status').then((val) => {
        
        this.status = val;
  
        document.getElementById((parseInt(this.status)+1)+"").classList.add("levelButtonHomeNext");

        document.getElementById((parseInt(this.status)+1)+"").classList.remove("levelButtonHomeDisabelt");

        for(let i=1; i < (parseInt(this.status)+1); i++){
          document.getElementById(i+"").classList.add("levelButtonHomeWon");

          document.getElementById(i+"").classList.remove("levelButtonHomeDisabelt");
          document.getElementById(i+"").classList.remove("levelButtonHomeNext");
    
        }
        
        for(let i=(parseInt(this.status)+2); i < this.allevels.getLevels().length+1; i++){

          document.getElementById(i+"").classList.add("levelButtonHomeDisabelt");

          document.getElementById(i+"").classList.remove("levelButtonHomeNext");
          document.getElementById(i+"").classList.remove("levelButtonHomeWon");
        }

    })});
  }
  setButtonsStaat(){
    
  }
  ionViewDidLoad() {   
  }

  getLevels(){

  }

  random(){
    for(let i = 0; i < 100; i++){
      setTimeout(() => {
        
        this.calkulatDisplay =  Math.random() * ( 100000000 - 0) + 0;
          this.calkulatDisplay = parseInt(this.calkulatDisplay);
        
      }, 10 + 2 * i);
    }
     
  }

  goToLevel(lev){
    this.navCtrl.push(LevelpaginaPage, {id: lev.levelId});
  }


  setLevels(){
    console.log("set");
  }

}
