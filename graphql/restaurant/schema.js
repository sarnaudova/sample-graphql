const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLFloat
  } = require('graphql');

//   const CoordinatesType = new GraphQLObjectType({
//     name: 'coordinate',
//     field:() => ({
//         latitude: {
//             type: GraphQLString
//         },
//           longitude: {
//             type: GraphQLString
//         }      
//     })
//   });

  const AddressType = new GraphQLObjectType({
      name: 'address',
      fields:() => ({
        street: {
            type: GraphQLString
        },
        city: {
            type: GraphQLString
        },
        zipcode: {
            type: GraphQLString
        },
        country: {
            type: GraphQLString
        }
        // coord: {
        //     type: CoordinatesType
        // }
      }) 
  })
  
  const RestaurantType = new GraphQLObjectType({
    name: 'restaurant',
    fields: () => ({
        _id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        district: {
            type: GraphQLString
        },
        cuisine: {
            type: GraphQLString
        },
        address: {
            type: AddressType
        }
    })
  });
  
  module.exports = {
      RestaurantType
  }