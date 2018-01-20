/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import DevTools from 'mobx-react-devtools';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Map from '../../components/Map';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={s.layoutRoot}>
        <DevTools />
        {this.props.children}
        <Map />
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(observer(Layout));
