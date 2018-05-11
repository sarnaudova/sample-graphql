const {ObjectId} = require('mongodb');

function restaurant (reqObject) {
    const {
        context,
        args
    } = reqObject;
    return new Promise(((resolve, reject) => {
        context.mongo.then((db) => {
            db.collection('restaurants').findOne({
                _id : new ObjectId(args.restaurant_id)
            }, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            });
        });
    }));
}

function allRestaurants (reqObject) {
    const {
        context,
        args,
        pageSize
    } = reqObject;
    return new Promise(((resolve, reject) => {
        context.mongo.then((db) => {
            db.collection('restaurants').find().limit(pageSize).toArray((error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            });
        });
    }));
}
module.exports = {
    restaurant,
    allRestaurants
}