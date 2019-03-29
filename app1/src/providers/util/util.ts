import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UtilProvider Provider');
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
  getSabores (id:number) {
    return new Promise((resolve, reject) => {
      this.http.get("http://104.196.102.231/sabores/"+id, )
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error.error);
        });
    });

  }



}
