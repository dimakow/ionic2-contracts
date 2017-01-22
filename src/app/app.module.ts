import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { ContractAppComponent } from './app.component';

import { HomeComponent } from '../pages/home/home.component';
import { AddContractComponent } from '../pages/add-contract/add-contract.component';
import { DetailComponent } from '../pages/detail/detail.component';
import { GraphComponent} from '../pages/graph/graph.component'
import { SettingsComponent } from '../pages/settings/settings.component'

import { ContractService} from '../providers/contractService';
import {StoreModule} from '@ngrx/store';

import {selectedTab} from '../reducers/selectedTab';

@NgModule({
  declarations: [
    ContractAppComponent,
    HomeComponent,
    GraphComponent,
    SettingsComponent,
    AddContractComponent,
    DetailComponent

  ],
  imports: [
    IonicModule.forRoot(ContractAppComponent),
    StoreModule.provideStore( {selectedTab}),
    IonicModule.forRoot(ContractAppComponent,{tabsPlacement: 'bottom'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ContractAppComponent,
    HomeComponent,
    GraphComponent,
    SettingsComponent,
    AddContractComponent,
    DetailComponent
  ],
  providers: [ContractService]
})
export class AppModule {}
