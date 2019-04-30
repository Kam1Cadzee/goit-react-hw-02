import React from 'react';
import PropTypes from 'prop-types';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';
import styles from './Reader.module.css';

class Reader extends React.Component {
  state = { index: 0 };

  prevPublic = () =>
    this.setState(state => ({
      index: state.index - 1,
    }));

  nextPublic = () =>
    this.setState(state => ({
      index: state.index + 1,
    }));

  render() {
    const { items } = this.props;
    const { index } = this.state;
    const length = items.length - 1;
    return (
      <div className={styles.reader}>
        <Publication item={items[index]} />
        <Counter index={index} length={length} />
        <Controls
          prevPublic={this.prevPublic}
          nextPublic={this.nextPublic}
          length={length}
          index={index}
        />
      </div>
    );
  }
}
Reader.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
};
export default Reader;
