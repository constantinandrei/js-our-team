/* 

Per la pagina ‘Chi siamo’ del nostro sito aziendale, dobbiamo sviluppare la sezione “Il nostro team”.
Definiamo un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Milestone 1:
stampare in console l’elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.
Milestone 2:
stampare i dati all’interno di un contenitore nella pagina html in modo dinamico, creando per ciascun membro del team un elemento html che conterrà i suoi dati.
BONUS:
stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.

*/

const documentOutput = document.querySelector('.team-container')

const ourTeam = [
    {
        memberName: 'Wayne Barnett',
        role: 'Founder & CEO',
        imgUrl: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        memberName: 'Angela Caroll',
        role: 'Chief Editor',
        imgUrl: 'angela-caroll-chief-editor.jpg'
    },

    {
        memberName: 'Walter Gordon',
        role: 'Office Manager',
        imgUrl: 'walter-gordon-office-manager.jpg'
    },

    {
        memberName: 'Angela Lopez',
        role: 'Social Media Maneger',
        imgUrl: 'angela-lopez-social-media-manager.jpg'
    },

    {
        memberName: 'Scott Estrada',
        role: 'Developer',
        imgUrl: 'scott-estrada-developer.jpg'
    },

    {
        memberName: 'Barbara Ramos',
        role: 'Graphic Designer',
        imgUrl: 'barbara-ramos-graphic-designer.jpg'
    }
]

function createCard(object){
    const cardElement = document.createElement('div');
    cardElement.classList.add('team-card');
    const teamCardDiv = document.createElement('div');
    teamCardDiv.classList.add('card-image');
    const cardImage = document.createElement('img');
    cardImage.src = `img/${object.imgUrl}`;
    cardImage.alt = object.memberName;
    const cardText = document.createElement('div');
    cardText.classList.add('card-text');
    cardText.innerHTML = `<h3>${object.memberName}</h3><p>${object.role}</p>`;
    teamCardDiv.appendChild(cardImage);
    cardElement.appendChild(teamCardDiv);
    cardElement.appendChild(cardText);

    return cardElement;
}

console.log(documentOutput);

function createTeam (membersArray, element){
    for (let i = 0; i < membersArray.length; i++){
        element.appendChild(createCard(membersArray[i]));
    }
}

createTeam(ourTeam, documentOutput);