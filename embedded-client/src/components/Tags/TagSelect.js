import React, { Component } from 'react';
import Select from "react-select";
import { connect } from "react-redux";
import { filterByKeywords } from "../../actions/actions";

class TagSelect extends Component {
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

        this.onOptionsUpdated = this.onOptionsUpdated.bind(this);
    }

    onOptionsUpdated(selectedOptions) {
        this.props.filterByKeywords(selectedOptions.map(option => option.value));
    }

    render() {
        return <Select 
            onChange={this.onOptionsUpdated}
            options={this.state.options} 
            isMulti={true} 
        />;
    }
}

// The second argument to connect() is mapDispatchToProps, 
// we can simply pass in an object containing the functions
// we'd like to map to the props of the TagSelect object
export default connect(null, { filterByKeywords })(TagSelect); 