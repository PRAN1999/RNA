import React, { Component } from 'react';
import Select from "react-select";

export default class TagSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                { value: 'Option 1', label: 'Option 1' },
                { value: 'Option 2', label: 'Option 2' }
            ]
        }
    }

    render() {
        return <Select options={this.state.options} isMulti={true} />;
    }
}