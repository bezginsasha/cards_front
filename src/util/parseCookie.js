function parseCookie(cookie) {
	return cookie.split('; ')
		         .map( keyValue => getDictFromKeyValue(keyValue) )
				 .reduce( (dict, current) => {
				     var key = getFirstKeyOfDict(current);
					 dict[key] = current[key];
					 return dict;
				 });
}

function getDictFromKeyValue(keyValue) {
	var indexOfEqual = keyValue.indexOf('=');
	var key = keyValue.substr(0, indexOfEqual);
	var value = keyValue.substr(indexOfEqual + 1);
	var res = {};
	res[key] = value;
	return res;
}

function getFirstKeyOfDict(dict) {
	return Object.keys(dict)[0];
}

export default parseCookie;
