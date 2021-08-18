import React, { Component } from 'react'
import DISHES from '../../Data/dishes'
import MenuItem from './MenuItem'

export class Menu extends Component {

    state = {
        dishes : DISHES

    }
    render() {
        //console.log(this.state.dishes)
        //console.log(DISHES)
        const menu = this.state.dishes.map((item)=>{
            //console.log(item)
            return (
            
            <MenuItem dish={item} key={item.id}/>
        )})
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            {menu}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu
