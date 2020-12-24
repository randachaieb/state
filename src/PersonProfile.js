import React, { Component } from 'react';

class PersonProfile extends Component {
    constructor() {
        super()
    this.state = {fullName: 'Randa Chaieb', bio: 'Go My Code', profession: 'Financier' , timer: 0 , interval: null}
}

componentDidMount() {this.setState({interval: setInterval(() => this.setState({timer: this.state.timer + 1 }),1000)});}

componentDidUpdate() {}

componentWillUnmount() {clearInterval(this.state.interval);}

render() {
    return(
        <div>
        <img className="photo" src="/photo.jpg" alt="steve-photo"/>
        <p>Full Name : {this.state.fullName}</p>
        <p>Bio : Studying at {this.state.bio}</p>
        <p>Profession : {this.state.profession}</p>
        <h1>{this.state.timer}</h1>
        </div>
    )
}
}

export default PersonProfile;