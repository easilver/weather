import React from 'react';
import {render} from 'react-dom';
import Chart from './components/chart.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <div className="header">
                    <div className="wu-logo"></div> <h5>Weather data provided by </h5>
                    <h1>Weather is Fun!</h1>
                    <Chart/>
                </div>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));