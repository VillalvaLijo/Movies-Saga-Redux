import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component{

    render(){
        return(
            <div>Details</div>
        )
    }
}

export default connect()(Details);