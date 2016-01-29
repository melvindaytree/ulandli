document.querySelector("h1") .innerHTML = "New Project Process";

var ulclass = document.querySelector("ul");

ulclass.className = ("red");

var git = document.getElementById("git");

var node = document.createElement("LI");
var step1 =document.createTextNode("First create a new repository on Github and name it whatever you want. Copy the https link given to you");
node.appendChild(step1);
git.appendChild(node);

var node = document.createElement("LI");
var step2 =document.createTextNode("Go to your console and find the location where you want this project through cd and ls.");
node.appendChild(step2);
git.appendChild(node);

var node = document.createElement("LI");
var step3 =document.createTextNode("Git clone url");
node.appendChild(step3);
git.appendChild(node);

var node = document.createElement("LI");
var step4 =document.createTextNode("Next Git Add . in order to upload all your files to github.");
node.appendChild(step4);
git.appendChild(node);

var node = document.createElement("LI");
var step5 =document.createTextNode("Then git commit -a -m 'Add your own message here'.");
node.appendChild(step5);
git.appendChild(node);

var node = document.createElement("LI");
var step6 =document.createTextNode("Then git commit -a -m 'Add your own message here'.");
node.appendChild(step6);
git.appendChild(node);

var node = document.createElement("LI");
var step7 =document.createTextNode("If you get stuck in git commit press esc and then :wq");
node.appendChild(step7);
git.appendChild(node);

var node = document.createElement("LI");
var step8 =document.createTextNode("Finally git push in order to upload your files");
node.appendChild(step8);
git.appendChild(node);

var node = document.createElement("LI");
var step9 =document.createTextNode("You can always get an update by typing git status");
node.appendChild(step9);
git.appendChild(node);
