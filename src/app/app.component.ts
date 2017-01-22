import {Component} from '@angular/core';
import {HomeComponent} from '../pages/home/home.component';

import {Observable} from "rxjs/Observable";
import {Store} from '@ngrx/store';
import {AppState} from '../models/appState';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class ContractAppComponent {
  rootPage: any = HomeComponent;
  selectedTab: Observable<String>;
  testobject : any;
  constructor
    (private store: Store<AppState>)
    {
      this.selectedTab = store.select('selectedTab');
      this.selectedTab.subscribe(
        (v) => {
          console.log(v);
        console.log(this);}
        );
    };
}
