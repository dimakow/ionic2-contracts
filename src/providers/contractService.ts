import {Injectable} from '@angular/core';
import { Platform } from 'ionic-angular';
import {File} from 'ionic-native';
import { Contract } from '../shared/contract';

declare var cordova: any;
@Injectable()

export class ContractService {

    public aContracts : Object[];

    constructor(platform: Platform,) {
      this.aContracts = [];
      platform.ready().then(() => {
            console.log("before");
            console.log(cordova.file);
            /*
            window.addEventListener('filePluginIsReady', function(){ console.log('File plugin is ready');}, false);
            File.listDir(cordova.file.dataDirectory, '')
              .then((data) => {
                console.log(data);
                console.log("test");
              }
                , (data)=> console.log('Error: '+JSON.stringify(data)));
            console.log("after");*/
        });
    }


    initDB() {

    }

    addContract(name: string, amount: number, currency: string, paymentCycle: string, group: string){
      let oNewContract = new Contract(name,
                                      amount,
                                      currency,
                                      paymentCycle,
                                      group);
      this.aContracts.push(oNewContract);
    }

    getContracts() {
        return this.aContracts;
    }
}
