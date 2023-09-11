const requirement = document.querySelector('.require');
const Fixtures = document.querySelector('#fixture');
const summary = document.querySelector('#summary')
const resultContainer = document.querySelector('.result')

const homeArea = document.querySelector('.home-area');
const duration = document.querySelector('.duration');
const awayArea = document.querySelector('.away-area');

const requirementName = document.createElement('h1')
requirementName.textContent = 'Results';
resultContainer.appendChild(requirementName);
requirementName.classList.add('midi')
const lastestScores = [
    {
        clubLogo: './img/Mighty Barrole1.png',
        homeName: 'Mighty Barrolle',
        date: '10.09.',
        gameTime: '16:00',
        homeScore: '2',
        awayTeam: {
            clubLogo: './img/Freeportt.png',
            awayName: 'Freeport',
            awayScore: '0'
        } 
    },
    {
        clubLogo: './img/Nimba Kwado1.png',
        homeName: 'Nimba Kwado',
        date: '10.09.',
        gameTime: '16:00',
        homeScore: '1',
        awayTeam: {
            clubLogo: './img/Cece-United.png',
            awayName: 'Cece United',
            awayScore: '0'
        } 
    },
    {
        clubLogo: './img/Wantaga1.png',
        homeName: 'Watanga',
        date: '10.09.',
        gameTime: '16:00',
        homeScore: '2',
        awayTeam: {
            clubLogo: './img/Global.png',
            awayName: 'Global Pharma',
            awayScore: '0'
        } 
    },
    {
        clubLogo: './img/Invicible Eleven1.png',
        homeName: 'Kallon Liberia',
        date: '09.09',
        gameTime: '16:00',
        homeScore: '1',
        awayTeam: {
            clubLogo: './img/LRPC-Oilers-logo-128x128.jpg',
            awayName: 'LPRC Oiler',
            awayScore: '1'
        } 
    },
    {
        clubLogo: './img/LISCR FC.png',
        homeName: 'LISCR FC',
        date: '06.09',
        gameTime: '17:45',
        homeScore: '2',
        awayTeam: {
            clubLogo: './img/National_Port_Authority_Anchors3-128x128.jpg',
            awayName: 'NPA Anchors',
            awayScore: '0'
        }
    },
    {
        clubLogo: './img/Bea-Mountain.png',
        homeName: 'BEA Mountain',
        date: '06.09',
        gameTime: '16:30',
        homeScore: '1',
        awayTeam: {
            clubLogo: './img/Paynesville.png',
            awayName: 'Paynesville',
            awayScore: '1'
        }
    },
    {
        clubLogo: './img/Heaven Eleven1.png',
        homeName: 'Heaven Eleven',
        date: '06.09',
        gameTime: '14:00',
        homeScore: '4',
        awayTeam: {
            clubLogo: './img/Invicible Eleven1.png',
            awayName: 'Invicible Eleven',
            awayScore: '2'
        }
    }
];


function displayResults() {
    for(let a = 0; a < lastestScores.length; a++){
        console.log(lastestScores);

        const box = document.createElement('div');
        const homeLogo = document.createElement('img');
        const awayLogo = document.createElement('img');
        const homeName = document.createElement('h1');
        const awayName = document.createElement('h1');
        const date = document.createElement('p');
        const time = document.createElement('p');
        const homeScore = document.createElement('p');
        const awayScore = document.createElement('p');

        homeLogo.src = lastestScores[a].clubLogo;
        awayLogo.src = lastestScores[a].awayLogo;
        homeName.innerHTML = lastestScores[a].homeName;
        awayName.innerHTML = lastestScores[a].awayName;
        date.innerHTML = lastestScores[a].date;
        time.innerHTML = lastestScores[a].time;
        homeScore.innerHTML = lastestScores[a].homeScore;
        awayScore.innerHTML = lastestScores[a].awayScore;


        box.appendChild(homeLogo);
        box.appendChild(homeName);
        box.appendChild(homeScore);
        resultContainer.appendChild(box);
        box.classList.add('home-area')

        // resultContainer.appendChild(date);
        // resultContainer.appendChild(time);
        // resultContainer.appendChild(awayLogo)
        


    }
}

displayResults()
