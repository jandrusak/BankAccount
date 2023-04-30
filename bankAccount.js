// Bank Account
class bankAccount {
  constructor(_accountNumber,_owner) //account Number and name of person who owns account.
  {
    this.accountNumber = _accountNumber;
    this.owner = _owner;
  }

  transactions = [];

  balance() //returns current balance of account
  { 
    
    if(this.transactions.length < 0)
    {
      return false
    }

    if(this.transactions.length ==0)
    {
      console.log("No History")
    }

    else if (this.transactions.length ==0)
    {
      console.log(this.transactions[0].amount)
    }
    else{
    let sum = 0
    for(let i=0; i < this.transactions.length; i++)
    {
      sum += this.transactions[i].amount
    }
      console.log("sum: " + sum)
  }
}

  deposit(amt) //cannot deposit negative amounts. 
  {
    if (amt>0){
    let newTransaction = new transactions(amt, this.owner)
    this.transactions.push(newTransaction)
    }
  }

  charge(payee, amt) 
  {
    let newTransaction = new transactions(-amt, payee)
    this.transactions.push(newTransaction)
  }
}

class transactions 
  {
    constructor(_amount, _payee) 
  {
      this.payee = _payee;
      this.amount = _amount;
      this.date = new Date()
      // const d = new Date()
      // this.date = d.getDay();
    }
    //  date
  }

  let myFirstAccount = new bankAccount("account25", "Patrick");
  let myFirstTransaction = new transactions(20.00, 14.50);

  myFirstAccount.deposit(5.50)
  myFirstAccount.deposit(4.50)
//sum=10

  myFirstAccount.charge("Patrick", 22)
  myFirstAccount.balance()