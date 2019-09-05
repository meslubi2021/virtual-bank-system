import { Component, OnInit } from '@angular/core';
import { BankAccount } from '../../models/bank-account';
import { BankAccountService } from '../../services/bank-account.service';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {


  bankAccounts: BankAccount[];
  transaction: Transaction;

  // dla comboboxa przy wykonywaniu przelewu
  currencyList: string[];

  constructor(private bankAccountService: BankAccountService,
    private transactionService: TransactionService) {
    this.bankAccountService.findAll()
      .subscribe(res => this.bankAccounts = res);
    this.transaction = new Transaction();
  }

  ngOnInit() {
  }

  createTransaction() {
    this.transaction.destinedCurrency = 'PLN';
    this.transactionService.create(this.transaction).subscribe(res => console.log(res));
  }

  changeCurrencyList() {
    this.currencyList = this.bankAccounts
      .find(e => e.number === this.transaction.sourceAccountNumber)
      .saldos
      .map(e => String(e.currencyType.currency))
  }
}
