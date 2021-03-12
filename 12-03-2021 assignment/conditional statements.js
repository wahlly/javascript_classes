function userValidation(Name, Hobby, sport){
    if(Name === "olawale"){
        console.log("Hello Olawale")
    } else if(Hobby === "reading"){
        console.log("welcome to the world of knowledge")
    } else if(sport === "football"){
        console.log("common guys, lets play our game.")
    } else{
        console.log("User validation failed.")
    }
}
userValidation("segun", "reading", "football")
userValidation("olawale", "reading", "football")
userValidation("segun", "play", "football")
userValidation("segun", "play", "tennis")

