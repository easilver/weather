import React from 'react';

class Locations extends React.Component {

    constructor(props){
        super(props);
        this.state = {locations: []};
        this.updateLocations = this.updateLocations.bind(this);
        this.addLocation = this.addLocation.bind(this);
        this.removeLocation = this.removeLocation.bind(this);
    }

    //updates the location(s)
    updateLocations (e) {
        this.props.onChange(e);
    }

    removeLocation (e) {
            let indexOfE = this.state.locations.indexOf(e);
            let newLocations = this.state.locations.slice().splice(indexOfE, 1);
            this.setState({locations: newLocations});
            this.updateLocations(newLocations);

    }

    addLocation () {
        let e = document.getElementById("zip").value;
        let isValidZip = /(^\d{5}$)/.test(e);

        console.log("e ", e);
        console.log("locations as it stands", this.state.locations);

        if(isValidZip) {
            // let newLocations = Array.prototype.push.apply(this.state.locations, e);
            let newLocations = this.state.locations.slice();
            console.log("new locations ", newLocations);

            newLocations.push(e);

            console.log("new locations + ", newLocations);
            this.setState({locations: newLocations });
            // this.updateLocations(newLocations);
            this.updateLocations(newLocations);
        }else{
            alert("Invalid zip code. Zip code must be a five-digit number.");
        }
    }

    render() {
        return (
            <div className="locations">
                Enter a location zip code
                <input id="zip" type="text"></input>
                <button onClick={this.addLocation}>Add Location</button>

                <div>
                    <ul>
                    {this.state.locations.map(function(location, i){
                        return <li><a href="" >{location}</a></li>;
                    })}
                        </ul>
                </div>
            </div>
        );
    }


}

export default Locations;