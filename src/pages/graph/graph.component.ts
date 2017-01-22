import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Graph page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-graph',
  templateUrl: 'graph.component.html'
})
export class GraphComponent {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GraphPage Page');
  }

}
