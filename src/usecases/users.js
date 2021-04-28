const moment = require('moment')
const Users = require('../models/users')

function getByNameOrHobbie (name, hobbie) {
     if (!name && !hobbie) {
        return Users.find( {} )
     } else{
         if (name && !hobbie) {
            return Users.find({name: RegExp(name,'i')})
         }
         if (!name && hobbie) {
           return Users.find({hobbie: RegExp(hobbie,'i')})
        }
        if (name && hobbie) {
           return Users.find().or([ {name: RegExp(name,'i')}, {hobbie: RegExp(hobbie, 'i')}  ])
        }
     }            
} 

function deleteById (id) {
    return Users.findByIdAndDelete(id)
}

function getLastFemaleUsers () {
    let threeDaysAgo = moment
    console.log(threeDaysAgo)
    return Users.aggregate([
        {
            $match:{
                gender: "Female",
                age:{$gte: 18},
                registerdate: {$gte: threeDaysAgo}
            }
        },
        {
            $group: {
                _id: "$hobbie",
                personas: {
                    $push: { name: "$name", tel: "$phone", age: "$age", created: "$registerdate"}
                }
            }
        }
    ])
}
  

module.exports = {
    getLastFemaleUsers,
    getByNameOrHobbie,
    deleteById,
}