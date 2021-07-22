import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  private url = 'http://localhost:5000/agenda';
  
  constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams) {
  }

  guardar(nome,tipo,genero,apelido) {
    var pessoa = {
      nome: nome,tipo: tipo,genero: genero,apelido: apelido
    }
 
    console.log(pessoa);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

}
