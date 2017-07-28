import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, Platform } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
    loginData = {
    email: '',
    password: ''
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private platform: Platform    
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login() {
      let loader = this.loadingCtrl.create({
        content: "Checking credentials..."
      });

      loader.present();     
    // Login Code here
    this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
        .then(auth => {
          // Do custom things with auth
          loader.dismiss();
        })
        .catch(err => {
          loader.dismiss();
          // Handle error
          let toast = this.toastCtrl.create({
                  message: err.message,
                  duration: 2000
                });
          toast.present();          
        });
  }  

}
