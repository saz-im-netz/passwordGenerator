const charactersNumbersSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const charactersNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charactersSymbol = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const passwordBtn = document.querySelector("#password-btn");
const passwordField1 = document.querySelector("#password1");
const passwordField2 = document.querySelector("#password2");

const copyBtn1 = document.getElementById("copy-btn1");
const copyBtn2 = document.getElementById("copy-btn2");

let password = "";
let passwordLength = 0;

copyBtn1.addEventListener("click", function(){
    let text = passwordField1.innerHTML;
    navigator.clipboard.writeText(text);
});
copyBtn2.addEventListener("click", function(){
    let text = passwordField2.innerHTML;
    navigator.clipboard.writeText(text);
});


passwordBtn.addEventListener("click", function(){
    let withNumbers = document.getElementById("numbers-check").checked;
    let withSymbols = document.getElementById("symbols-check").checked;

    if(withNumbers && withSymbols) {
        generateRandomPassword(charactersNumbersSymbols);
        passwordField1.innerHTML = password;
        password = "";
    
        generateRandomPassword(charactersNumbersSymbols);
        passwordField2.innerHTML = password;
        password = "";
    }
    else if(withNumbers && !withSymbols){
        generateRandomPassword(charactersNumbers);
        passwordField1.innerHTML = password;
        password = "";
    
        generateRandomPassword(charactersNumbers);
        passwordField2.innerHTML = password;
        password = "";
    }
    else if(!withNumbers && withSymbols){
        generateRandomPassword(charactersSymbol);
        passwordField1.innerHTML = password;
        password = "";

        generateRandomPassword(charactersSymbol);
        passwordField2.innerHTML = password;
        password = "";
    }
    else{
        generateRandomPassword(characters);
        passwordField1.innerHTML = password;
        password = "";

        generateRandomPassword(characters);
        passwordField2.innerHTML = password;
        password = "";
    }
    
});

function generateRandomPassword(array){
    passwordLength = document.getElementById("character-input").value;

    for(let i = 0; i < passwordLength; i++){
        let characterIndex = Math.floor(Math.random()*array.length);

        password += array[characterIndex];
    }

    return password;
}


function copyPassword(field){
    let text = field.innerHTML;
    navigator.clipboard.writeText(text);
}