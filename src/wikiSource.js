// https://en.wikipedia.org/w/api.php?action=query&format=json&list=geosearch&gscoord=37.7891838%7C-122.4033522&gsradius=10000&gslimit=100
// https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cpageimages&pageids=3276454&formatversion=2&exlimit=1&exintro=1&explaintext=1&piprop=original

function apiCall(params) {
  return fetch('https://en.wikipedia.org/w/api.php?' + params + '&origin=*')
  .then(response=>{ if(!response.ok){
      throw response.statusText;
   }else{
      return response;
  }})
   // from HTTP headers to HTTP response data:
  .then(response => response.json());
}

// Returns a promise with an array of articles with the properties: {dist, lat, lon, ns, pageid, primary, title}
export function getArticlesFromLocation(lat, lng, radius) {
  var params = {
    action: 'query',
    list: 'geosearch',
    gscoord: lat.toString() + '|' + lng.toString(),
    gsradius: radius.toString(),
    format: 'json',
  };
  return apiCall(new URLSearchParams(params))
          .then(data => data.query.geosearch);
}

// Returns a promise with an article with the properties: {pageid, ns, title, extract ,original}
export function getArticleContent(id) {
  var params = {
    action: 'query',
    format: 'json',
    prop: 'extracts' + '|' + 'pageimages',
    pageids: id.toString(),
    formatversion: '2',
    exlimit: '1',
    exintro: '1',
    explaintext: '1',
    piprop: 'original',
  }
  return apiCall(new URLSearchParams(params))
          .then(data => data.query.pages);
}
