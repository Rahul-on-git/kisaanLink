// import React from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker
// } from "react-simple-maps";

// const geoUrl =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

// const markers = [
//   {
//     markerOffset: -15,
//     name: "Buenos Aires",
//     coordinates: [-17, -6]
//   },
// ];

// const TruckMap = () => {
//   return (<>
//     <h2>Truck Locations</h2>
//     <ComposableMap className="map"
//       projection="geoAzimuthalEqualArea"
//       projectionConfig={{
//         rotate: [-80, 5, 0],
//         scale: 425
//       }}
//     >
//       <Geographies geography={geoUrl}>
//         {({ geographies }) =>
//           geographies.map((geo) => (
//             <Geography
//               key={geo.rsmKey}
//               geography={geo}
//               fill="#EAEAEC"
//               stroke="#D6D6DA"
//             />
//           ))
//         }
//       </Geographies>
//       {markers.map(({ name, coordinates, markerOffset }) => (
//         <Marker key={name} coordinates={coordinates}>
//           <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
//           <text
//             textAnchor="middle"
//             y={markerOffset}
//             style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
//           >
//             {name}
//           </text>
//         </Marker>
//       ))}
//     </ComposableMap>
//     </>);
// };
// src/DisplayMapFC.js

import * as React from 'react';

const TruckMap = () => {

  // Create a reference to the HTML element we want to put the map on
  const mapRef = React.useRef(null);

  /**
   * Create the map instance
   * While `useEffect` could also be used here, `useLayoutEffect` will render
   * the map sooner
   */
  React.useLayoutEffect(() => {
    // `mapRef.current` will be `undefined` when this hook first runs; edge case that
    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
        apikey: "0PL2REO-9qDw56ZuDeOx4g22ymUIXoaDrXds0GVbO4M",
    });
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 15.29, lng: 74.12 },
      zoom: 10,
      pixelRatio: window.devicePixelRatio || 1
    });

    const marker1 = new H.map.Marker({lat:15.2567, lng:74.3508});
    hMap.addObject(marker1);

    const marker2 = new H.map.Marker({lat:15.3167, lng:74.1208});
    hMap.addObject(marker2);

    // var routingParameters = {
    //   // The routing mode:
    //   'mode': 'fastest;car',
    //   // The start point of the route:
    //   'waypoint0': 'geo!50.1120423728813,8.68340740740811',
    //   // The end point of the route:
    //   'waypoint1': 'geo!52.5309916298853,13.3846220493377',
    //   // To retrieve the shape of the route we choose the route
    //   // representation mode 'display'
    //   'representation': 'display'
    // };
    
    // // Define a callback function to process the routing response:
    // var onResult = function(result) {
    //   var route,
    //   routeShape,
    //   startPoint,
    //   endPoint,
    //   linestring;
    //   if(result.response.route) {
    //   // Pick the first route from the response:
    //   route = result.response.route[0];
    //   // Pick the route's shape:
    //   routeShape = route.shape;
    
    //   // Create a linestring to use as a point source for the route line
    //   linestring = new H.geo.LineString();
    
    //   // Push all the points in the shape into the linestring:
    //   routeShape.forEach(function(point) {
    //   var parts = point.split(',');
    //   linestring.pushLatLngAlt(parts[0], parts[1]);
    //   });
    
    //   // Retrieve the mapped positions of the requested waypoints:
    //   startPoint = route.waypoint[0].mappedPosition;
    //   endPoint = route.waypoint[1].mappedPosition;
    
    //   // Create a polyline to display the route:
    //   var routeLine = new H.map.Polyline(linestring, {
    //   style: { strokeColor: 'blue', lineWidth: 3 }
    //   });
    
    //   // Create a marker for the start point:
    //   var startMarker = new H.map.Marker({
    //   lat: startPoint.latitude,
    //   lng: startPoint.longitude
    //   });
    
    //   // Create a marker for the end point:
    //   var endMarker = new H.map.Marker({
    //   lat: endPoint.latitude,
    //   lng: endPoint.longitude
    //   });
    
    //   // Add the route polyline and the two markers to the map:
    //   hMap.addObjects([routeLine, startMarker, endMarker]);
    
    //   // Set the map's viewport to make the whole route visible:
    //   hMap.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
    //   }
    // };
    
    // // Get an instance of the routing service:
    // var router = platform.getRoutingService();
    
    // // Call calculateRoute() with the routing parameters,
    // // the callback and an error callback function (called if a
    // // communication error occurs):
    // router.calculateRoute(routingParameters, onResult,
    //   function(error) {
    //   alert(error.message);
    //   });

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

    const ui = H.ui.UI.createDefault(hMap, defaultLayers);

    // This will act as a cleanup to run once this hook runs again.
    // This includes when the component un-mounts
    return () => {
      hMap.dispose();
    };
  }, [mapRef]); // This will run this hook every time this ref is updated

  return (
  <>
  <h2 style={{textAlign: 'center'}}>Truck Locations </h2>
  <div className="map" ref={mapRef} style={{ height: "500px", width: "500px", margin: "auto" }} />
  </>
  );
};


export default TruckMap;
