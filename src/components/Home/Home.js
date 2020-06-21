import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

//import database movies
//write get and saga request in index.js

class Home extends Component{


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
            return moviesArray;
        }
    }
    render(){
        return(
            <div>
            <div>Home</div>
            <section>
                Inside Movie Display section
                <p>{JSON.stringify(this.props.reduxStore.movies)}</p>
                {/* Use movies Display function to display movies to the DOM */}
            {this.movieDisplay()}
            </section>
            </div>
        )
    }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Home);