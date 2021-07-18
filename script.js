

function choseAFaire(){
    let inputTextContent = document.getElementById("btn-text").value;

    var maDiv = document.createElement('div');
    maDiv.style.cssText ='display: flex; flex-direction:row;background-color: yellow;width:800px; height:80px; justify-content:center; align-items:center; margin: 20px 0; font-size:20px;';
    
    var monText = document.createElement('p');
    monText.style.cssText ='margin: 0 10px; font-weight:bold; height:45px; width:50%; font-size:20px;';
    monText.innerText= inputTextContent;

    var monTick = document.createElement('p');
    monTick.style.cssText = 'font-family: arial;-ms-transform: scaleX(-1) rotate(-35deg); -webkit-transform: scaleX(-1) rotate(-35deg);transform: scaleX(-1) rotate(-35deg);font-size:30px; color:green; font-weight:bold;';
    monTick.innerText="L";
    monTick.style.visibility ="hidden";
    
    

    var monButtonDone = document.createElement('BUTTON');
    monButtonDone.innerText="Done";
    monButtonDone.style.cssText ='margin: 0 10px; font-weight:bold; height:35px; width:100px; font-size:20px;';
    monButtonDone.onclick = function changeLocation(){
        monTick.style.visibility ="visible";
        
        
        //maDiv.style.backgroundColor = "green";
        return false;
        }

	var monButtonRemove = document.createElement('BUTTON');
    monButtonRemove.innerText = "Remove";
    monButtonRemove.style.cssText ='margin: 0 10px; font-weight:bold; height:35px; width:100px; font-size:20px;';
    monButtonRemove.onclick = function changeLocation(){
        maDiv.remove();
        return false;
        }

        
        
	document.getElementById('toDoAFaire').appendChild(maDiv);
    maDiv.appendChild(monText);
    maDiv.appendChild(monButtonDone);
    maDiv.appendChild(monButtonRemove);
    maDiv.appendChild(monTick);
    
    
}

function cleanText(){
    document.getElementById("btn-text").value = "";
    
}
