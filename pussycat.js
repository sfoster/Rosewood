var pc = {};

pc.m = function(params) {
	var ele = document.createElement(params.type);
	if (params.id) {
		ele.id = params.id;
	}
	//document.getElementsByTagName('body')[0].appendChild(ele);
	return ele
}

pc.a = function(parent, child) {
	parent.appendChild(child);
}

pc.body = function() {
	return document.getElementsByTagName('body')[0];
}