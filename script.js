let arrayOfImages = [
  "https://cdn.pixabay.com/photo/2016/10/21/14/46/fox-1758183_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/11/23/13/15/red-panda-1852789_960_720.jpg",
  "https://cdn.pixabay.com/photo/2020/05/07/16/14/owl-5142121_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/01/09/11/04/dog-3071334_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/02/21/05/17/cat-3169476_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/02/25/17/56/cat-649164_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg",
  "https://cdn.pixabay.com/photo/2019/05/08/21/21/cat-4189697_960_720.jpg",
  "https://cdn.pixabay.com/photo/2020/12/25/09/46/dog-5858985_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/07/18/19/57/dog-7330712_960_720.jpg",
  "https://cdn.pixabay.com/photo/2021/11/27/16/25/animal-6828453_960_720.jpg",
  "https://cdn.pixabay.com/photo/2014/09/10/17/44/rat-440987_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/11/01/22/10/nutria-2909569_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/10/01/20/28/animal-967657_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/01/20/20/02/seal-1995811_960_720.jpg",
  "https://images.pexels.com/photos/13765828/pexels-photo-13765828.jpeg",
  "https://images.pexels.com/photos/11870767/pexels-photo-11870767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7179718/pexels-photo-7179718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
let youSure = [
  "https://cdn.pixabay.com/photo/2016/03/03/22/15/seal-1235138_960_720.jpg",
];
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
  // console.log(e);
  //   console.log(e.target.parentElement);
  //   console.log(e.target.className)

  if (e.target.className === "back") {
    // Turn it to front AUFDECKEN
    e.target.parentElement.classList.toggle("turn");
    /*if (true) {
        check ob 2 da sind, wenn ja DANN ..oder deck zweite auf
    } */
  } else if (e.target.localName === "img") {
    //This is front ZUDECKEN
    // console.log("Uff", e.target.parentElement.parentElement)
    e.target.parentElement.parentElement.classList.toggle("turn");
  }
}
/*function checkDoubles(){
true= keine twins / false = twins
    return true ||false
 };*/
