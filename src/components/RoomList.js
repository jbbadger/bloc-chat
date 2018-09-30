import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
  // Store a Firebase reference to the rooms path onto the this keyword
  this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       //use .concat() to add the snapshots actual data ( snapshot.val() ).
       //.concat() does not modify existing array.
       this.setState({ rooms: this.state.rooms.concat( room ) })
     });
   }

  render(){
    return(
        // Inside of the render method, use a .map() call on this.state.rooms to display data for each room.
      <div>
        {this.state.rooms.map((room, index) =>
          {return(
            <div key={index}>{room.name}</div>
          )
          })
        }
      </div>
    );
  }
}

export default RoomList;
