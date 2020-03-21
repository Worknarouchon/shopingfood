import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {YumvunPage} from '../yumvun/yumvun';
import {YumkanomgPage} from '../yumkanomg/yumkanomg';
import {YumkanaPage} from '../yumkana/yumkana';
import {YumhoshPage} from '../yumhosh/yumhosh';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
goToYumvun(){
  this.navCtrl.push(YumvunPage);
}

goToYumkanomg(){
  this.navCtrl.push(YumkanomgPage);
}

goToYumkana(){
  this.navCtrl.push(YumkanaPage);
}

goToYumhosh(){
  this.navCtrl.push(YumhoshPage);
}


}
