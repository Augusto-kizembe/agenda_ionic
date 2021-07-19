import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhePage } from '../detalhe/detalhe';
import { RegistrarPage } from '../registrar/registrar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
  
  add(){
    this.navCtrl.push(RegistrarPage);
  }

  detalhe() {
    this.navCtrl.push(DetalhePage);
  }

}
