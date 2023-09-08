let data = document.querySelector('.data')
let datas = document.querySelector('.data')
let newSeason = document.querySelector('.teams2024')
let searchInput = document.querySelector('input');
let ascendingAlphabetical = document.querySelector('#first');
let decendingAlphabetical = document.querySelector('#last');

let positionss = document.querySelector('#position')
let point = document.querySelector('nav #point');
let sortLeagues = document.querySelector('#Sort_leagues');

const yearSeletion = document.querySelector('#choose-year');
const currentYear = document.querySelector('#current-season');
const lastYear = document.querySelector('#last-season');

yearSeletion.addEventListener('change' , function(){
    const selectedYear = yearSeletion.value;
    if(selectedYear === currentYear.value){
        console.log('current')
        displayLeaguesss()
        newSeason.style.display = 'block'
    }
    else if(selectedYear === lastYear.value){
        console.log('last')
    }
    console.log(selectedYear)
    displayLeague()
})
sortLeagues.addEventListener('change' , function(){
    const selectedOption = sortLeagues.value;
    if(selectedOption === point.value){
    console.log('pointttttttt');
    sortTableByPointsAsc()
    }
    else if(selectedOption === positionss.value){
        console.log('positionsssssssss');
        sortTableByPositionDesc()
        }
        else if(selectedOption === decendingAlphabetical.value){
            console.log('descending')
            sortTableByClubNameDesc()
        }
        else if(selectedOption === ascendingAlphabetical.value){
            console.log('ascending');
            sortTableByClubNameAsc()
            }
    console.log(selectedOption);
});

// sort function 
// Define global variables to keep track of the current sorting order
let sortByPointsAsc = false;
let sortByPointsDesc = false;

// Function to sort the league table by points in ascending order
function sortTableByPointsAsc() {
    leagueTable.sort((a, b) => a.points - b.points);
    displayLeague(); // Update the table on the page
    sortByPointsAsc = true;
    sortByPointsDesc = false;
}

// Function to sort the league table by points in descending order
function sortTableByPointsDesc() {
    leagueTable.sort((a, b) => b.points - a.points);
    displayLeague(); // Update the table on the page
    sortByPointsAsc = false;
    sortByPointsDesc = true;
}

// sortPostion Function
function sortTableByPositionDesc() {
    leagueTable.sort((a,b) => b.position - a.position);
    displayLeague()
    sortByPointsAsc = false;
    sortByPointsDesc = true;
}

// Function to sort the league table by club name in ascending order
function sortTableByClubNameAsc() {
    leagueTable.sort((a, b) => a.clubName.localeCompare(b.clubName));
    displayLeague(); // Update the table on the page
}

// Function to sort the league table by club name in descending order
function sortTableByClubNameDesc() {
    leagueTable.sort((a, b) => b.clubName.localeCompare(a.clubName));
    displayLeague(); // Update the table on the page
}


const leagueTable = [
    {
        position: 1,
        clubName: "LISCR",
        clubLogo: './img/LISCR FC.png',
        gameWon: 19,
        gameDrawn: 5,
        gameLoss: 2,
        matchPlayed: 26,
        points: 62
    },
    {
        position: 2,
        clubName: "Bea Mount",
        clubLogo: './img/Bea-Mountain.png',
        gameWon: 16,
        gameDrawn: 10,
        gameLoss: 0,
        matchPlayed: 26,
        points: 58
    },
    {
        position: 3,
        clubName: "Wantaga",
        clubLogo: './img/Wantaga1.png',
        gameWon: 14,
        gameDrawn: 7,
        gameLoss: 5,
        matchPlayed: 26,
        points: 49
    },
    {
        position: 4,
        clubName: "Mighty Barrole",
        clubLogo: './img/Mighty Barrole1.png',
        gameWon: 10,
        gameDrawn: 9,
        gameLoss: 7,
        matchPlayed: 26,
        points: 39
    },
    {
        position: 5,
        clubName: "Heaven Eleven",
        clubLogo: './img/Heaven Eleven1.png',
        gameWon: 10,
        gameDrawn: 9,
        gameLoss: 7,
        matchPlayed: 26,
        points: 39
    },
    {
        position: 6,
        clubName: "Nimba Kwado",
        clubLogo: './img/Nimba Kwado1.png',
        gameWon: 9,
        gameDrawn: 10,
        gameLoss: 7,
        matchPlayed: 26,
        points: 37
    },
    {
        position: 7,
        clubName: "Muscat",
        clubLogo: './img/Muscat1.png',
        gameWon: 10,
        gameDrawn: 4,
        gameLoss: 12,
        matchPlayed: 26,
        points: 34
    },
    {
        position: 8,
        clubName: "LPRC Oilers",
        clubLogo: './img/LRPC-Oilers-logo-128x128.jpg',
        gameWon: 9,
        gameDrawn: 6,
        gameLoss: 11,
        matchPlayed: 26,
        points: 33
    },
    {
        position: 9,
        clubName: "Cece United",
        clubLogo: './img/Cece-United.png',
        gameWon: 7,
        gameDrawn: 9,
        gameLoss: 10,
        matchPlayed: 26,
        points: 30 
    },
    {
        position: 10,
        clubName: "Invicible Eleven",
        clubLogo: './img/Invicible Eleven1.png',
        gameWon: 8,
        gameDrawn: 5,
        gameLoss: 13,
        matchPlayed: 26,
        points: 29
    },
    {
        position: 11,
        clubName: "Freeport",
        clubLogo: './img/Freeportt.png',
        gameWon: 7,
        gameDrawn: 5,
        gameLoss: 14,
        matchPlayed: 26,
        points: 26
    },
    {
        position: 12,
        clubName: "Jubilee",
        clubLogo: './img/Jubile.png',
        gameWon: 6,
        gameDrawn: 8,
        gameLoss: 12,
        matchPlayed: 26,
        points: 26
    },
    {
        position: 13,
        clubName: "Nimba United",
        clubLogo: './img/nimba_united2-128x128.jpg',
        gameWon: 3,
        gameDrawn: 9,
        gameLoss: 14,
        matchPlayed: 26,
        points: 18
    },
    {
        position: 14,
        clubName: "Sandi",
        clubLogo: './img/Sandi.png',
        gameWon: 6,
        gameDrawn: 0,
        gameLoss: 20,
        matchPlayed: 26,
        points: 19
    }
]
console.log(leagueTable)

function displayLeague() {

    data.innerHTML = '';

    for (let i = 0; i < leagueTable.length; i++) {
        const searchQuery = searchInput.value.toLowerCase()
        if (leagueTable[i].clubName.toLowerCase().includes(searchQuery.toLowerCase())) {

        const aboutTeam = document.createElement('div');
        const ranks = document.createElement('div');
        const combine = document.createElement('div');
        const teamLogo = document.createElement('img');
        const teamNames = document.createElement('h4');
        const win = document.createElement('div');
        const loss = document.createElement('div');
        const draw = document.createElement('div');
        const gamePlayed = document.createElement('div');
        const gamePoints = document.createElement('div');

        aboutTeam.classList.add('about');
        ranks.innerHTML = leagueTable[i].position;
        teamLogo.src = leagueTable[i].clubLogo;
        teamNames.innerHTML = leagueTable[i].clubName;
        win.innerHTML = leagueTable[i].gameWon;
        draw.innerHTML = leagueTable[i].gameDrawn;
        loss.innerHTML = leagueTable[i].gameLoss;
        gamePlayed.innerHTML = leagueTable[i].matchPlayed;
        gamePoints.innerHTML = leagueTable[i].points;

        aboutTeam.appendChild(ranks);
        combine.appendChild(teamLogo);
        combine.appendChild(teamNames)
        aboutTeam.appendChild(combine)
        // aboutTeam.appendChild(teamNames);
        aboutTeam.appendChild(win);
        aboutTeam.appendChild(draw)
        aboutTeam.appendChild(loss);
        aboutTeam.appendChild(gamePlayed);
        aboutTeam.appendChild(gamePoints);
        teamLogo.style.width = '40px'
        aboutTeam.style.alignItems = 'center';
        combine.style.display = 'flex';
        combine.style.gap = '10px';
        teamNames.style.marginTop = '10px';
        data.appendChild(aboutTeam);
        // console.log(aboutTeam)
        // console.log(leagueTable[i].position)
        // console.log(leagueTable[i].teamLogo)
        }
    
    }
}
const teamSearch = document.getElementById('teamSearch');
teamSearch.addEventListener('input', function () {
    const searchQuery = this.value;
    displayLeague(searchQuery);
});
// displayLeague()



const leagueTableCurrent = [
    {
        position: 1,
        clubName: "Heaven Eleven",
        clubLogo: './img/LISCR FC.png',
        gameWon: 1,
        gameDrawn: 0,
        gameLoss: 0,
        matchPlayed: 1,
        points: 3
    },
    {
        position: 2,
        clubName: "LISCR FC",
        clubLogo: './img/Bea-Mountain.png',
        gameWon: 1,
        gameDrawn: 0,
        gameLoss: 0,
        matchPlayed: 1,
        points: 3
    },
    {
        position: 3,
        clubName: "Paynesville",
        clubLogo: './img/Wantaga1.png',
        gameWon: 0,
        gameDrawn: 1,
        gameLoss: 0,
        matchPlayed: 1,
        points: 1
    },
    {
        position: 4,
        clubName: "Bea Mount",
        clubLogo: './img/Mighty Barrole1.png',
        gameWon: 0,
        gameDrawn: 1,
        gameLoss: 0,
        matchPlayed: 1,
        points: 1
    },
    {
        position: 5,
        clubName: "Mighty Barrole",
        clubLogo: './img/Heaven Eleven1.png',
        gameWon: 0,
        gameDrawn: 0,
        gameLoss: 0,
        matchPlayed: 0,
        points: 0
    },
    {
        position: 6,
        clubName: "LPRC Oiler",
        clubLogo: './img/Nimba Kwado1.png',
        gameWon: 0,
        gameDrawn: 0,
        gameLoss: 0,
        matchPlayed: 0,
        points: 0
    },
    {
        position: 7,
        clubName: "Wantaga",
        clubLogo: './img/Muscat1.png',
        gameWon: 0,
        gameDrawn: 0,
        gameLoss: 0,
        matchPlayed: 0,
        points: 0
    },
    {
        position: 8,
        clubName: "Freeport",
        clubLogo: './img/LRPC-Oilers-logo-128x128.jpg',
        gameWon: 0,
        gameDrawn: 0,
        gameLoss: 0,
        matchPlayed: 0,
        points: 0
    },
    {
        position: 9,
        clubName: "Nimba Kwado",
        clubLogo: './img/Cece-United.png',
        gameWon: 0,
        gameDrawn: 0,
        gameLoss: 0,
        matchPlayed: 0,
        points: 0 
    },
    {
        position: 10,
        clubName: "Kallon Liberia",
        clubLogo: './img/Invicible Eleven1.png',
        gameWon: 0,
        gameDrawn: 0,
        gameLoss: 0,
        matchPlayed: 0,
        points: 0
    },
    {
        position: 11,
        clubName: "Cece United",
        clubLogo: './img/Freeportt.png',
        gameWon: 0,
        gameDrawn: 0,
        gameLoss: 0,
        matchPlayed: 0,
        points: 0
    },
    {
        position: 12,
        clubName: "Global Pharma",
        clubLogo: './img/Jubile.png',
        gameWon: 0,
        gameDrawn: 0,
        gameLoss: 0,
        matchPlayed: 0,
        points: 0
    },
    {
        position: 13,
        clubName: "Invicible Eleven",
        clubLogo: './img/nimba_united2-128x128.jpg',
        gameWon: 0,
        gameDrawn: 0,
        gameLoss: 0,
        matchPlayed: 0,
        points: 0
    },
    {
        position: 14,
        clubName: "NPA Anchors",
        clubLogo: './img/Sandi.png',
        gameWon: 0,
        gameDrawn: 0,
        gameLoss: 0,
        matchPlayed: 0,
        points: 0
    }
]
console.log(leagueTableCurrent)

function displayLeaguesss() {

    datas.innerHTML = '';

    for (let i = 0; i < leagueTableCurrent.length; i++) {
        // const searchQuery = searchInput.value.toLowerCase()
        // if (leagueTableCurrent[i].clubName.toLowerCase().includes(searchQuery.toLowerCase())) {

        const aboutTeam = document.createElement('div');
        const ranks = document.createElement('div');
        const combine = document.createElement('div');
        const teamLogo = document.createElement('img');
        const teamNames = document.createElement('h4');
        const win = document.createElement('div');
        const loss = document.createElement('div');
        const draw = document.createElement('div');
        const gamePlayed = document.createElement('div');
        const gamePoints = document.createElement('div');

        aboutTeam.classList.add('about');
        ranks.innerHTML = leagueTableCurrent[i].position;
        teamLogo.src = leagueTableCurrent[i].clubLogo;
        teamNames.innerHTML = leagueTableCurrent[i].clubName;
        win.innerHTML = leagueTableCurrent[i].gameWon;
        draw.innerHTML = leagueTableCurrent[i].gameDrawn;
        loss.innerHTML = leagueTableCurrent[i].gameLoss;
        gamePlayed.innerHTML = leagueTableCurrent[i].matchPlayed;
        gamePoints.innerHTML = leagueTableCurrent[i].points;

        aboutTeam.appendChild(ranks);
        combine.appendChild(teamLogo);
        combine.appendChild(teamNames)
        aboutTeam.appendChild(combine)
        // aboutTeam.appendChild(teamNames);
        aboutTeam.appendChild(win);
        aboutTeam.appendChild(draw)
        aboutTeam.appendChild(loss);
        aboutTeam.appendChild(gamePlayed);
        aboutTeam.appendChild(gamePoints);
        teamLogo.style.width = '40px'
        aboutTeam.style.alignItems = 'center';
        combine.style.display = 'flex';
        combine.style.gap = '10px';
        teamNames.style.marginTop = '10px';
        datas.appendChild(aboutTeam);
        // console.log(aboutTeam)
        console.log(leagueTable[i].position)
        console.log(leagueTable[i].teamLogo)
        }
    
    }
