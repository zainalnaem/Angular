import { Component, EventEmitter } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredIntialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  constructor(private investmentService: InvestmentService){}

onSubmit(){
  this.investmentService.calculateInvestmentResults({
    initialInvestment: + this.enteredIntialInvestment,
    duration: + this.enteredAnnualInvestment,
    expectedReturn: + this.enteredExpectedReturn,
    annualInvestment: + this.enteredDuration
  });
  
}
}
