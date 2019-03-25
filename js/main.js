
var list = document.querySelector('ul');

var todos;
function toLocal(){
	todos = list.innerHTML;
	localStorage.setItem('todos', todos);
}

list.addEventListener('click', function(ev){
	if(ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
		toLocal();
	}else if(ev.target.tagName === 'SPAN'){
		var div = ev.target.parentNode;
		div.remove();
		toLocal();
	}
},false);


function newElement() {
	var li = document.createElement('li');
	var inputValue = document.getElementById('myInput').value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if(inputValue === '') {
		alert("set text!");
	}else{
		document.getElementById('myUL').appendChild(li);
	}

	document.getElementById('myInput').value = '';

	var span = document.createElement('SPAN');
	var txt = document.createTextNode('\u00D7');
	span.className = 'close';
	span.appendChild(txt);
	li.appendChild(span);
	toLocal();
}
if(localStorage.getItem('todos')){
	list.innerHTML = localStorage.getItem('todos');
}

