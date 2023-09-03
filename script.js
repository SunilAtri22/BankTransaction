const inputAmount = document.getElementById('inputAmount')
const depositAmount = document.getElementById('deposit')
const withdrawAmount = document.getElementById('withdraw')
const showBalance = document.getElementById('balance')
const transaction = document.getElementById('transaction')

class BankAccount {
    constructor (balance){
        this.balance = balance
    }

    withdraw(amount){
        if(this.balance < amount){
            transaction.innerText = "Insufficient Balance to make this transaction!"
            return
        }
        this.balance -= amount
        transaction.innerText = 'Your account is debited by Rs. ' + amount
    }

    deposit(amount){
        this.balance += amount
        transaction.innerText = 'Your account is credited by Rs. ' + amount
    }
}

const accHolder = new BankAccount(0)

depositAmount.addEventListener('click', ()=>{
    const amount = Number(inputAmount.value)
    inputAmount.value = ""
    accHolder.deposit(amount)
    showBalance.innerText = 'Balance : ' + accHolder.balance + '.00'
})

withdrawAmount.addEventListener('click', ()=>{
    const amount = Number(inputAmount.value)
    inputAmount.value = ""
    accHolder.withdraw(amount)
    showBalance.innerText = 'Balance : ' + accHolder.balance + '.00'
})