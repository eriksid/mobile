import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UtilProvider } from '../../providers/util/util';

/**
 * Generated class for the OnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-one',
  templateUrl: 'one.html',
})
export class OnePage {
  itens: any;
  qtd_sabores: number;
  sabores: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private util :UtilProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnePage');
    const ret = this.util.getSizes();
         ret.then( data =>{
           console.log(data);
           this.itens = data;
         });
  }
  getSabores (item:any) {
    this.qtd_sabores = item.quantidade_sabores;
    const ret = this.util.getSabores(item.id);
         ret.then( data =>{
           this.sabores = data;
           console.log(data);
         //this.navCtrl.push(O);

         });

  }

}
