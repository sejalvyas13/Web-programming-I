const express = require('express');
const router = express.Router();
const axios = require('axios');


// use the url route in router
//use the handlebar path in res.render
router.post('/', async (req, res) => {
    try{
        const person = req.body.personName;
        const link = 'https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json';
        const { data } = await axios.get(link);
        let people = [];
        if(!person){
            res.render('search/errorPage');
        }
        else{
            for(key in data){
                if(data[key].firstName.includes(person) || data[key].lastName.includes(person) ){
                    people.push(data[key]);
                }
                if (people.length == 20 ) break;
            }
            if(people.length == 0){
                res.render('search/error', {personName : person});
            }
            else{
                res.render('search/index', {users : people});
            }
        }

    }catch(e){console.log(e)}
        
    
});

module.exports = router;
