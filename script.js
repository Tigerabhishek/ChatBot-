message = {
        "hello":"Hi",
        "good morning":"Good Morning",
        "good evening":"Good Evening",
        "good afternoon":"Good Afternoon",
        "good night":"Good Night",
        "hi":"Hello",
        "story":"Tenali Raman was once walking along a forest path when he was stopped by a merchant. “I’m looking for my camel which has strayed away. Did you see it passing by?” asked the merchant.“Had the camel hurt its leg?” asked Raman.“Oh yes! That means you have seen my camel!” said the merchant.“Only its footprints. See, you can see footprints of an animal with three legs,” said Raman, pointing out the footprints on the ground. “It was dragging the other leg because it was hurt in that leg.”“Was it blind in one eye?” Raman asked the merchant.“Yes, yes,” said the merchant eagerly.“Was it loaded it with wheat on one side and sugar on the other side?” asked Raman.“Yes, you are right,” said the merchant.“So you have seen my camel!”  exclaimed the merchant.Raman looked upset. “Did I say I saw your camel?”“You have given the exact description of my camel,” said the merchant.“I saw no camel,” said Raman.“Do you see those plants lined up on both sides of this path? You can clearly see, some animal has eaten leaves of plants on the left, but the plants on the other side remain untouched. So the animal could see with only one eye.“Look down. You can see ants lined up on this side which means, the animal was loaded with sugar bag on this side. The bag had a hole, which allowed the sugar to fall off.”“You can see grains of wheat fallen on the other side. The bag on this side also must have holes in it,” said Raman.“I can see everything you showed me,” protested the merchant,”but I still don’t see my camel.”“You follow this trail and soon you will catch up with your animal. After all it is hurt in one leg and you seem to be hale and hearty,” said Raman.The merchant took his advice and followed the trail left by the camel.Soon he caught up with the poor animal, limping along.“Rani!” the merchant shouted in happiness, as he ran to his camel.",
        "tell me story":"Tenali Raman was once walking along a forest path when he was stopped by a merchant. “I’m looking for my camel which has strayed away. Did you see it passing by?” asked the merchant.“Had the camel hurt its leg?” asked Raman.“Oh yes! That means you have seen my camel!” said the merchant.“Only its footprints. See, you can see footprints of an animal with three legs,” said Raman, pointing out the footprints on the ground. “It was dragging the other leg because it was hurt in that leg.”“Was it blind in one eye?” Raman asked the merchant.“Yes, yes,” said the merchant eagerly.“Was it loaded it with wheat on one side and sugar on the other side?” asked Raman.“Yes, you are right,” said the merchant.“So you have seen my camel!”  exclaimed the merchant.Raman looked upset. “Did I say I saw your camel?”“You have given the exact description of my camel,” said the merchant.“I saw no camel,” said Raman.“Do you see those plants lined up on both sides of this path? You can clearly see, some animal has eaten leaves of plants on the left, but the plants on the other side remain untouched. So the animal could see with only one eye.“Look down. You can see ants lined up on this side which means, the animal was loaded with sugar bag on this side. The bag had a hole, which allowed the sugar to fall off.”“You can see grains of wheat fallen on the other side. The bag on this side also must have holes in it,” said Raman.“I can see everything you showed me,” protested the merchant,”but I still don’t see my camel.”“You follow this trail and soon you will catch up with your animal. After all it is hurt in one leg and you seem to be hale and hearty,” said Raman.The merchant took his advice and followed the trail left by the camel.Soon he caught up with the poor animal, limping along.“Rani!” the merchant shouted in happiness, as he ran to his camel.",
        "open google":"Google Link: httsp://www.google.com",
        "open youtube":"YouTube Link: https://m.youtube.com/",
        "open instagram":"Instagram Link: https://www.instagram.com/",
        "open snapchat":"Snapchat Link: https://www.snapchat.com/",
        "open facebook":"Facebook Link: https://m.facebook.com/",
        "open whatsapp":"WhatsApp Link: https://www.whatsapp.com/",
        "tell me joke":"HMM means Hey Marri Me😂",
         "joke":"doston se problem shar krni chahiya because namooney aise aise solution date hai ke bamda problem hi bhool jata ha.😂Someone: wo WhatsApp par tumahara blue tick kyun nhi aaraha hai.Me: haaa wo ink khatam hogai hai.😂😂",
        "tell me more joke":"Someone: wo WhatsApp par tumahara blue tick kyun nhi aaraha hai.Me: haaa wo ink khatam hogai hai.😂😂",
        "how are you":"I am fine",
        "who are you":"I am your ChatBot85",
        "what is your name":"My name is ChatBot85",
        "play game with me":"sorry 😞,But you can play black hole game open the link:"
    }
 function sendbut() {
  var inputUser = document.getElementById("inputUser").value;
  var lower = inputUser.toLowerCase().trim();
  /* user */
  
  var user = document.getElementById("user");
  var chat = document.getElementById("chat");
  var userBox = document.createElement("p");
  
  userBox.classList.add('abhi');
  
  var utext = document.createTextNode(inputUser);
  
  userBox.appendChild(utext);
  
  user.prepend(userBox);
  /* chatBot */
  
  
  if(lower in message) {
   
  
  var chatBox = document.createElement("p");
  
  chatBox.classList.add('jinal');
  
  var ctext = document.createTextNode(message[lower]);
  
  chatBox.appendChild(ctext);
  
  user.prepend(chatBox);
  
  }else {
   var chatBox = document.createElement("p");
  
  chatBox.classList.add('jinal');
  
  var ctext = document.createTextNode("Sorry 😔, I can't give you reply on rhis message");
  
  chatBox.appendChild(ctext);
  
  user.prepend(chatBox);
  }
 }
 
 /* image */
  const chooseFile = document.getElementById("choose-file");
