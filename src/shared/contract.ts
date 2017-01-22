export class Contract{
  private name : string;
  private amount : number;
  private currency: string;
  private paymentCycle: string;
  private group : string;
  constructor(name:string, amount: number, currency: string, paymentCycle: string, group:string){
    this.name = name;
    this.amount = amount;
    this.currency = currency;
    this.paymentCycle = paymentCycle;
    this.group = group;
  }
}
