import React from 'react';
import shortid from 'shortid';
import styles from './Dashboard.module.css';
import Balance from './Balance/Balance';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Controls from './Controls/Controls';
import types from './transactionTypes';

class Dashboard extends React.Component {
  state = { history: [], balance: 5000 };

  createItemHistory = (amount, type) => ({
    id: shortid.generate(),
    type,
    amount,
    date: new Date().toLocaleString(),
  });

  getCostsOrIncome = type =>
    // eslint-disable-next-line react/destructuring-assignment
    this.state.history
      .filter(trans => trans.type === type)
      .reduce((acc, current) => acc + current.amount, 0);

  handelClickDeposit = value => {
    if (value === 0) {
      alert('Введите сумму для проведения операции!');
      return;
    }
    this.setState(state => {
      const balance = state.balance + value;
      return {
        balance,
        history: [
          ...state.history,
          this.createItemHistory(value, types.DEPOSIT),
        ],
      };
    });
  };

  handelClickWithdraw = value => {
    let { balance } = this.state;
    if (balance < value) {
      alert('На счету недостаточно средств для проведения операции!');
      return;
    }
    if (value === 0) {
      alert('Введите сумму для проведения операции!');
      return;
    }
    this.setState(state => {
      balance = state.balance - value;
      return {
        balance,
        history: [
          ...state.history,
          this.createItemHistory(value, types.WITHDRAW),
        ],
      };
    });
  };

  render() {
    const { history, balance } = this.state;
    return (
      <div className={styles.dashboard}>
        <Controls
          onClickDeposit={this.handelClickDeposit}
          onClickWithdraw={this.handelClickWithdraw}
        />
        <Balance
          balance={balance}
          costs={this.getCostsOrIncome(types.DEPOSIT)}
          income={this.getCostsOrIncome(types.WITHDRAW)}
        />
        <TransactionHistory transactions={history} />
      </div>
    );
  }
}

export default Dashboard;
