function $(id) {
	return document.getElementById(id);
}

function clear() {
	localStorage.clear();
	load();
}

function post() {
	if($("title").value == "") {
		alert("不可为空")
	}else {
		var data = loaddata();
		var todo = {"title":$("title").value};
		data.push(todo);
		savedata(data);
		$("form").reset();
		load();
	}
}

function savedata(data) {
	localStorage.setItem("todolist",JSON.stringify(data));
}

function loaddata() {
	var collection = localStorage.getItem("todolist");
	if(collection) {
		return JSON.parse(collection);
	}else {
		return [];
	}
}

function remove(i) {
	var data = loaddata();
	data.splice(i,1);
	savedata(data);
	load();
}

function updata(i,property,value) {
	var data = loaddata();
	var todo = data.splice(i,1)[0];
	todo[property] = value;
	data.splice(i,0,todo);
	savedata(data);
	load();
}

function edit(i) {
	load();
	var  p = $("p-"+i);
	title = p.innerHTML;
	p.innerHTML = "<textarea id='input-" + i + "' value='" + title + "'/>";
	var input = $("input-" + i);
	input.value = title;
	input.setSelectionRange(0,0);
	input.focus();
	input.onblur = function () {
		if(input.value.length === 0) {
			p.innerHTML = title;
			alert("不能为空！");
		}else {
			updata(i,"title",input.value);
		}
	}
}

function load() {
	var todoliat = $("todolist");
	var collection = localStorage.getItem("todolist");
	if(collection != null) {
		var data = JSON.parse(collection);
		var todostring = "";
		for(var i = data.length - 1; i >= 0; i--) {
			todostring += "<li><p id='p-" + i + "' onclick='edit(" + i + ")'>" +
			data[i].title + "</p>" + "<a href='javascript:remove(" + i + ")'>x</a></li>";
		}
		todolist.innerHTML = todostring;
	}else {
		todolist.innerHTML = "";
	}
}
/*
$(document).ready(function(){
	$("input").focus(function(){
		$("input").css("background-color","#FFFFCC");
	});
	$("input").blur(function(){
		$("input").css("background-color",#D6D6FF");
	});
});*/
window.onload = load;