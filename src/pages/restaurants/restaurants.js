import React, {Component} from 'react';
import {QueryRenderer, graphql} from 'react-relay';
import environment from '../../environment';
import RestaurantList from '../../components/restaurant-list';

export default class RestaurantsPage extends Component {
    render() {
        const query = graphql`
        query restaurantsQuery {
            restaurants{
                _id
                name    
            }
        }
        `; 
        return (
          <QueryRenderer environment = {environment}
                         query = {query}
                         render = {({error, props}) =>{
                             if (error) {
                                 console.log('Error from graphql', error);
                                 return <div>Error  + {error}</div>;
                             }
                             if (!props) {
                                 console.log('Loading ...');
                                 return <div>Loading</div>;
                             }
                             console.log('Query renderer ', props.restaurants);
                             return (
                                <div>
                                  <div> List all restaurants </div>
                                  <RestaurantList data={props.restaurants} />    
                                </div>
                             )
                         }} 
            />
        );
    }
}
