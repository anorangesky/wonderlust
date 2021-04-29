

// export const getLocation = address => new Promise(resolve => google.maps.Geocoder.geocode({address: address}, ))

function apiCall(params) {
  return fetch('https://api.opencagedata.com/geocode/v1/json?' + params + '&key='+ process.env.REACT_APP_OPENCAGE_KEY)
  .then(response => { if(!response.ok){
      throw response.statusText;
   }else{
      return response;
  }})
   // from HTTP headers to HTTP response data:
  .then(response => response.json());
}

export function getPlaceCoordinates(place) {
  if(!place) {
    return
  }
  const params = {
    q: place,
    no_annotations: "1",
    language: "native",
  }
  return apiCall(new URLSearchParams(params))
          .then(data => data.results)
}
