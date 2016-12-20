import {Component, ViewChild} from '@angular/core';
import {Content, NavController} from 'ionic-angular';
import {DetailComponent} from '../detail/detail.component';
import {DataService} from '../../shared/index';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  public contracts = [];
  detailComponent = DetailComponent;

  constructor (     private nav: NavController,
                    private dataService: DataService
  ) {
    this.contracts = dataService.getContracts();
  }

  @ViewChild(Content) content: Content;

  goAddPage(){
    this.nav.push(DetailComponent);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

  scrollToBottom() {
    this.content.scrollToBottom();
  }

  openDetail() {
    this.nav.push(DetailComponent)
  }
}
