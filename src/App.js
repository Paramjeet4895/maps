import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class App extends React.Component {
  render() {
    return (
      <Map google={this.props.google}
        style={{ width: '100%', height: '100%', position: 'relative' }}
        className={'map'}
        zoom={14}>
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'ValueCoders'}
          position={{ lat: 28.4528, lng: 77.0697 }} />
        <Marker
          name={'Sector 40'}
          position={{ lat: 28.4498, lng: 77.0567 }} />
        <Marker />
        <Marker
          name={'Amritsar'}
          position={{ lat: 31.6340, lng: 74.8723 }}
        />
        <Marker
          name={'Pune'}
          position={{ lat: 18.5204, lng: 73.8567 }}
        />
        <Marker
          name={'Guwahati'}
          position={{ lat: 26.1445, lng: 91.7362 }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("API KEY")
})(App)
