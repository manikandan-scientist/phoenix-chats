let selectedLanguage = "";

function goBack(){
window.location.href="settings.html";
}

function selectLang(el,lang){

document.querySelectorAll(".lang")
.forEach(x=>x.classList.remove("selected"));

el.classList.add("selected");

selectedLanguage = lang;

}

function save(){

if(selectedLanguage!=""){

localStorage.setItem("appLanguage",selectedLanguage);

}

/* go to settings page */

window.location.href="settings.html";

}

function cancel(){
window.location.href="settings.html";
}