const chatbox = document.getElementById("chatbox");

chooseFile.addEventListener("change", function () {
  getImgData();
});
function getImgData() {
  const files = chooseFile.files[0];
  var imgcontainer = document.createElement("div");
 imgcontainer.classList.add('.imgContainer');

var user = document.getElementById("user");
 user.appendChild(imgcontainer);
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      
      imgcontainer.innerHTML = '<img src="' + this.result + '" class="sandImg"/>';
    });    
  }
}

/* settings */
function clonav() {
 var navbatcon = document.getElementById("navbatcon").style.display = "none";
}
function shonav() {
 var navbatcon = document.getElementById("navbatcon").style.display = "block";
}

/* dark */
function dark() {
 var chatbotContainer = document.querySelector('.chatbotContainer').style.background = "#262626";
 
 var chatbotContainer = document.querySelector('.chatbotContainer').style.color = "white";
 
 var inputUser = document.getElementById("inputUser").style.color = "white";
 
 var darkNav = document.querySelector('.darkNav').style.visibility = "hidden";
 
 var lightNav = document.querySelector('.lightNav').style.visibility = "visible";
}
/* light */
function light() {
 var chatbotContainer = document.querySelector('.chatbotContainer').style.background = "white";
 
 var chatbotContainer = document.querySelector('.chatbotContainer').style.color = "black";
 
 var inputUser = document.getElementById("inputUser").style.color = "black";
 
 var darkNav = document.querySelector('.darkNav').style.visibility = "visible";
 
 var lightNav = document.querySelector('.lightNav').style.visibility = "hidden";
}

/* name */
  var proname = prompt("Enter your name");

 
 var navname = document.getElementById("navname").innerHTML = proname;


function edname() {
var pronameb = prompt("Enter your name");

 var navnameb = document.getElementById("navname").innerHTML = pronameb;
}  

/* dp */
/* Dp a */
function dpa() {
 var abhi = document.getElementById("abhi").innerHTML = '<img src="chatbota.png" class="chatbotDp"/>';
}
/* Dp b */
function dpb() {
 var abhi = document.getElementById("abhi").innerHTML = '<img src="chatbotb.png" class="chatbotDp"/>';
}
/* Dp c */
function dpc() {
 var abhi = document.getElementById("abhi").innerHTML = '<img src="chatbotc.png" class="chatbotDp"/>';
}
/* add dp */

 const addDp = document.getElementById("addDp");
 
 const abhishek = document.getElementById("abhi");
 
addDp.addEventListener("change", function () {
  getImg();
});
function getImg() {
  const file = addDp.files[0];
  if (file) {
    const fileReaders = new FileReader();
    fileReaders.readAsDataURL(file);
    fileReaders.addEventListener("load", function () {
      
      abhishek.innerHTML = '<img src="' + this.result + '" class="maidp" />';
      
    });    
  }
}

/* speech */
function speech() {
 var recognition = new webkitSpeechRecognition();
 recognition.lang = "en-GB";
 recognition.onresult = function(event){
  var inputUser = document.getElementById("inputUser").value = event.results[0] [0]. transcript;
 }
 recognition.start();
}

/* credit */
function shcredit() {
 var creditContainer = document.getElementById("creditContainer").style.display = "block";
}
function clcredit() {
 var creditContainer = document.getElementById("creditContainer").style.display = "none";
}
