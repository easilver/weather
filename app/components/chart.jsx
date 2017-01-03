import React from 'react';
import d3 from 'd3';
import Locations from './locations.jsx';
import Options from './options.jsx';

class Chart extends React.Component {

    constructor(props){
        super(props);
        this.state = {locations: [], unit: "F"};
        this.updateOptions = this.updateOptions.bind(this);
        this.updateLocations = this.updateLocations.bind(this);
    }


    //Toggles units between degrees Celsius and degrees Fahrenheit
    //This method/component is ambiguously named in case we add other options to this component later.
    updateOptions (e) {
        this.setState({metric: e});
    }

    //Sets locations when user adds/removes a location
    updateLocations (e) {
        console.log("updating locations ", e);
        this.setState({locations: e});
    }

    render() {
        return (
            <div className="content">
                <Locations onChange={this.updateLocations}/>
                <Options onChange={this.updateOptions}/>
                <div className="chart-body">
                    chart goes here
                    <svg width="960" height="500"></svg>

                </div>
            </div>
        )
    }


}

export default Chart;