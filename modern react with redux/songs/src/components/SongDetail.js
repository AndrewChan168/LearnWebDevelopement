import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song })=>{
    //console.log(props);
    //return(<div>{!song ? "Select a song" : song.title}</div>);

    if(!song){
        return <div>Select a song</div>;
    }
    
    return(
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
                <br/>
                Duration: {song.duration}
            </p>
        </div>
    );
};

const mapStateProps = state=>{
    return { song:state.selectedSong }
};

export default connect(mapStateProps)(SongDetail);