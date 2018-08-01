import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListusuariosPage } from './listusuarios';

@NgModule({
  declarations: [
    ListusuariosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListusuariosPage),
  ],
})
export class ListusuariosPageModule {}
