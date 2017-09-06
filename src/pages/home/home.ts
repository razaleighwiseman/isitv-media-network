import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cards: any = [];

  constructor(public navCtrl: NavController) {

    this.cards = [
      {
        title: "Platinum",
        content: "Package",
        color: "googleplus"
      },
      {
        title: "9",
        content: "4 Team Distribution",
        color: "instagram"
      },
      {
        title: "9",
        content: "13 Group Distribution by My Team",
        color: "danger"
      },
      {
        title: "12",
        content: "13 Group Distribution",
        color: "blur"
      }                             
    ];

  }

}
