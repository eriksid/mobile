import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnePage } from './one';
import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    OnePage,
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(OnePage),
  ],
})
export class OnePageModule {}
