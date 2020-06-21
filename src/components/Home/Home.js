import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

import Details from '../Details/Details';

//import database movies
//write get and saga request in index.js

class Home extends Component{

    state = {
        tempMovie: {}
    }

    //create a component did mount to test some data info
    componentDidMount(){
        
        
        this.props.dispatch({type: 'GET_MOVIES'});
        this.props.dispatch({type: 'GET_GENRES'});
        console.log("this.props.reduxStore.movies.data", this.props.reduxStore.movies)
        console.log(this.props.reduxStore);
        console.log("Component Did Mount Home.js");
    }

    
    goToDetails = (movie) =>{
        
        console.log('inside goToDetails function');
        //console.log(this.props);
        console.log(movie)
        //write dispatch to pass movie data to reducer
        
        this.props.dispatch({
             type: 'SET_DETAILS',
             payload: movie
         })
        this.props.history.push('/details');
        

        //pass the details page the movie id
        //<Details movieId = {movieId}/>
    }


    // movieDisplay = () =>{
    //     if (this.props.reduxStore.movies){
    //         //create an array by iterating through a movies array from reduxState.
    //         let moviesArray = this.props.reduxStore.movies.map((movie) =>
    //         <div  className = "movieSelector" key={movie.id}>
    //             <img src ={movie.poster} alt = "image of movie" className="movieImage"/>
    //             <div className ="movieInfoDiv">
    //                 <h3 className="movieTitle">{movie.title}</h3>
    //                 <p className = "movieDescription">{movie.description}</p>
    //             </div>
    //         </div>)
    //         // let moviesArray = this.props.reduxStore.movies;
    //         // console.log("moviesArray:", moviesArray)
    //         return moviesArray;
    //     }
    // }
    render(){
        return(
            <div>
            <div>Home</div>
            <section>
                {/* Use movies Display function to display movies to the DOM */}
            {/* <p>{this.movieDisplay()}</p> */}
            {/* {this.movieDisplay()} */}
            {/* <MoviesItem/> */}
            <div className ="movieListDisplay">
                {this.props.reduxStore.movies.map((movie)=>
              

                <div className= "singleMovieDiv" key={movie.id} >
                    
                    <div className="movieImage" >
                    <img src = {movie.poster} onClick={()=>this.goToDetails(movie)}></img>
                    </div>
                    <h3>{movie.title}</h3>
                    <p>{movie.description}</p>
                </div>)}
            </div>
            </section>
            </div>
        )
    }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Home);