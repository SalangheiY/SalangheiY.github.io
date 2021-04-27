function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	}else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	}else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
//	console.log(1);
}
function addClass(element,value) {
	if (!element.className) {
		element.className = value;
	}else {
		newClassName = element.className;
		newClassName+= " ";
		newClassName+= value;
		element.className = newClassName;
	}
	console.log(1);
}
/*function highlightPage() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	//获取header元素
	var headers = document.getElementsByTagName("header");
	//判断是否有header元素
	if (headers.length == 0) return false;
	//获取导航元素
	var navs = headers[0].getElementsByTagName("nav");
	//判断是否存在navs元素
	if (navs.length == 0) return false;	
	//获取navs标签中的链接元素
	var links = navs[0].getElementsByTagName("a");
	//进入循环
	for (var i = 0; i < links.length; i++) {
		var linkurl;
		for (var i = 0; i < links.length; i++) {
			//将获取的href存入到linkURL中
			linkurl = links[i].getAttribute("href");
//			通过window.location.href 获取当前页面的URL
			//indexOf 方法用于在字符串中寻找子字符串的位置，如果没匹配到，返回-1
			if (window.location.href.indexOf(linkurl) != -1) {
				//如果有href链接,将链接的className设置为here.
				links[i].className = "here";
				//取得链接中的text
				var linktext = links[i].lastChild.nodeValue.toLowerCase();
				//在body中添加id为链接中的text
				document.body.setAttribute("id", linktext);
			}
		}
	}
}*/
addLoadEvent(highlightPage); 
function highlightPage(href) {
	if (!document.getElementsByTagName) return false;
	var headers = document.getElementsByTagName("header");
	if (headers.length == 0) return false;
	var navs = headers[0].getElementsByTagName("nav");
	if (navs.length == 0) return false;
	var links = navs[0].getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		var linkurl;
		for (var i = 0; i < links.length; i++){
			linkurl = links[i].getAttribute("href");
			if (window.location.href.indexOf(linkurl) != -1) {
				links[i].className = "here";
				var linktext = links[i].lastChild.nodeValue.toLowerCase();
				document.body.setAttribute("id", linktext);
			}
		}
	
			
	}	
}
//动画函数
function moveElement(elementID, final_x, final_y,interval) {
	if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false;
//	获取移动的元素
	var elem = document.getElementById(elementID);
	//如果元素在移动，清除移动
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	//判断是否存在elem.style.left和elem.style.top属性
//	如果left不等于0,设置left为0
	if (!elem.style.left) {
		elem.style.left = "0px";
	}
//	如果top不等于0,设置top为0
	if (!elem.style.top) {
		elem.style.top = "0px";
	}
//	获取元素的横坐标
	var xpos = parseInt(elem.style.left);
//	获取元素的纵坐标
	var ypos = parseInt(elem.style.top);
//	如果横纵坐标等于终点位置,返回true
	if (xpos == final_x && ypos == final_y) {
		return true;
	}
//	如果横坐标的位置小于最终的位置
	if (xpos < final_x) {
		//获取向最终横坐标的方向移动的距离
		var dist = Math.ceil((final_x - xpos)/10);
		//获取新的横坐标位置
		xpos = xpos + dist;
	}
	if (xpos > final_x) {
		//获取向最终横坐标的方向移动的距离
		var dist = Math.ceil((ypos - final_x)/10);
		//获取新的横坐标的位置
		xpos = xpos - dist;
	}
	if (ypos < final_y) {
		//获取向最终纵坐标的方向移动的距离
		var dist = Math.ceil((final_y - ypos)/10);
		//获取新的纵坐标的位置
		ypos = ypos - dist;
	}
	if (ypos > final_y) {
		//获取向最终纵坐标的方向移动的距离
		var dist = Math.ceil((ypos - final_y)/10);
		//获取新的纵坐标的位置
		ypos = ypos - dist;
	}
	//设置元素的横坐标位置
	elem.style.left = xpos + "px";
	//设置元素的纵坐标的位置
	elem.style.top = ypos + "px";
	//将重新调用的moveElement函数 存入到变量repeat中
	var repeat = "moveElement('"+elementID+"'," +final_x+ ","+final_y+","+interval+" )"
	//重新调用moveElement函数
	elem.movement = setTimeout(repeat, interval);
}
function prepareSlideshow() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("intro")) return false;
	//获取p元素
	var intro = document.getElementById("intro");
