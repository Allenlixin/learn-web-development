var myImage = document.querySelector("img");
myImage.onclick = function(){
    var mySrc = document.querySelector("src");
    if (mySrc === "images/firefox-icon.png" ){
        myImage.setAttribute("src","images/firefox2.png")
    }else{
        myImage.setAttribute("src","images/firefox-icon.png")
    }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName(){
    var myName = prompt("Please enter your name!");
    localStorage.setItem("name",myName);
    myHeading.textContent = "ALLen is cool ," + myName;
}

if (localStorage.getItem("name")) {
setUserName();
}else{
    var storeName = localStorage.getItem("name");
    myHeading = "Allen is cool ," + storeName;
}
myButton.onclick = function(){
    setUserName();
}