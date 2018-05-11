const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLError
  } = require('graphql');

  // Schema
  const {
      RestaurantType 
  } = require('./restaurant/schema');

  const {
    restaurant,
    allRestaurants
  } = require('./restaurant/resolver');
  
  // Root queries
  const Query =  new GraphQLObjectType({
    name: 'QueryType',
    fields: () => ({
      restaurant: {
        type: RestaurantType,
        description: 'Return a specific restaurant details.',
        args: {
          restaurant_id: {
            type: GraphQLString
          }
        },
        resolve(parentValue, args, {mongo}) {
          const reqObject = {
            parentValue,
            args,
            context: {
              mongo
            }
          };
          return restaurant(reqObject).catch(error => new GraphQLError(error));
        } 
      },
      restaurants: {
        type : new GraphQLList(RestaurantType),
        description: 'Return list of all restaurants',
        resolve(parentValue, args, {mongo}) {
          const reqObject = {
            parentValue,
            args,
            context: {
              mongo
            },
            pageSize: 3
          };
          return allRestaurants(reqObject).catch(error => new GraphQLError(error));
      }
    }
  })
});
// const Mutation = new GraphQLObjectType({
//   name: 'MutationType',
//   fields: () => ({

//   })
// });

module.exports = new GraphQLSchema({
  query: Query,
  //mutation: Mutation
});


