import React, { Component } from 'react';
import Select from "react-select";

export default class TagSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: this.props.options.map(value => {
                return {
                    value,
                    label: value
                }
            })
        }
    }

    render() {
        return <Select options={this.state.options} isMulti={true} />;
    }
}