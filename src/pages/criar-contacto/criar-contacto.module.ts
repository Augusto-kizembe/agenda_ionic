import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarContactoPage } from './criar-contacto';

@NgModule({
  declarations: [
    CriarContactoPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarContactoPage),
  ],
})
export class CriarContactoPageModule {}