//	创建新的div
	var slideshow = document.createElement("div");
//	设置div的id
	slideshow.setAttribute("id", "slideshow");
//	创建图片的框架
	var frame = document.createElement("img");
//	设置图片的src属性
	frame.setAttribute("src", "img/frame.gif");
//	设置alt属性为空
	frame.setAttribute("alt", "");
//	设置id属性
	frame.setAttribute("id", "frame");
//	在div元素中添加图片的元素
	slideshow.appendChild(frame);
//	创建图片元素
	var preview = document.createElement("img");
//	设计src属性
	preview.setAttribute("src", " img/slideshow.gif");
	//设置alt属性
	preview.setAttribute("alt", "a glimpse of what awaits you");
//	设置id属性
	preview.setAttribute("id", "preview");
//	将图片添加到slideshow中
	slideshow.appendChild(preview);
//	将框架添加到段落后边
	insertAfter(slideshow,intro);
//	获取页面上的链接元素
	var links = document.getElementsByTagName("a");
//	进入循环
	for (var i = 0; i < links.length; i++) {
//		给每个链接增加onmouseover事件
		links[i].onmouseover = function() {
//			获取当前连接的href属性
			var destination = this.getAttribute("href");
//			如果在index界面,则不移动
			if (destination.indexOf("index.html") != -1) {
				moveElement("preview",0,0,5);
			}
			
			if (destination.indexOf("about.html") != -1) {
				moveElement("preview",-150,0,5);
			}
			if (destination.indexOf("photos.html") != -1) {
				moveElement("preview", -300,0,5);
			}
			if (destination.indexOf("live.html") != -1) {
				moveElement("preview", -450,0,5);
			}
			if (destination.indexOf("contact.html") != -1) {
				moveElement("preview", -600,0,5);	
			}
		}
		
	}

}
addLoadEvent(prepareSlideshow);

function showSection(id) {
//	console.log(1);
	var sections = document.getElementsByTagName("section");
	for (var i = 0; i < sections.length; i++) {
		if (sections[i].getAttribute("id") != id) {
			sections[i].style.display = "none";
		}else {
			sections[i].style.display = "block";
		}
	}
}
function prepareInternalnav() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	var articles = document.getElementsByTagName("article");
	if (articles.length == 0) return false;
	var navs = articles[0].getElementsByTagName("nav");
	if (navs.length == 0) return false;
	var nav = navs[0];
	var links = nav.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		var sectionId = links[i].getAttribute("href").split("#")[1];
		if (!document.getElementById(sectionId)) continue;
		document.getElementById(sectionId).style.display = "none";
		links[i].destination = sectionId;
		links[i].onclick = function() {
			showSection(this.destination);
			return false;
		}
	}
	
}
addLoadEvent(prepareInternalnav);
/*function showPic(whichpic) {
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	var desc_text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	console.log(description);
	if (description.firstChild.nodeType == 3) {
		description.firstChild.nodeValue == desc_text;
	}
	alert(1);
	return true;
	
}
function prepareGallery() {
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			return !showPic(this);
		}
	}	
}
function preparePlaceholder() {
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "img/placeholder.gif");
	placeholder.setAttribute("alt", "my images gallery");
	var gallery = document.getElementById("imagegallery");
	var description = document.createElement("p");
	var desc_text = document.createTextNode("Choose an images");
	description.appendChild(desc_text);
//	insertAfter(palceholder, gallery);
//	insertAfter(description, placeholder);
	var article = document.getElementsByTagName("article")[0];
	article.appendChild(placeholder);
	article.appendChild(description);
}*/

function showPic(whichpic){

				
				if (!document.getElementById("placeholder")) return false;
				var source = whichpic.getAttribute("href");
				var placeholder = document.getElementById("placeholder");
				if (placeholder.nodeName != "IMG") return false;
				placeholder.setAttribute("src",source);
				if (document.getElementById("description")) {
//					var text = whichpic.getAttribute("title");
					if (whichpic.getAttribute("title")) {
						var text = whichpic.getAttribute("title");
					} else {
						var text = "";
					}

					var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
					var description = document.getElementById("description");
					if (description.firstChild.nodeType == 3) {
						description.firstChild.nodeValue = text;
					}		
					
				}
				return true;

				
//				onclick = "showPic(this);"
//			alert(description.firstChild.nodeValue);
				
			}
			
