var express=require('express');
const app=express();

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