import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { ContractAppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { AddContractComponent } from '../pages/add-contract/add-contract.component';
import { DetailComponent } from '../pages/detail/detail.component';
import { ContractService} from '../providers/contractService';
import {StoreModule} from '@ngrx/store';

import {selectedTab} from '../reducers/selectedTab';

@NgModule({
  declarations: [
    ContractAppComponent,
    HomeComponent,
    AddContractComponent,
    DetailComponent
  ],
  imports: [
    IonicModule.forRoot(ContractAppComponent),
    StoreModule.provideStore( {selectedTab})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ContractAppComponent,
    HomeComponent,
    AddContractComponent,
    DetailComponent
  ],
  providers: [ContractService]
})
export class AppModule {}
