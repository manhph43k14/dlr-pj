import React, { Component } from 'react';

class LecturersActionPage extends Component{
    render(){
        var {match} = this.props;
        console.log(match)
        return (
            <div className="form-group">
                {match.params.slug}
            </div>
        );
    }

  
}


export default LecturersActionPage;
