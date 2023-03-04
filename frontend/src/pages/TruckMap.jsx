import {Link, useParams} from 'react-router-dom';
import * as React from 'react';
import { useLayoutEffect, useState } from 'react';


const TruckMap = () => {
  const {truckName} = useParams()
  let truckInfo
  const trucks = [
    {truckName: 'Truck1', truckLoc: 'Niphad', truckCapacity: 20, truckFilled: 10, curLoc: {lat: 20.07, long: 74.10}, destLoc:{lat: 19.05, long: 72.90}},
    {truckName: 'Truck2', truckLoc: 'Pimpalgaon', truckCapacity: 11, truckFilled: 5, curLoc: {lat:20.16, long:73.98}, destLoc:{lat: 19.05, long: 72.90}},
    {truckName: 'Truck3', truckLoc: 'Nanded', truckCapacity: 15, truckFilled: 15, curLoc: {lat:19.1383, long: 77.3210}, destLoc:{lat: 19.0522, long: 72.9005}},
    {truckName: 'Truck4', truckLoc: 'Karsul', truckCapacity: 10, truckFilled: 9, curLoc: {lat:20.1411, long:74.0311}, destLoc:{lat: 19.0522, long: 72.9005}}
  ]
  // Create a reference to the HTML element we want to put the map on
  const mapRef = React.useRef(null);
  console.log(truckName)
  /**
   * Create the map instance
   * While `useEffect` could also be used here, `useLayoutEffect` will render
   * the map sooner
   */
  useLayoutEffect(() => {
    trucks.forEach((truck) => {
      if (truck.truckName === truckName) {
        truckInfo = truck
        console.log(truckInfo)
      }

    })
    // `mapRef.current` will be `undefined` when this hook first runs; edge case that
    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
        apikey: "0PL2REO-9qDw56ZuDeOx4g22ymUIXoaDrXds0GVbO4M",

        // apikey: "closed"
    });
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 19.7515, lng: 75.7139 },
      zoom: 10,
      pixelRatio: window.devicePixelRatio || 1
    });

    const origin = `${truckInfo.curLoc.lat},${truckInfo.curLoc.long}`
    const destination = `${truckInfo.destLoc.lat},${truckInfo.destLoc.long}`
    var routingParameters = {
      'routingMode': 'fast',
      'transportMode': 'car',
      // The start point of the route:
      'origin': origin,
      // The end point of the route:
      'destination': destination,
      // 'origin': '15.2567,74.3508',
      // // The end point of the route:
      // 'destination': '15.3167,74.1208',
      // Include the route shape in the response
      'return': 'polyline'
    };
    
    // Define a callback function to process the routing response:
    var onResult = function(result) {
      // ensure that at least one route was found
      if (result.routes.length) {
        result.routes[0].sections.forEach((section) => {
             // Create a linestring to use as a point source for the route line
            let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);
    
            // Create a polyline to display the route:
            // let routeLine = new H.map.Polyline(linestring, {
            //   style: { strokeColor: 'blue', lineWidth: 3 }
            // });
            var routeOutline = new H.map.Polyline(linestring, {
              style: {
                lineWidth: 10,
                strokeColor: 'rgba(0, 128, 255, 0.7)',
                lineTailCap: 'arrow-tail',
                lineHeadCap: 'arrow-head'
              }
            });
            // Create a patterned polyline:
            var routeArrows = new H.map.Polyline(linestring, {
              style: {
                lineWidth: 7,
                fillColor: 'white',
                strokeColor: 'rgba(255, 255, 255, 1)',
                lineDash: [0, 2],
                lineTailCap: 'arrow-tail',
                lineHeadCap: 'arrow-head' }
              }
            );
            // create a group that represents the route line and contains
            // outline and the pattern
            var routeLine = new H.map.Group();
            routeLine.addObjects([routeOutline, routeArrows]);
            // Create a marker for the start point:
            let startMarker = new H.map.Marker(section.departure.place.location);
    
            // Create a marker for the end point:
            let endMarker = new H.map.Marker(section.arrival.place.location);
    
            // Add the route polyline and the two markers to the map:
            hMap.addObjects([routeLine, startMarker, endMarker]);
    
            // Create an outline for the route polyline:
            
            // Set the map's viewport to make the whole route visible:
            hMap.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
        });
      }
    };
    
    // Get an instance of the routing service version 8:
    var router = platform.getRoutingService(null, 8);
    
    // Call calculateRoute() with the routing parameters,
    // the callback and an error callback function (called if a
    // communication error occurs):
    router.calculateRoute(routingParameters, onResult,
      function(error) {
        alert(error.message);
      })

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
  <h2 style={{textAlign: 'center'}}>Current truck location and Route</h2>
  <div className="map" ref={mapRef} style={{ height: "500px", margin: "auto" }} />
  <Link to="/truck/pool" className='none' style={{textAlign: 'center', textDecoration: 'underline'}}><h2>Click to pool produce</h2></Link>
  </>
  );
};


export default TruckMap;
