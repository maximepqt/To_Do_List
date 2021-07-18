

function choseAFaire(){
    let inputTextContent = document.getElementById("btn-text").value;

    var maDiv = document.createElement('div');
    maDiv.style.cssText ='display: flex; flex-direction:row;background-color: yellow;width:200px; height:70px; justify-content:center; align-items:center; margin: 20px 0; font-size:20px;';
    
    var monText = document.createElement('p');
    monText.style.cssText ='margin: 0 10px; font-weight:bold; height:45px; width:150px; font-size:20px;'
    monText.innerText= inputTextContent;
    

    var monButtonDone = document.createElement('BUTTON');
    monButtonDone.innerText="Done";
    monButtonDone.style.cssText ='margin: 0 10px; font-weight:bold; height:45px; width:200px; font-size:20px;'
    monButtonDone.onclick = function changeLocation(){
        maDiv.style.backgroundColor = "green";
        return false;
        }
	var monButtonRemove = document.createElement('BUTTON');
    monButtonRemove.innerText = "Remove";
    monButtonRemove.style.cssText ='margin: 0 10px; font-weight:bold; height:45px; width:200px; font-size:20px;'
    monButtonRemove.onclick = function changeLocation(){
        maDiv.remove();
        return false;
        }

	document.getElementById('toDoAFaire').appendChild(maDiv);
    maDiv.appendChild(monText);
    maDiv.appendChild(monButtonDone);
    maDiv.appendChild(monButtonRemove);
    
}

function cleanText(){
    document.getElementById("btn-text").value = "";
    
}
