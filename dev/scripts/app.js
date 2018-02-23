import React from 'react';
import ReactDOM from 'react-dom';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDIrpMFuD5jkPxxlfm9S-CYHJ7KH9oMFoo",
  authDomain: "wester-bros.firebaseapp.com",
  databaseURL: "https://wester-bros.firebaseio.com",
  projectId: "wester-bros",
  storageBucket: "wester-bros.appspot.com",
  messagingSenderId: "553144417983"
};
firebase.initializeApp(config);

class App extends React.Component {
    render() {
      return (
        <div>
          Hello
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
