import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component{
    state = { lat:null, long:null , errorMessage:""};

    constructor(props){
        console.log("Start of constructor!")
        super(props);
        //this.state = { lat:null, long:null , errorMessage:""};
        console.log("End of constructor!")
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (post)=>this.setState({ lat:post.coords.latitude, long:post.coords.longitude }),
            (error)=>this.setState({ errorMessage:error.message })
        );
        console.log("Component Mounted!")
    }

    componentDidUpdate(){
        console.log("Component Updated!")
    }

    componentWillUnmount(){
        console.log("Component will be mounted!")
    }

    renderContent(){
        if (this.state.errorMessage && !this.state.lat){
            return(
                <div>
                    <div>Error: {this.state.errorMessage}</div>
                </div>
            );
        }

        if(!this.state.errorMessage && this.state.lat){
            return (<SeasonDisplay lat={this.state.lat} />);
            /*return(
                <div>
                    <div>Latitude: {this.state.lat}</div>
                    <div>Longitude: {this.state.long}</div>
                </div>
            );*/

        }

        return(
            <Loader message="Please wait for location ready..."/>
        );
    }

    render(){
        console.log("Component render!");
        return <div className="border red">{this.renderContent()}</div>;
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)