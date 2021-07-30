// argument of this function - object params that have options:
//   - url - part of url that follows after root url of site
//   - method - default: GET
//   - body - that passes to POST request
//   - callback - function that would be called after successful request
function request(params) {
	var rootUrl = 'http://localhost:5000/api/';
	var targetUrl = rootUrl + params.url;
	var method = params.method || 'GET';
	var body = params.body;
	var callback = params.callback;

	var response = {
		method: method,
		headers: {
			Origin: 'http://localhost:3000/'
		}
	};

	if (body) {
		response.body = body
	}

	fetch(targetUrl, response)
	.then(
		response => response.json().then(callback)
	);
}

export default request
