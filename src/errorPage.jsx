import React from 'react';
import './errorPage.css';

const ErrorPage = (props) => {

     

    return (
        <div className="errorMessage">
            
            <div className="">                             
               <h1>
               <i class="massive bullhorn icon"></i>
               {props.msg}
                </h1> 
                <h2>
                     
                    {props.msg2}
                </h2>
            </div>
        </div>
    );

};

ErrorPage.defaultProps = {
   msg: 'Error...',
   msg2: ''
}


export default ErrorPage;
