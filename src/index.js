import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import { Provider } from 'react-redux'
import store from './redux/store'
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './services/firebase';


ReactDOM.render(
  <Provider store={store}>
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={<h3>Loading...</h3>}>
        <App/>
      </Suspense>
    </FirebaseAppProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
