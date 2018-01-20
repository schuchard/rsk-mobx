/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { inject, observer } from 'mobx-react';
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  // TODO:fix
  /* eslint-disable react/forbid-prop-types */
  static propTypes = {
    uiStore: PropTypes.any.isRequired,
  };

  handleClick = () => {
    this.props.uiStore.panelOpen = !this.props.uiStore.panelOpen;
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h2>{this.props.uiStore.panelIsOpen}</h2>
          <button onClick={this.handleClick}>click</button>
        </div>
      </div>
    );
  }
}

export default inject('uiStore')(withStyles(s)(observer(Home)));
