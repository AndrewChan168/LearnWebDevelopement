import React from 'react';

class SearchBar extends React.Component{
    state = { term:'' };
    // way-1:
    // solving undefined state.term problem
    /*constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }*/

    // way-2
    /*onFormSubmit(event){
        event.preventDefault();
        
        console.log(this.state.term);
    }*/

    // way-3
    onFormSubmit = event=>{
        event.preventDefault();
        //console.log(this.state.term);

        // use the callback func from parent class
        this.props.onSubmit(this.state.term);
    }

    // uncontrolled event handlers
    /*onInputChange(event){
        console.log(event.target.value);
    }

    onInputClick(){
        console.log(`Input was clicked`);
    }*/

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={e=>this.setState({ term:e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
    /*
    render(){
        return (
            <div className="ui segment">
                <form className="ui form" 
                    // way-1
                    //onSubmit={this.onFormSubmit}

                    //way-2
                    //onSubmit={e=>this.onFormSubmit(e)}

                    //way-3
                    //onSubmit={this.onFormSubmit}
                    // use the callback func from parent class
                    onSubmit={this.onFormSubmit}
                >
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" 
                            value={this.state.term}
                            onChange={e=>this.setState({ term:e.target.value })}
                            //onChange={this.onInputChange}
                            //onClick={this.onInputClick}
                        />
                    </div>
                </form>
            </div>
        );
    }*/
}

export default SearchBar;