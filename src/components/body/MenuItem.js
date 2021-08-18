import React from 'react'
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap'

const MenuItem = props => {
    //console.log(props);
    return (
        
        <div>
            <Card style={{ marginTop: '40px'}}>
                <CardBody>
                    <CardImg 
                    width="100%" 
                    alt={props.dish.name} 
                    src={props.dish.image}
                    style={{ opacity:0.5 }}
                    ></CardImg>
                    <CardImgOverlay>
                        <CardTitle 
                        style={{ cursor: "pointer", fontSize: "2em"}}
                        onClick={props.DishSelect}
                        >{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default MenuItem
