async function getEducationData(){
    const myEducation = [
        {
          "schoolName": "Stevens Institute of Technology",
          "degree": "Master of Science",
          "favoriteClass": "Advanced Algorithms",
          "favoriteMemory": "Given the limited amount of time that I have spent at Stevens, my good set of memories here include the days when I could spend time during sunset at Castle point. With the astounding view of skyline and a bunch of things that I like to read on my laptop, it would make me feel really amazing."
        },
        {
            "schoolName": "SNDT Women's University",
            "degree": "Bachelor in Technology",
            "favoriteClass": "Cloud Computing",
            "favoriteMemory": "My favourite memory from SNDT is when it was our farewell. All of us longed badly to graduate and when we finally did, we didn't want to leave the college!"
        },
        {
            "schoolName": "Mithibai College",
            "degree": "High School",
            "favoriteClass": "Biology",
            "favoriteMemory": "It was when I gave a wrong cut to an earthworm during a dissection, spilling all its organs out and grossing out everyone in the class. It was fun."
        }
    ];   
    return myEducation; 
}

module.exports = {getEducationData};