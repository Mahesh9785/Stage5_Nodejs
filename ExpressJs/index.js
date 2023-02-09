var express=require('express');
const app=express();
const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    //const uri = "mongodb+srv://Mind-Your-Business:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/login',(req,res)=>{
    res.send('Login Page !!');
});

app.get('/logout',(req,res)=>{
    res.status(200).send('Logout page!!');
});

app.get('/about',(req,res)=>{
    res.write('<h1>About Page</h1>');
    res.send();
    
});



app.get('/signup',(req,res)=>{
    res.send([{
        id:'1',
        name:'Mahesh',
    },
    {
        id:'1',
        name:'Mahesh',
    },
    {
        id:'1',
        name:'Mahesh',
    }
]);
});

// app.get('/signup',(req,res)=>{
//     res.sendStatus(200); //equal to res.status(200).send('OK');
// });



app.listen(8000,()=>{
    console.log('listening to port 8000');
});