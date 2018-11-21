import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequistionsFormPage } from '../requistions-form/requistions-form';

/**
 * Generated class for the RequistionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requistions',
  templateUrl: 'requistions.html',
})
export class RequistionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  demo1()
  {
    this.navCtrl.push(RequistionsFormPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RequistionsPage');
  //  this.demo1();
  }

}
