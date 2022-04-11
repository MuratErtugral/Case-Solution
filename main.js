const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');
const badge = document.querySelector('.badge');

const num = document.querySelector('.num');
const server = [{title:"Kupon Yağmuru",img:"./img/1.png",action:"Fırsatları Yakala"},{title:"Online Özel",img:"./img/2.png",action:"Fırsatları Yakala"}]


const createTask=(item)=>{
  return`
  <div class="campaign"><h3 class="title" >${item.title}</h3>
  <img src=${item.img} alt="campaign1" width="80%" height="100px">
  <h4 class="action">${item.action} ></h4>
  <div class="emojies" > 
      <span class="pensive">&#128532</span>
      <span class="neutral">&#128528</span>
      <span class="smile">&#128516</span>
  </div>
  <div class="feedback"><textarea placeholder="Geri bildirim gönderin" class="textarea" name="Text1" value=""></textarea><button class="submit"> <i class="material-icons"> send</i></button>
  </div> 
  </div>
  `
}

for (i=0 ;i<server.length;i++){
  chatArea.innerHTML+=(createTask((server[i])))
}



const submitBtn = document.querySelectorAll('.submit');
const emojies = document.querySelectorAll(".emojies");
const textArea = document.querySelectorAll(".textarea");
const feedBack = document.querySelectorAll(".feedback")
const campaign = document.querySelectorAll(".campaign");

chatBtn.addEventListener('click', ()=>{
  popup.classList.toggle('show');
  chatBtn.style.display="none"
  
})

badge.addEventListener('click', ()=>{
popup.classList.toggle('show');
chatBtn.style.display="block"


})
for (let i = 0; i < textArea.length ; i++) {

  
  
    textArea[i].addEventListener("focus",()=>{
      textArea[i].style.height="70px"
  })
  
  textArea[i].addEventListener("blur",()=>{
    textArea[i].style.height="30px"
  })
  
};

for (let i = 0; i < emojies.length ; i++) {
  emojies[i].addEventListener("click",(e)=>{
  
    if(e.target.classList.contains("pensive")){
      e.target.style.filter="grayscale(0)"
      e.target.style.fontSize="larger"
      e.target.nextElementSibling.style.filter="grayscale(1)"
      e.target.nextElementSibling.style.fontSize="medium"
      e.target.nextElementSibling.nextElementSibling.style.filter="grayscale(1)"
      e.target.nextElementSibling.nextElementSibling.style.fontSize="medium"
      e.target.parentElement.value="pensive"
      
    };
    if(e.target.classList.contains("neutral")){
      e.target.style.filter="grayscale(0)"
      e.target.style.fontSize="larger"
      e.target.nextElementSibling.style.filter="grayscale(1)"
      e.target.nextElementSibling.style.fontSize="medium"
      e.target.previousElementSibling.style.filter="grayscale(1)"
      e.target.previousElementSibling.style.fontSize="medium"
      e.target.parentElement.value="neutral"
    }
    if(e.target.classList.contains("smile")){
      e.target.style.filter="grayscale(0)"
      e.target.style.fontSize="larger"
      e.target.previousElementSibling.style.filter="grayscale(1)"
      e.target.previousElementSibling.style.fontSize="medium"
      e.target.previousElementSibling.previousElementSibling.style.filter="grayscale(1)"
      e.target.previousElementSibling.previousElementSibling.style.fontSize="medium"
      e.target.parentElement.value="smile"
      
    }
  })

};



for (let i = 0; i < submitBtn.length  ; i++){

submitBtn[i].addEventListener("click",(e)=>{
  let comment= e.target.parentElement.previousElementSibling.value
  
  let feeling = e.target.parentElement.parentElement.previousElementSibling.value
  

    localStorage.setItem(e.target.parentElement.parentElement.parentElement.firstChild.innerText+" " + "feeling",feeling)
    localStorage.setItem(e.target.parentElement.parentElement.parentElement.firstChild.innerText+" " + "comment",comment)
    
  
  
    feedBack[i].innerHTML=`<p class="response">Geri bildiriminiz için teşekkürler</p>`
    emojies[i].innerHTML=""
})

}

window.addEventListener('load', (event) => {
  for(i=0;i<campaign.length;i++){
    if(localStorage.getItem(campaign[i].firstChild.innerText+" "+"comment")||localStorage.getItem(campaign[i].firstChild.innerText+" "+"feeling")){
      feedBack[i].innerHTML=`<p class="response">Geri bildiriminiz değerlendirilmektedir</p>`
      emojies[i].innerHTML=""
    }}
  
  
});

num.innerText=server.length

setInterval(()=> {chatBtn.style.transform="scale(2)"} ,2500);

setInterval(()=> {chatBtn.style.transform="scale(1)"} ,750);
