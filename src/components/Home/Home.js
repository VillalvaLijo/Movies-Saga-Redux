import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

//import database movies
//write get and saga request in index.js

class Home extends Component{

    //create a component did mount to test some data info
    componentDidMount(){
        
        
        this.props.dispatch({type: 'GET_MOVIES'});
        console.log("this.props.reduxStore.movies.data", this.props.reduxStore.movies)
        console.log(this.props.reduxStore);
        console.log("Component Did Mount Home.js");
    }


    movieDisplay = () =>{
        if (this.props.reduxStore.movies){
            //create an array by iterating through a movies array from reduxState.
            let moviesArray = this.props.reduxStore.movies.map((movie) =>
            <div className = "movieSelector" key={movie.id}>
                <img src ={movie.poster} alt = "image of movie" className="movieImage"/>
                <div className ="movieInfoDiv">
                    <h3 className="movieTitle">{movie.title}</h3>
                    <p className = "movieDescription">{movie.description}</p>
                </div>
            </div>)
            // let moviesArray = this.props.reduxStore.movies;
            // console.log("moviesArray:", moviesArray)
            return moviesArray;
        }
    }
    render(){
        return(
            <div>
            <div>Home</div>
            <section>
                Inside Movie Display section
                <p>{JSON.stringify(this.props.reduxStore.movies.data)}</p>
                {/* Use movies Display function to display movies to the DOM */}
            {/* <p>{this.movieDisplay()}</p> */}
            {this.movieDisplay()}
            </section>
            </div>
        )
    }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Home);