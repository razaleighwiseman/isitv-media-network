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
        title: "Item 1",
        content: "Et vim suscipit apeirian incorrupte, et eruditi liberavisse qui. Augue iudicabit pri at, an mea quidam fabellas, vis id ocurreret sententiae reprimique. Cu mea illud aeterno, deleniti reprimique neglegentur ei pro. Nec ne ipsum omnium sadipscing, vis habemus assueverit et. Munere complectitur ea usu."
      },
      {
        title: "Item 2",
        content: "Et vim suscipit apeirian incorrupte, et eruditi liberavisse qui. Augue iudicabit pri at, an mea quidam fabellas, vis id ocurreret sententiae reprimique. Cu mea illud aeterno, deleniti reprimique neglegentur ei pro. Nec ne ipsum omnium sadipscing, vis habemus assueverit et. Munere complectitur ea usu."
      },
      {
        title: "Item 3",
        content: "Et vim suscipit apeirian incorrupte, et eruditi liberavisse qui. Augue iudicabit pri at, an mea quidam fabellas, vis id ocurreret sententiae reprimique. Cu mea illud aeterno, deleniti reprimique neglegentur ei pro. Nec ne ipsum omnium sadipscing, vis habemus assueverit et. Munere complectitur ea usu."
      },
      {
        title: "Item 4",
        content: "Et vim suscipit apeirian incorrupte, et eruditi liberavisse qui. Augue iudicabit pri at, an mea quidam fabellas, vis id ocurreret sententiae reprimique. Cu mea illud aeterno, deleniti reprimique neglegentur ei pro. Nec ne ipsum omnium sadipscing, vis habemus assueverit et. Munere complectitur ea usu."
      },
      {
        title: "Item 5",
        content: "Et vim suscipit apeirian incorrupte, et eruditi liberavisse qui. Augue iudicabit pri at, an mea quidam fabellas, vis id ocurreret sententiae reprimique. Cu mea illud aeterno, deleniti reprimique neglegentur ei pro. Nec ne ipsum omnium sadipscing, vis habemus assueverit et. Munere complectitur ea usu."
      },
      {
        title: "Item 6",
        content: "Et vim suscipit apeirian incorrupte, et eruditi liberavisse qui. Augue iudicabit pri at, an mea quidam fabellas, vis id ocurreret sententiae reprimique. Cu mea illud aeterno, deleniti reprimique neglegentur ei pro. Nec ne ipsum omnium sadipscing, vis habemus assueverit et. Munere complectitur ea usu."
      }                              
    ];

  }

}
