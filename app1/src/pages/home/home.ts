import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController, Loading } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-home',
      templateUrl: 'home.html'
})
export class HomePage {
    userName: string = '';
    password: string = '';
    erro_msg: string = '';
    loading: Loading;

  constructor(public navCtrl: NavController,
      private http: HttpClient,
      private alertCtrl: AlertController,
      private loadingCtrl: LoadingController

      ) {
  }
  login() {
    const ret = this.getLogin();
  this.showLoading();

    ret.then(data => {
      this.loading.dismiss();
      if("token" in data) {
        console.log('Logado com sucesso!');
         this.navCtrl.push('OnePage');
      }
    }).catch(erro =>{
      this.erro_msg = erro.AditionalInfo;
      this.loading.dismiss();
      this.showAlert();
    });
  }
  getLogin() {
    return new Promise((resolve, reject) => {
      var data = {
        userName: this.userName,
        password: this.password
      };

      this.http.post("http://104.196.102.231/logon", data)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error.error);
        });
    });

  }
  getSizes () {
    return new Promise((resolve, reject) => {
      this.http.get("http://104.196.102.231/tamanhos", )
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error.error);
        });
    });

  }
    showAlert() {
    const alert = this.alertCtrl.create({
      title:   'Atenção!',
      subTitle: this.erro_msg,
      buttons: ['OK']
    });
    alert.present();
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor aguarde...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 }
