async function getAboutData(){
    const myInfo = {
        "name": "Sejal Vyas",
        "cwid": "10450395",
        "biography": "As a child, I always wanted to be like Wolverine. I don’t mean the claws part (well that would be cool too!) but his invincibility. It always amazed me as to how after every injury, he would heal himself and get back to life like nothing happened. As a kid, I would fall, and get a lot of wounds and bruises. Then I wasn’t allowed to play until I have healed completely. And that’s why I wanted to be like Wolverine. This spirit of being invincible has stayed with me till date and it motivates me to never give up.\n I am a full time graduate student majoring in computer science. I like solving problems. When I’m not solving problems, I am either reading psychology or doing one of the hobbies from the list below! Have fun going through my bio.",
        "favoriteShows": ["Game of Thrones", "Death Note", "Black Mirror", "The Haunting of Hill House"],
        "hobbies": ["Reading", "Cardmaking", "Papermaking", "Baking"]
    }    
    return myInfo; 
}

module.exports = {getAboutData};