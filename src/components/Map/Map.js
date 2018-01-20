import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Map.css';
import MapService from '../../core/map';

class Map extends React.Component {
  componentDidMount() {
    this.map = MapService()
      .init()
      .map();
  }

  render() {
    return <div id="map-container" className={s.root} />;
  }
}

export default withStyles(s)(Map);
