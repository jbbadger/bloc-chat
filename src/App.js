import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB6p-mmvvxtd3Oks0f_Y3z_4AvX89YLLec",
    authDomain: "bloc-chat-fbase-da8be.firebaseapp.com",
    databaseURL: "https://bloc-chat-fbase-da8be.firebaseio.com",
    projectId: "bloc-chat-fbase-da8be",
    storageBucket: "bloc-chat-fbase-da8be.appspot.com",
    messagingSenderId: "385958849566"
  };
  firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div className="App">
        <RoomList
          firebase={firebase}
          handleChange={this.handleChange}
          newRoomName={this.newRoomName} />
      </div>
    );
  }
}

export default App;
