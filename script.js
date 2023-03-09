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
//aus dem hoover noch ein klick machen, wenn man ne karte anklickt, dass die sich dreht
//wenn 2 gleich = bleiben, 2 unterschiedlich = wieder zurück drehen

const boardField = document.querySelector(".board");
const cardback = document.querySelector(".back");
const cardItem = document.querySelector(".card");
const cardfront = document.querySelector(".front");

boardField.addEventListener("click", boardHandler);

function boardHandler(e) {
  const cardBackSide = e.target.className;
  const imgElement = e.target.localName;
  const card = e.target.parentElement.classList;
  const cardFromImg = e.target.parentElement.parentElement.classList;
  if (cardBackSide === "back") {
    console.log(e);
    // Turn it to front AUFDECKEN
    card.toggle("turn");

    /*if (true) {
        check ob 2 da sind, wenn ja DANN ..oder deck zweite auf
    } */
  } else if (imgElement === "img") {
    //This is front ZUDECKEN
    // console.log("Uff", e.target.parentElement.parentElement)
    cardFromImg.toggle("turn");
  }
}
/*function checkDoubles(){
true= keine twins / false = twins
    return true ||false
 };*/
