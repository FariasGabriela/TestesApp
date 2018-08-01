import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageusuarioPage } from '../pageusuario/pageusuario';

/**
 * Generated class for the ListusuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listusuarios',
  templateUrl: 'listusuarios.html',
})
export class ListusuariosPage {

	  items = [
	    'Pessoa 1',
	    'Pessoa 2',
	    'Pessoa 3',
	    'Pessoa 4',
	    'Pessoa 5',
	    'Pessoa 6',
	    'Pessoa 7',
	    'Pessoa 8',
	    'Pessoa 9',
	    'Pessoa 10',
	    'Pessoa 11',
	    'Pessoa 12',
	    'Pessoa 13',
	    'Pessoa 14',
	    'Pessoa 15',
	    'Pessoa 16',
	    'Pessoa 17'
	  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListusuariosPage');
  }

  itemSelected(item: string) {
    this.navCtrl.push( PageusuarioPage );
  }

}
