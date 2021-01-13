import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from "react";
 import Typography from "@material-ui/core/Typography";
const style = {

  width: "100%",
    height: '250px'
};

 const data = [
   {
     name: "Whizdata Solutions",
     title: "office",
     lat: 12.94074,
     lng: 77.570398,
     id: 1
   },
 ];

export class MapContainer extends Component {
         constructor(props) {
           super(props);
           this.state = {
             showingInfoWindow: false,
             activeMarker: {},
             selectedPlace: {}
           };
         }

    shouldComponentUpdate(nextProps, nextState)
    {
          
           if (this.state === nextState) {
             return false;
           } else {
             return true;
           }
         }

         onMarkerClick = (props, marker, e) =>
           this.setState({
             selectedPlace: props,
             activeMarker: marker,
             showingInfoWindow: true
           });

         onMapClicked = props => {
           if (this.state.showingInfoWindow) {
             this.setState({
               showingInfoWindow: false,
               activeMarker: null
             });
           }
         };
         displayMarkers = () => {
           return data.map((store, index) => {
             return (
               <Marker
                 onClick={this.onMarkerClick}
                 key={index}
                 id={index}
                 name={store.name}
                 position={{
                   lat: store.lat,
                   lng: store.lng
                 }}
               />
             );
           });
         };

         render() {
    
           return (
             <Map
               onClick={this.onMapClicked}
               google={this.props.google}
               zoom={14}
               style={style}
               initialCenter={{ lat: 12.94074, lng: 77.570398 }}
             >
               {this.displayMarkers()}
               <InfoWindow
                 marker={this.state.activeMarker}
                 visible={this.state.showingInfoWindow}
                 onClose={this.onClose}
               >
                 <Typography variant="h6" gutterBottom>
                   {this.state.selectedPlace.name}
                 </Typography>
               </InfoWindow>
             </Map>
           );
         }
       }
// AIzaSyBGmwbep3PV4t5 - VkSUGoLPygpElHgCt3Y;
//  AIzaSyDUFP62wzPrpTvjZo2VdJOg0_8Xqlo1vwk;
export default GoogleApiWrapper({
  apiKey: "AIzaSyBGmwbep3PV4t5 - VkSUGoLPygpElHgCt3Y"
})(MapContainer);