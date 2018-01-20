/**
 * Injected via script tag due to webpack compatibility issues
 * import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
 * https://github.com/mapbox/mapbox-gl-js/issues/4359
 */

const defaultMapOptions = {
  container: 'map-container',
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [-73.982967, 40.7825777], // starting position [lng, lat]
  zoom: 12, // starting zoom
};

const MapService = ({ options = defaultMapOptions } = {}) => ({
  options,
  init(token) {
    mapboxgl.accessToken =
      token ||
      'pk.eyJ1Ijoic2NodWNoYXJkIiwiYSI6ImNqYzVtenB5cjBxYm8yd25zdWhxcHVxdHQifQ.zY_W__bcsv6AkpNriilnsg';

    return this;
  },
  map(mapOptions) {
    return new mapboxgl.Map(mapOptions || this.options);
  },
});

export default MapService;
