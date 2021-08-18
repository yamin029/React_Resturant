import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
const DishDetail = (props) => {
    //console.log(props.dish.name)
    return (
        <div>
            <Card style={{ marginTop:"40px" }}>
                <CardImg top alt={props.dish.name} src = {props.dish.image}/>
                    <CardBody style = {{ textAlign:"left" }}>
                        <CardTitle>{props.dish.name}</CardTitle>
                        <CardText>{props.dish.description}</CardText>
                    </CardBody>
            </Card>
        </div>
    )
}

export default DishDetail
