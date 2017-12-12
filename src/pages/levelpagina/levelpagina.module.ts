import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LevelpaginaPage } from './levelpagina';
import {Level} from '../../app/services/level';


import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

@NgModule({
  declarations: [
    LevelpaginaPage,
  ],
  imports: [
    IonicPageModule.forChild(LevelpaginaPage),
  ],
  providers: [
    Level
    ]
})
export class LevelpaginaPageModule {}
