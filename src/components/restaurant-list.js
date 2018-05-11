import React, {Component} from 'react';
import {
    createFragmentContainer,
    graphql
} from 'react-relay';

class RestaurantList extends Component {
    render() {
        console.log('restaurant list receive data, ', this.props.data);
        return (
            <div className='restaurant-list'> 
            {
                this.props.data.map(({name}) => {
                    return (
                        <div> {name} </div>    
                    )        
                })
            }
            </div>
        )   
    }
}

export default createFragmentContainer(RestaurantList, {
    data: graphql`
       fragment restaurantList_data on Restaurant @relay(plural:true) {
           name
       } 
    `,
})