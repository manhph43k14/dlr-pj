import React, { Component } from 'react';

class LecturersList extends Component{
    render(){
        return (
            <div>
                <h1>Danh sách giảng viên</h1>
                <div className="row">
                  <div className="col-xs-1-12">
                    <ul className="list-group">
                      {this.props.children}
                    </ul>
                  </div>
                </div>
               
            </div>
          );
    }
}


export default LecturersList;
