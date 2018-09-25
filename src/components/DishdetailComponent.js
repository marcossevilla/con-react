import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody } from 'reactstrap';

class Dishdetail extends Component {

    renderDish(dish) {
        if (dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }    
    }

    
    renderComment(dish) {
        
        if (dish != null) {
            const commentList = dish.comments.map( comment => { 
                return(
                    <ul className='list-unstyled'>
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author} , &nbsp;{comment.date} </p>
                        </li>
                    </ul>   
                );
            });
            
            return (
                <div className="col-12 col-md-5 m-1">
                <h4> Comments </h4>
                    {commentList}
                </div>
            )
        } 
        else {
            return (
                <div></div>
            );
        }    
    }
        
    render() {
        return ( 
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComment(this.props.dish)}
            </div>
        );
    }    
}

export default Dishdetail;