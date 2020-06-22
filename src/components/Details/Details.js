import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';


class Details extends Component{
    //access the movie in details by passing the id of the movie on the click.
    //create a local state to hold all the genres of the movie
    state = {
        genreArray: []
    }
    componentDidMount(){
        //grab all genres from query with equal movie id to the movie passed in.
        this.selectGenreByMovieId()
    }

    selectGenreByMovieId(){
        let genreArray = [];
        // for( of this.props.reduxState.genres){
        //     if (this.props.reduxState.details.id === genre_list_item.id)
        //         genreArray.push(genre_list_item.name);
        // }
        //console.log(this.props.reduxState.genres.length)
        for(let i=0; i<this.props.reduxState.genres.length;i++){
            if(this.props.reduxState.details.id === this.props.reduxState.genres[i].movie_id){
                console.log(this.props.reduxState.genres[i].name);
                genreArray.push(this.props.reduxState.genres[i].name);
            }
        }
        this.setState({
            genreArray: genreArray,
        });
        console.log(genreArray);
    }

    //create a function to route back to the home page when user clicks back to list
    backToList(){
        console.log("backToList Clicked");
        this.props.history.push('/home');
    }

    render(){
        return(
            <div>
                <img src ={this.props.reduxState.details.poster}/>
                <h2>{this.props.reduxState.details.title}</h2>
                {/* <p>{JSON.stringify(this.props.reduxState.genres)}</p> */}
                {this.state.genreArray.map((genre)=>
                    <h4 key = {genre}>{genre}</h4>
                )}
                
                 {/* <h4>{this.state.genreArray}</h4> */}
                <p>{this.props.reduxState.details.description}</p>
                <button type='button' onClick = {this.backToList}>Back to List</button>
                <button type='button'>Edit</button>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Details);