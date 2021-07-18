
// fonction qui gere la tache, valide la tache faite ou non, remove la tache 
function choseAFaire(){
    let inputTextContent = document.getElementById("btn-text").value;

    // On créer une div pour stocker nos elements 
    var maDiv = document.createElement('div');
    maDiv.style.cssText ='display: flex; flex-direction:row;width:800px; height:80px; justify-content:center; align-items:center; margin: 20px 0; font-size:20px; border-bottom:1px solid black;';
    
    // on créer un P pour stocker la tache a faire
    var monText = document.createElement('p');
    monText.style.cssText ='margin: 0 10px; font-weight:bold; height:45px; width:50%; font-size:20px;';
    monText.innerText= inputTextContent;
   
    // on créer un p pour faire un tick qui s'affiche avec le button DONE
    var monTick = document.createElement('p');
    monTick.style.cssText = 'font-family: arial;-ms-transform: scaleX(-1) rotate(-35deg); -webkit-transform: scaleX(-1) rotate(-35deg);transform: scaleX(-1) rotate(-35deg);font-size:30px; color:green; font-weight:bold;';
    monTick.innerText="L";
    monTick.style.visibility ="hidden";
    
    // on créer un button donne pour gérer si la tache est faite ou non
    var monButtonDone = document.createElement('BUTTON');
    monButtonDone.innerText="Done";
    monButtonDone.style.cssText ='margin: 0 10px; font-weight:bold; height:35px; width:100px; font-size:20px;';
    monButtonDone.onclick = function changeLocation(){
        monTick.style.visibility ="visible";
        return false;
        }
    
    // on créer un button remove pour retirer la tache 
	var monButtonRemove = document.createElement('BUTTON');
    monButtonRemove.innerText = "Remove";
    monButtonRemove.style.cssText ='margin: 0 10px; font-weight:bold; height:35px; width:100px; font-size:20px;';
    monButtonRemove.onclick = function changeLocation(){
        maDiv.remove();
        return false;
        }

        
    // notre div créée est rattacher a la div toDoAFaire de notre html
	document.getElementById('toDoAFaire').appendChild(maDiv);
    
    // on attache les element créés a la div maDiv qui est dans toDoAFaire
    maDiv.appendChild(monText);
    maDiv.appendChild(monButtonDone);
    maDiv.appendChild(monButtonRemove);
    maDiv.appendChild(monTick);
    
    
}

// fonction qui clean la zone de texte pour l'utilisateur 
function cleanText(){
    document.getElementById("btn-text").value = "";
    
}
