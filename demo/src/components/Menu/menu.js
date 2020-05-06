import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

const menus =[
    {
        name: 'Home',
        to:'/',
        exact: true
    },
    {
        name: 'Lecturer Maneger',
        to:'/lecturers',
        exact: false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact}) =>{
    return (
        <Route
            path = {to}
            exact = {activeOnlyWhenExact}
            children = { ({match}) =>{
                var active = match ? 'active' : '';
                return (
                    <li className = {active + ` nav-link` }  >
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }

            }
            
        >

        </Route>
    )
       
}

class Menu extends Component{
    render(){
        return (
            <div>
                <nav className="nav nav-tabs nav-stacked">
                    {this.showMenus(menus)}
                </nav>
            </div>
          );
    }
    showMenus = (menus) =>{
        var result =null;
        if(menus.length > 0){
            result = menus.map((menu,index) => {
                return (
                    <MenuLink
                        key = {index}
                        label = {menu.name}
                        to = {menu.to}
                        activeOnlyWhenExact = {menu.exact}
                    >

                    </MenuLink>
                )
            })
        }
        return result;
    }
}


export default Menu;
