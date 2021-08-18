import React, { Component } from 'react'
import DISHES from '../../Data/dishes'
import DishDetail from './DishDetail'
import MenuItem from './MenuItem'

export class Menu extends Component {

    state = {
        dishes : DISHES,
        selectedDish : null,

    }

    onDishSelect = (dish) => {
        
        this.setState({selectedDish: dish})
        // console.log(this.state.selectedDish)
    }

    render() {
        //console.log(this.state.dishes)
        //console.log(DISHES)
        const menu = this.state.dishes.map((item)=>{
            //console.log(item)
            return (
            
            <MenuItem dish={item} key={item.id} DishSelect={()=>{this.onDishSelect(item)}}/>
        )})

        let dishDetail = null
        if(this.state.selectedDish!=null){
            dishDetail = <DishDetail dish={this.state.selectedDish}></DishDetail>
        }


        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            {menu}
                        </div>
                        <div className="col-6">
                            {dishDetail}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu
