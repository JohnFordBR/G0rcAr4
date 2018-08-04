import { Component } from '@angular/core';
import {NavController, ToastController, NavParams} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams ) {

  }


ionViewWillLoad(){
  this.afAuth.authState.subscribe(data => {
    if(data.email && data.uid)
    {
      this.toast.create({
        message: `Welcome to G0rcAr4, ${data.email}`,
        duration: 1000
      }).present();
    }
      else {
        this.toast.create({
          message: `Could not authenticate`,
          duration: 1000
        }).present();
      }


  });
}
}
