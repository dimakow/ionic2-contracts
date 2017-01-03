import {Component, ViewChild} from '@angular/core';
import {Content, NavController} from 'ionic-angular';
import {AddContractComponent} from '../add-contract/add-contract.component';
import {DetailComponent} from '../detail/detail.component';
import {DataService} from '../../shared/index';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  public contracts = [];

  addConractComponent = AddContractComponent;
  detailComponent = DetailComponent;


  constructor (     private nav: NavController,
                    private dataService: DataService
  ) {
    this.contracts = dataService.getContracts();
  }

  @ViewChild(Content) content: Content;

  goAddPage(){
    this.nav.push(this.addConractComponent);
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
