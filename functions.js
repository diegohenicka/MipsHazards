//trim completo
function trim(str) {
	return str.replace(/^\s+|\s+$/g,"");
}

//left trim
function trimLeft(str) {
	return str.replace(/^\s+/,"");
}

//right trim
function trimRight(str) {
	return str.replace(/\s+$/,"");
}