// }


// console.log(displayLeaguesss())

// const Fixtures = [
//     {
//         id: 1,
//         date: '2023-06-02',
//         time: '3:00pm',
//         stadium: "Samuel Kanyon Doe Sports Stadium",
//         statuses: ':',
//         homeTeam: {
//             teamName: 'LISCR',
//             score: 3,
//             playerScore: 'Jim',
//             playerAssist: 'Tim',
//             logo: './img/LISCR FC.png'
//         },
//         awayTeam: {  // Corrected placement of awayTeam
//             teamName: 'Freeport',
//             score: 2,
//             playerScore: 'James',
//             playerAssist: 'Ben',
//             logo: './img/Freeportt.png'
//         },
//         leagueName: 'LFA'
//     },
//     {
//         id: 2,
//         date: '2023-06-04',
//         time: '1:00pm',
//         stadium: "Samuel Kanyon Doe Sports Stadium",
//         statuses: ':',
//         homeTeam: {
//             teamName: 'Sandi',
//             score: 1,
//             playerScore: 'Oscar',
//             playerAssist: 'Albin',
//             logo: './img/Sandi.png'
//         },
//         awayTeam: {  // Corrected placement of awayTeam
//             teamName: 'Jubilee',
//             score: 3,
//             playerScore: 'Nathan',
//             playerAssist: 'James',
//             logo: './img/Jubile.png'
//         },
//         leagueName: 'LFA'
//     },
//     {
//         id: 3,
//         date: '2023-06-04',
//         time: '4:00pm',
//         stadium: "Antionette Tubman Stadium",
//         statuses: ':',
//         homeTeam: {
//             teamName: 'Muscat',
//             score: 0,
//             playerScore: 'Ben',
//             playerAssist: 'Dave',
//             logo: './img/Muscat1.png'
//         },
//         awayTeam: {  // Corrected placement of awayTeam
//             teamName: 'Wantaga',
//             score: 2,
//             playerScore: 'Albin',
//             playerAssist: 'Emmanuel',
//             logo: './img/Wantaga1.png'
//         },
//         leagueName: 'LFA'
//     }
    

// ];

// function lfaDivision() {
//     const me = document.createElement('h1');
//     const lfaDiv = document.createElement('div');
//     const lfaLogo = document.createElement('img');
//     lfaLogo.src = './img/LFA.png';
//     lfaDiv.appendChild(lfaLogo)
//     const leag = document.createElement('div');
//     const leagName = document.createElement('h1');
//     const leagMatch = document.createElement('p');

//     lfaDiv.classList.add('team');

//     leagName.innerHTML = 'LFA First Division'
//     leagMatch.innerHTML = 'English - 3 Matches'

//     leag.classList.add('leag')
//     leag.appendChild(leagName);
//     leag.appendChild(leagMatch);
//     lfaDiv.appendChild(leag);
//     lfaBox.appendChild(lfaDiv);

   
//         for(let t = 0; t < Fixtures.length; t++){
//             const fingers = document.createElement('div');
//             const homeTeamlogo = document.createElement('img');
//             const homeTeamName = document.createElement('h1');
//             const homeTeamScore = document.createElement('p');
//             const divider = document.createElement('p');
//             const awayTeamScore = document.createElement('p');
//             const awayTeamLogo = document.createElement('img');
//             const awayTeamName = document.createElement('h1');

//             homeTeamlogo.src = Fixtures[t].homeTeam.logo;
//             homeTeamName.innerHTML = Fixtures[t].homeTeam.teamName;
//             homeTeamScore.innerHTML = Fixtures[t].homeTeam.score;
//             divider.innerHTML = Fixtures[t].statuses;
//             awayTeamScore.innerHTML = Fixtures[t].awayTeam.score;
//             awayTeamLogo.src = Fixtures[t].awayTeam.logo;
//             awayTeamName.innerHTML = Fixtures[t].awayTeam.teamName;

//             fingers.classList.add('table')


//             fingers.appendChild(homeTeamlogo);
//             fingers.appendChild(homeTeamName);
//             fingers.appendChild(homeTeamScore);
//             fingers.appendChild(divider);
//             fingers.appendChild(awayTeamScore);
//             fingers.appendChild(awayTeamLogo);
//             fingers.appendChild(awayTeamName);
//             lfaBox.appendChild(fingers)



//             // console.log(divider);
//             // console.log(homeTeamScore);
//             // console.log(awayTeamScore);
//             // console.log(homeTeamlogo);
//             // console.log(awayTeamLogo);
//             // console.log(homeTeamName);
//             // console.log(awayTeamName);

//             console.log(Fixtures[t].awayTeam.logo);
           
            



            

//         }
// }
//     lfaDivision();