import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pessoa } from '../../app/pessoa';

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

  pessoa: { nome: String};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  guardar(pessoa) {
    console.log(pessoa);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

}
