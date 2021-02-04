import React, { Component } from 'react'; 
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    
 RenderComments(comments) {
     if (comments) {
         return(
             <div className="col-md-5 m-1">
                 <h4>Comments</h4>
                 { comments.map( comments =>  {
                     return(
                     <div key={comments.id} >
                     <p> {comments.text}<br />
                     -- {comments.author},
                         {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', 
                         day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                         </div>
                     );
                    
                 }) }
             </div>
         );
     }
     return <div />
 
}          
   


RenderSelectedCampsite(campsite) {
        return (
            <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle> 
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
            </div>
        )
    
}



render(){
    if (this.props.campsite) {
        return (
            <div className="container">
            <div className="row">
                { this.RenderSelectedCampsite(this.props.campsite) } 
                { this.RenderComments(this.props.campsite.comments)}
                </div>
            </div>
        );
    }
        return (<div />)
    } 
}



export default CampsiteInfo;