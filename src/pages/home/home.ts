import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarPage } from '../cadastrar/cadastrar';
import { ListusuariosPage } from '../listusuarios/listusuarios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public testVariavel:string = "Gabriela Farias - test"

  constructor(public navCtrl: NavController) {

  }

  public pageCadastro():void{
  	this.navCtrl.push( CadastrarPage );
  }

  public pageListagem():void{
  	this.navCtrl.push( ListusuariosPage );
  }

//  public somaDoisNumeros(num1:number, num2:number): void{
//  	alert(num1+num2);
//  }
//
//  ionViewDidLoad(){
//  	this.somaDoisNumeros(1, 8);
//  }

}
