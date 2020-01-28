const express = require('express');
const router = express.Router();
const axios = require('axios');


// use the url route in router
//use the handlebar path in res.render
router.get('/:id', async (req, res) => {
    try{
        const link = 'https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json';
        const { data } = await axios.get(link);
        const id = req.params.id;
        let personData;
        for(key in data){
            if(data[key].id == id){
                personData = data[key];
            }
        }
        res.render('search/details', {person : personData});
    }catch(e){console.log(e)}
    
});

module.exports = router;
