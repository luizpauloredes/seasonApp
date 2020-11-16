import React from 'react';
import ReactDOM from 'react-dom';
import ErrorPage from './errorPage';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
   

    state= { lat: null, errorMessage:''};

    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }) ,
            err =>  this.setState({ errorMessage: err.message })            
        );
    } 


    renderContent() {
        if  (this.state.errorMessage && !this.state.lat ){
            return (

                <div>                               
                    <ErrorPage msg="Oops, sounds you don't want to show your location. Thanks anyway"
                    msg2="Accept google request location and refresh the page to work this page"
                    />
                </div>
    
            )
        }
        
        if  (!this.state.errorMessage &&  this.state.lat ){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner msg="Please accept google request to know your location and we will tell you how is the weather like"/>;

    }
    

    render() {
        
        return (
            <div >
                {this.renderContent()}
            </div>
        )

    }   
}

ReactDOM.render(<App />, document.querySelector('#root'))