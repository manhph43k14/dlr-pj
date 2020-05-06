import React, { Component } from 'react';

class NotFoundPage extends Component{
    render(){
        return (
            <div className ="container"> 
               <div className="alert alert-primary" role="alert">
                   <strong>404 error</strong> 
               </div>
            </div>
          );
    }
}


export default NotFoundPage;
