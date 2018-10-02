import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      newRoomName: " "
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

   //handleChange for form text
   handleChange(e) {
     this.setState({ newRoomName: e.target.value });
   }

   //createRoom for form submission
   createRoom(room) {
     this.roomsRef.push({ name: this.state.newRoomName });
   }
   // Inside of the render method, use a .map() call on this.state.rooms to display data for each room.
  render(){
    return(
      <section>
      <div>
        {this.state.rooms.map((room, index) =>
          {return( <div key={index}>{room.name}</div> )})
        }
      </div>
      <div>
        <form onSubmit={(e) => this.createRoom(e)}>
          <input type="text"
            value={this.state.newRoomName}
            onChange={(e) => this.handleChange(e)} />
          <button type="submit">Add Room</button>
        </form>
      </div>
      </section>
    );
  }
}

export default RoomList;
