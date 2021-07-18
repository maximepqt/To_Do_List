

function choseAFaire(){
    let inputTextContent = document.getElementById("btn-text").value;

    var el = document.createElement('div');
	el.innerHTML = inputTextContent;
	document.getElementById('toDoAFaire').appendChild(el);
}

function cleanText(){
    document.getElementById("btn-text").value = "";
    
}
