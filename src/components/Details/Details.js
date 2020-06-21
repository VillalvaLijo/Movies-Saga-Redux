import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';


class Details extends Component{
    //access the movie in details by passing the id of the movie on the click.

    render(){
        return(
            <div>
                <img src ={this.props.reduxState.details.poster}/>
                <h2>{this.props.reduxState.details.title}</h2>
                <p>{JSON.stringify(this.props.reduxState.genres)}</p>
                <p>{this.props.reduxState.details.description}</p>

            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Details);