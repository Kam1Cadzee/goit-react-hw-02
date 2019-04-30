import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';
import types from '../transactionTypes';

class Controls extends React.Component {
  state = { value: 0 };

  handleChange = e => this.setState({ value: +e.target.value });

  render() {
    const { onClickDeposit, onClickWithdraw } = this.props;
    const { value } = this.state;
    return (
      <div className={styles.controls}>
        <input type="number" value={value} onChange={this.handleChange} />
        <button type="button" onClick={() => onClickDeposit(value)}>
          {types.DEPOSIT}
        </button>
        <button type="button" onClick={() => onClickWithdraw(value)}>
          {types.WITHDRAW}
        </button>
      </div>
    );
  }
}

Controls.propTypes = {
  onClickDeposit: PropTypes.func.isRequired,
  onClickWithdraw: PropTypes.func.isRequired,
};

export default Controls;
