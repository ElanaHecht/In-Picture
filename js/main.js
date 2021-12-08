

var gQuests = createQuests()
var gCurrQuestIdx = 0;
var isRight

function initGame() {
 gQuests = createQuests();
 gCurrQuestIdx = 0;
 renderQuests()
 var elRestart = document.querySelector('.restart');
 elRestart.style.display = "none";
}

function createQuests() {
 return [
  { id: 1, opts: ['That\'s Yaakov!', 'That\'s Elana!'], correctOptIndex: 0 },
  { id: 2, opts: ['That\'s Talya!', 'That\'s Ezra!'], correctOptIndex: 1 },
  { id: 3, opts: ['That\'s baby Yoda!', 'That\'s Micha!'], correctOptIndex: 1 }
 ]
}


function renderQuests() {

 //var strHTML = `<img src="images/${gCurrQuestId}" alt/>;
 //var currQuest = gQuests[gCurrQuestIdx];

 // for (var i=0; i<gQuests.length; i++){
 // strHTML += `<button class="btn" onclick="checkAnswer(${i})">${currQuests.opts[i]}</button>`

 // }
 // var elCentered = document.querySelector('.centered');
 // elCentered.innerHTML = strHTML


 var elImg = document.querySelector('.image');
 elImg.src = gQuests[gCurrQuestIdx].id + '.jpg';

 var elBtn1 = document.querySelector('.button1')
 elBtn1.innerText = gQuests[gCurrQuestIdx].opts[0];

 var elBtn2 = document.querySelector('.button2')
 elBtn2.innerText = gQuests[gCurrQuestIdx].opts[1];
}

// function checkAnswer(optIdx){
//  var question = gQuests[gCurrQuestIdx];

//  if (question.correctOptIndex === optIdx){
//   if (gCurrQuestIdx===2){
//    alert ('You won!');
//    var elBtn = document.querySelector('.rest-game');
//    elBtn.style.display='block';

//    return;
//   }
//   gCurrQuestIdx++;
//   renderQuests();
//  }
// }


function result(elBtn) {

 var isButton = (elBtn === document.querySelector('.button1'));
 var optIdx = (!gQuests[gCurrQuestIdx].correctOptIndex);
 isRight = isButton === optIdx;
 openModal();

}


function openModal() {

 if (isRight) {
  if (gCurrQuestIdx < gQuests.length - 1) {
   elModalText.innerText = "Good Job! You're moving on to the next question."
  } else {
   elModalText.innerText = "You won!!!"
   var elRestart = document.querySelector('.restart');
   elRestart.style.display = "block";
  }
 }
 else elModalText.innerText = "Oops! Wrong answer... Try again.";

 var elModal = document.querySelector(".modal");
 elModal.style.display = "block";
}


function closeModal() {
 //hide the modal
 if (isRight) {
  if (gCurrQuestIdx < gQuests.length - 1) {
   gCurrQuestIdx += 1;
   renderQuests();
  } else {
   initGame();
  }
 }
 var elModal = document.querySelector(".modal");
 elModal.style.display = "none";
}

