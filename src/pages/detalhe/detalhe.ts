import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs' ;

/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  public pessoa: any = [];
  public contactos: any = [];
  constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams) {
    //this.detalhes();
  }

  detalhes(){
    var idpessoa = this.navParams.get('idpessoa');
    var url = this.navParams.get('url');
      
    this.http.get(url + '/pessoa/' + idpessoa).subscribe(res => {
      if(res){
        console.log(res['id']);
        this.http.get(url + '/contacto/' + res['id']).subscribe(contactos => {
          console.log(contactos);
          this.contactos = contactos;
        });
        
        this.pessoa = res;

      }
    });

  }
  ionViewDidLoad() {
    this.detalhes();
    //console.log('ionViewDidLoad DetalhePage');
  }

}
