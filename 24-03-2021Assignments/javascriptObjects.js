const footballClubs = {
    name: 'Liverpool',
    country: 'England',

    coach: {
        name: 'Jurgen Klopp',
        tactic: 'Gergenpress'
    },

    leaguePosition: {
        previousSeason: 'lst',
        currentSeason: '4th'
    },

    togglePosition: function(currentPosition){
        this.currentSeason = currentPosition;
    }
} 
console.log(footballClubs.togglePosition('6th')) // changes the current season league position to 6th

//using classes...

class footballClub {
    constructor(
        name,
        country,
        coach,
        leaguePosition,
    )   {
        this.name = name;
        this.country = country;
        this.coach = coach;
        this.leaguePosition = leaguePosition;
    }
}

const clubs = new footballClub(
    'Liverpool',
    'England',
    'Jurgen Klopp',
    '6th'
);