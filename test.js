const db = require('./src/lib/db')
const {model: Users} = require('./src/models/users')

async function main(){
    await db.connect()

    const name= 'Zula'
    const hobbie= 'Maz'

    const res = await Users.find().or([ {name: RegExp(name,'i')}, {hobbie: RegExp(hobbie, 'i')}])
    console.log('res: ', res)
}

main()
.then(console.log)
.catch(console.error)