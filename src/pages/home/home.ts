import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'; 
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs' ;

import { DetalhePage } from '../detalhe/detalhe';
import { RegistrarPage } from '../registrar/registrar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url = 'http://localhost:5000/agenda';
  public dados: any = [];

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.allpessoas(); 
  }

  allpessoas(): void{
     this.http.get(this.url + '/pessoas').subscribe(res => {
      console.log(res);
       this.dados = res; 
    });
    
  }

  add(){ 
    this.navCtrl.push(RegistrarPage);
  }

  detalhe(id) {
    console.log(id);
   // this.navCtrl.push(DetalhePage);
  }

}
