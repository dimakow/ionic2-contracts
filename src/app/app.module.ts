import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { ContractAppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { AddContractComponent } from '../pages/add-contract/add-contract.component';
import { DetailComponent } from '../pages/detail/detail.component';
import { DataService} from '../shared/index';

@NgModule({
  declarations: [
    ContractAppComponent,
    HomeComponent,
    AddContractComponent,
    DetailComponent
  ],
  imports: [
    IonicModule.forRoot(ContractAppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ContractAppComponent,
    HomeComponent,
    AddContractComponent,
    DetailComponent
  ],
  providers: [DataService]
})
export class AppModule {}
