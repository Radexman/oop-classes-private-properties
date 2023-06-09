// ============= 07 Convention For Private Properties ============== //

class Wallet {
	constructor() {
		this._balance = 0;
		this._transactions = [];
	}

	deposit(amount) {
		this._processDeposit(amount);
		this._balance += amount;
	}

	withdraw(amount) {
		if (amount > this._balance) {
			console.log('Not enougt funds');
			return;
		}
		this._processWithdraw(amount);
		this._balance -= amount;
	}

	_processDeposit(amount) {
		console.log(`Depositing ${amount}`);
		this._transactions.push({
			type: 'deposit',
			amount,
		});
	}

	_processWithdraw() {
		console.log(`Withdrawing ${amount}`);
		this._transactions.push({
			type: 'withdraw',
			amount,
		});
	}

	get balance() {
		return this._balance;
	}

	get transactions() {
		return this._transactions;
	}
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(350);
console.log(wallet.balance);
console.log(wallet.transactions);
