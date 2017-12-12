import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


import {Level} from '../../app/services/level';

@IonicPage()
@Component({
  selector: 'page-levelpagina',
  templateUrl: 'levelpagina.html',
})
export class LevelpaginaPage {
  status: any;

  

  id: any;
  levelData: any;
  levelStartData: any;
  disabeltButtons: any;
  oLevels: any;

  constructor(public navCtrl: NavController,public storage: Storage, public navParams: NavParams, public levels:Level, private alertCtrl: AlertController) {
    //het spel wort klaa gezet om te spelen
    this.oLevels = levels;
    this.id = navParams.get('id');
    this.levelData = JSON.parse(JSON.stringify(this.oLevels.getLevel(this.id)));

    this.disabeltButtons = new Array(6 - this.levelData.bewerkingen.length);

  
  }

  ionViewDidLoad() {   
    

  }

  levelaction(action){

    if (this.levelData.aantalMoves != 0){
      //als je aantal moves nog niet op zijn
      //er wort een move af getrokke 
      this.levelData.aantalMoves --;
      
      let i = action.split(' ');
      
      // kijkt of het een bewerking is of het een replace
      if(i.length > 2){
        if(i[1] == '->'){
          this.levelData.beginwaarden =  parseInt((this.levelData.beginwaarden + "").replace(i[0],i[2]));
        }
      }
      else{
        //hier wort de onderschijd gemaakt tussen welke bewerking er gebeurt moet worden en daar na toe passen
        switch (i[0]) {
          case '+':
              this.levelData.beginwaarden = this.levelData.beginwaarden + parseInt(i[1]);
              break;

          case '-':
              this.levelData.beginwaarden = this.levelData.beginwaarden - parseInt(i[1]);
              break;

          case 'x':
              this.levelData.beginwaarden = this.levelData.beginwaarden * parseInt(i[1]);
              break;

          case '/':
              this.levelData.beginwaarden = this.levelData.beginwaarden / parseInt(i[1]);
              break;

          default:
        }
      }
    }

    if (this.levelData.aantalMoves == 0){
      //als je aantal moves op zijn kom je hier terecht

      if(this.levelData.uitkomst == this.levelData.beginwaarden){
        //als je gewonne hebt kom je hier terecht
        //er wort opgeslagen dat je dit level gewonnen hebt
        this.storage.get('status').then((val) => {
          
          this.status = val;

          //er word gecontroleert of je niet al verder in het spel zit zo dat we het niet over schrijven
          if(this.status < this.id){

            this.storage.set('status', this.id);

          }
        });

        //de knop om naar het volgende level te gaan kan nu gebruikt worden
        document.getElementById("nextButton").removeAttribute('disabled');;
        document.getElementById("topNummer").style.color = '#2fe61b';

      }else{
        //als je verloren hebt kom je hier te recht
        //de tekst verkleurt rood
        document.getElementById("topNummer").style.color = '#bb1414';

      }


      this.disabeltButtons = new Array(6 - this.levelData.bewerkingen.length);
      
     
    }
    
  }

  levelC(){

    //dit is de coden om het spel te riesetten
    this.levelData =  JSON.parse(JSON.stringify(this.oLevels.getLevel(this.id)));
    this.disabeltButtons = new Array(6 - this.levelData.bewerkingen.length);

    document.getElementById("topNummer").style.color = '#000000';

  }
  terug(){
    //terug naar home
    this.navCtrl.pop();
  }
  next(){
    //hier mee wort het volgende level bepaalt en naar toe genaviegeert
    this.navCtrl.push(LevelpaginaPage, {id: (parseInt(this.id) + 1)}).then(() => {
      let index = 1;
      this.navCtrl.remove(index);
    });
  }
}
