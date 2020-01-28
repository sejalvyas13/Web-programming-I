const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const app = express();
const static = express.static(__dirname + '/public');
const exphbs = require('express-handlebars');
const bcryptjs = require('bcryptjs');
const saltRounds = 16
const users = require('./data/users');

app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// app.use(cookieParser());
app.use(session({
    name: 'AuthCookie',
    secret: 'some secret string!',
    resave: false,
    saveUninitialized: true
}))

app.use(function(request, response, next) {
    let auth = request.session.user? "Authenticated User" : "Non-Authenticated User";
    console.log(new Date().toUTCString() + " : "+  request.method +" " + request.originalUrl + " " +auth)
    next();
});

app.get('/', async function(request, response) {
    //if user is authenticated redirect to /private
    //else render a login screen
    //console.log(request)
    //console.log("----------------------------------------------------------")
    //console.log(request.session)
    if(!request.session.user){
        response.redirect('/login')
    }
    else{
        response.redirect('/private')
    }
});

app.post('/login', async function(request, response) {
    // try {
    //     res.render('/details');   //this is path to handlebar view
    //   } catch (e) {
    //     res.status(404).json({ message: e });
    //   }
    let match = false;
    
    for(let i=0; i<users.length; i++){
        if (users[i].username == request.body.username){
            match = await bcryptjs.compare(request.body.password,users[i].hashedPassword);
            if(match){
                request.session.user = request.body.username;
                //console.log(request.session)
                response.redirect('/private')
            }
        }
    }
    
    if(!match){
        request.session.creds = 'INVALID';
        //console.log("REQUEST in post  : " + request.session.creds)
        response.redirect('/login')
    }
});

app.get('/login', async function(request, response) {
    try {
           
        let creds = true;
        if(request.session.creds && request.session.creds == 'INVALID'){
            creds = false;
        }
        if (!creds){
            response.clearCookie('AuthCookie')
        }
        response.render('login/loginScreen', {valid : creds});
        //this is path to handlebar view
        // console.log("Cookie : " + response.session.cookies)
      } catch (e) {
        response.status(404).json({ message: e });
      }
});

app.post('/logout', async function(request, response) {
    // try {
    //     res.render('/details');   //this is path to handlebar view
    //   } catch (e) {
    //     res.status(404).json({ message: e });
    //   }
    response.clearCookie('AuthCookie')
    response.redirect('/')
});

app.get('/private', async function(request, response, next) {
    try {
        let authenticatedUser= {}
        //console.log(request.session)
        for(let i=0; i<users.length; i++){
            if (users[i].username == request.session.user){
                authenticatedUser = users[i]
            }
        }
        //console.log(authenticatedUser)
        if(Object.keys(authenticatedUser).length > 0){
            response.render('login/privateScreen', {user : authenticatedUser}); 
            //next();
        }
        else{
            response.status(403);
            response.render('login/unauthorized'); 
            //next()
        }

      } catch (e) {
        response.status(404).json({ message: e });
      }
      
});


app.listen(3000, function() {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});