//			prepareGallery()函数
			function prepareGallery() {
				if(!document.getElementsByTagName) return false;
				if(!document.getElementById) return false;
				if(!document.getElementById("imagegallery")) return false;
				var gallery = document.getElementById("imagegallery");
				var links = gallery.getElementsByTagName("a");
				for (var i=0; i < links.length; i++) {
					links[i].onclick = function() {
						return !showPic(this);
					/*if (showPic(this)) {
						
						return false;
					} else {
						return true;
					}*/
//					links[i].onkeypress =links[i].onclick;
					}
					
				}
			}
			
//			preparePlaceholder函数				
			function preparePlaceholder(){
				if(!document.createElement) return false;
				if(!document.createTextNode) return false;
				if(!document.getElementById) return false;
				if(!document.getElementById("imagegallery")) return false;
				var placeholder = document.createElement("img");
				placeholder.setAttribute("id","placeholder");
				placeholder.setAttribute("src","img/placeholder.gif");
				placeholder.setAttribute("alt","my image gallery");
				placeholder.setAttribute("width", "400px");
				var description = document.createElement("p");
				description.setAttribute("id","description");
				var desctext = document.createTextNode("choose an image");
				description.appendChild(desctext);
//				document.body.appendChild(placeholder);
//				document.body.appendChild(description);
				var gallery = document.getElementById("imagegallery");
//				gallery.parentNode.insertBefore(placeholder,gallery);
//				gallery.parentNode.insertBefore(description,gallery);
				insertAfter(description,gallery);
				insertAfter(placeholder,description);
			}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
function stripeTables() {
	if (!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName("table");
	for (var i = 0; i < tables.length; i++) {
		var odd = false;
		var rows = tables[i].getElementsByTagName("tr");
		for (var j = 0; j < rows.length; j++) {
			if (odd == true) {
				addClass(rows[j],"odd");
				odd = false;
			}else {
				odd = true;
			}
		}
	}
}
function highlightRows() {
	if (!document.getElementsByTagName) return false;
	var rows = document.getElementsByTagName("tr");
	for (var i = 0; i < rows.length; i++) {
		rows[i].oldClassName = rows[i].className;
		rows[i].onmouseover = function() {
			addClass(this, "highlight");
		}
		rows[i].onmouseout = function() {
			this.className = this.oldClassName;
		}
		
	}
}
function displayAbbreviations() {
	if (!document.getElementsByTagName || !document.createElement
	|| !document.createTextNode) return false;
	var abbreviations = document.getElementsByTagName("abbr");
	if (abbreviations.length < 1) return false;
	var defs = [];
	for (var i = 0; i < abbreviations.length; i++) {
		var current_abbr = abbreviations[i];
		if (current_abbr.childNodes.length < 1) continue;
		var definition = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = definition;
	}
	var dlist = document.createElement("dl");
	for (key in defs) {
		var definition = defs[key];
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if (dlist.childNodes.length < 1) return false;
	var header = document.createElement("h3");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	var articles = document.getElementsByTagName("article");
	if (articles.length == 0) return false;
	var container = articles[0];
	container.appendChild(header);
	container.appendChild(dlist);
}
addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);
function focusLabels() {
	if (!document.getElementsByTagName) return false;
	var labels = document.getElementsByTagName("label");
	for (var i = 0; i < labels.length; i++) {
		if (!labels[i].getAttribute("for")) continue;
		labels[i].onclick = function() {
			var id = this.getAttribute("for");
			if (!document.getElementById(id)) return false;
			var element = document.getElementById("id");
			element.focus();
		}
	}
}
addLoadEvent(focusLabels);
function resetFields(whichform) {
	if (modernizr.input.placeholder) return;
	for (var i = 0; i < whichform.length; i++) {
		var element = whichform.elements[i];
		if (element.type == "submit") continue;
		var check = element.placeholder || element.getAttribute('placeholder');
		if (!check)  continue;
		element.onfocus = function() {
			var text = this.placeholder || this.getAttribute('placeholder');
			if (this.value == text) {
				this.className = "";
				this.value = "" ;
			}
		}
		element.onblur = function() {
			if (this.value == "") {
				this.calssName = 'placeholder';
				this.value = this.placeholder || this.getAttribute('placeholder');
			}
		}
		element.onblur();
	}
}
function prepareForms() {
	for (var i = 0; i < document.forms.length; i++) {
		var thisform = document.forms[i];
		resetFields(thisform);
	}
}
addLoadEvent(prepareForms);