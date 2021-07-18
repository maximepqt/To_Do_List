

function choseAFaire(){
    let inputTextContent = document.getElementById("btn-text").value;

    var maDiv = document.createElement('div');
    maDiv.style.cssText ='display: flex;background-color: yellow;width:200px; justify-content:center;';
    maDiv.innerHTML = inputTextContent;

    var monButtonDone = document.createElement('BUTTON');
    monButtonDone.innerText="Done";
    monButtonDone.style.cssText ='margin: 0 10px; font-weight:bold;'
    monButtonDone.onclick = function changeLocation(){
        maDiv.remove();
        return false;
        }
	
	document.getElementById('toDoAFaire').appendChild(maDiv);
    maDiv.appendChild(monButtonDone);
}

function cleanText(){
    document.getElementById("btn-text").value = "";
    
}
