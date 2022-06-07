let owner = "Dalida";

let recruiter = {
    name: "Aidar",
    age: 24,
    favColor: "Black"
}

let trainer1 = {
    name: "Nartay",
    age: 23,
    favColor: "Black"
}

let trainer2 = {
    name: "Murat",
    age: 24,
    favColor: "White"
}

const TEAM = {
    owner,
    mainTrainer: recruiter.name,
    trainers: [],
    isReady: false,
    minPlayersCount: 5,
    players: []
};

let hireReasons = (recruiter, participant) => {
    if(recruiter.age === participant.age ||
        recruiter.favColor === participant.favColor){
        TEAM.trainers.push(participant)
    }else{
        alert("sorry bro")
    }
}

hireReasons(recruiter, trainer1);
console.log(TEAM);
hireReasons(recruiter, trainer2);
console.log(TEAM);

let bestFriends = ["Pupa", "Lupa"];
let pigs = ["Nif-nif", "Naf-naf", "Nouf-nouf"]
let psg = ["Keylor Navas", "Kylian Mbappe" , "Neymar Jr", "Lionel Messi", "Mauro Icardi"]

let findPlayers = (players) => {
    TEAM.players = TEAM.players.concat(players)
}

TEAM.players.length === 5 ? TEAM.isReady = true : findPlayers(bestFriends)

console.log(TEAM.isReady)

TEAM.players.length === 5 ? TEAM.isReady = true : findPlayers(pigs)

console.log(TEAM.isReady)

TEAM.players.length === 5 ? TEAM.isReady = true : findPlayers(psg)

console.log(TEAM.isReady)