let arrayOfImages = [
  {
    src: "https://images.pexels.com/photos/271932/pexels-photo-271932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "sleeping_fox",
  },
  {
    src: "https://images.pexels.com/photos/3075556/pexels-photo-3075556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "squirrel",
  },
  {
    src: "https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "husky",
  },
  {
    src: "https://images.pexels.com/photos/13765828/pexels-photo-13765828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "otter",
  },
  {
    src: "https://images.pexels.com/photos/1525606/pexels-photo-1525606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "seal",
  },
  {
    src: "https://images.pexels.com/photos/1564839/pexels-photo-1564839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "owl",
  },
  {
    src: "https://images.pexels.com/photos/7390942/pexels-photo-7390942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "beaver",
  },
  {
    src: "https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "cat_net",
  },
  {
    src: "https://images.pexels.com/photos/866496/pexels-photo-866496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "cat_grey",
  },
  {
    src: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "cat_sleep",
  },
  {
    src: "https://images.pexels.com/photos/51340/rat-pets-eat-51340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "eating_rat",
  },
  {
    src: "https://images.pexels.com/photos/4052861/pexels-photo-4052861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "mouse",
  },
  {
    src: "https://cdn.pixabay.com/photo/2014/09/10/17/44/rat-440987_960_720.jpg",
    alt: "rat",
  },
  {
    src: "https://images.pexels.com/photos/12025705/pexels-photo-12025705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "nutria",
  },
  {
    src: "https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "hedgehog",
  },
  {
    src: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "doggy",
  },

  {
    src: "https://images.pexels.com/photos/11870767/pexels-photo-11870767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "otteer",
  },
  {
    src: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRvwWpbeu3Moa1Ub6fqv5RHe0oTMS6d1yZaMPixuZYRuyM0aCDONeGLF9m_9pZXchYLn4PuajIuU4XWjyTRjmA",
    alt: "sleepy_ferret",
  },
  {
    src: "https://images.pexels.com/photos/7179718/pexels-photo-7179718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "ferret",
  },
];
let youSure = [
  "https://images.pexels.com/photos/3196887/pexels-photo-3196887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
let cuteMode =
  "https://images.pexels.com/photos/1526410/pexels-photo-1526410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let horrorMode =
  "https://images.pexels.com/photos/673862/pexels-photo-673862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
// array + dropbox → Thema aussuchen ob tiere oder grusel ,...
//anzahl der Spieler + punkte → "turn is over...its player x turn"
//array rng bilder + rng posi
// misch btn für nachm match
//chaos mode, misch btn nach jedem Zug eines spieler

// ==== Global Variables ====
const boardField = document.querySelector(".board");
const cardback = document.querySelector(".back");
const cardItem = document.querySelector(".card");
const cardfront = document.querySelector(".front");
const btnNewGame = document.querySelector("#reset");
let imgNameForDoubleCheck = "";
let last2Cards = [];
let playerMadeChoice = false;
// ==== End of: Global Variables ====

boardField.addEventListener("click", boardHandler);

function boardHandler(e) {
  if (playerMadeChoice === false) {
    playerMadeChoice = true;
    console.log(e);
    const cardBackSide = e.target.className;
    const imgElement = e.target.localName;
    const card = e.target.parentElement.classList;
    const cardFromImg = e.target.parentElement.parentElement.classList;

    if (cardBackSide === "back") {
      const imgName = e.target.nextElementSibling.children[0].alt;
      console.log(card, boardField.childNodes[1].classList);
      // Turn it to front AUFDECKEN
      card.toggle("turn");
      last2Cards.push(card);
      checkDoubles(imgName);
    }
  } else if (playerMadeChoice === true) {
    //For unlocking if player is intensiv "clicker"
    setTimeout(() => {
      playerMadeChoice = false;
    }, 1000);
  }
}

function checkDoubles(imgName) {
  if (imgNameForDoubleCheck === "") {
    //Check if this is first Card
    imgNameForDoubleCheck = imgName; //Yes, then save it for double check
    playerMadeChoice = false;
  } else if (imgName === imgNameForDoubleCheck) {
    //Card has a double, then clear Checkers
    imgNameForDoubleCheck = "";
    last2Cards = [];
    playerMadeChoice = false;
  } else {
    imgNameForDoubleCheck = "";
    turnCards();
  }
}
function turnCards() {
  // die letzten 2 Karten  lastClick.checked = false;
  last2Cards.forEach((card) => {
    setTimeout(() => {
      //Delayed action to show player its choice
      card.toggle("turn");
      playerMadeChoice = false;
    }, 1000);
    last2Cards = [];
  });
}
/* let lastCard;

function turn(event) {
  const cards = event.target;
  if (alt === alt) {
    aufgedeckt bleiben ;
  }
checkDoubles = fail
  last2Cards = umdrehen;
}*/

btnNewGame.addEventListener("click", startNewGame);

function startNewGame() {
  imgNameForDoubleCheck = "";
  last2Cards = [];
  playerMadeChoice = false; //refactoring needed ..
  const arr = Array.from(boardField.childNodes); //Turn fake Array into true Array
  const divArr = [];
  arr.filter((div) => {
    if (div.nodeName === "DIV") {
      div.classList.remove("turn");
      divArr.push(div);
    }
  });
  mixingCards(divArr);
}
function mixingCards(divArr) {
  //div 1-16 mixen

  randomize(divArr);
}

function randomize(cardDeck) {
  // for schleife für shuffle
  // variable zum speichern der einzelnen Karte
  // rausholen einer zufälligen karte
  // einfügen der gespeicherten Karte im selben Array
  const maxRandomNumber = cardDeck.length;

  /*   for(let i = 0; i < cardDeck.length; i++){
    let takeCard = "";
    takeCard = cardDeck.splice(randomNumber(maxRandomNumber), 0)
    console.log(takeCard)
  } */
  let myArray = cardDeck;
  // console.log(myArray)
  for(let i = 0; i < maxRandomNumber; i++) {

    let switchOne = randomizeNumber(maxRandomNumber);
    let switchTwo = randomizeNumber(maxRandomNumber);

    [myArray[switchOne], myArray[switchTwo]] = [
      myArray[switchTwo],
      myArray[switchOne],
    ];
  }
  cleaningArrays(myArray);
  console.log(myArray);
}

function randomizeNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

function cleaningArrays(myArray) {
/*   boardField.textContent = "";
  const fragement = new DocumentFragment();

  myArray.forEach((div) => {
    const divEl = document.createElement(div);
    fragement.append(divEL);
  })
  boardField.append(fragement); */
}



/* const parent = document.getElementById('parent');
const childNodesArray = Array.from(parent.childNodes);

const fragment = document.createDocumentFragment();
for (const node of childNodesArray) {
  fragment.appendChild(node);
}

parent.appendChild(fragment); */