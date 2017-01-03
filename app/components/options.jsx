import React from 'react';

class Options extends React.Component {

    constructor(props){
        super(props);
        this.updateOptions = this.updateOptions.bind(this);
    }

    //updates the options
    updateOptions (e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div className="options">
                Choose units
                <select label="unit" onChange={this.updateOptions}>
                    <option value="">Please Choose</option>
                    <option value="F">F</option>
                    <option value="C">C</option>
                </select>
            </div>
        );
    }


}

export default Options;