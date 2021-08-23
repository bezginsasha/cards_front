import showdown from 'showdown'

// this function create rendering html in string
// and put it into object that can be placed
// in react element, in dangerouslySetInnerHTML
export default function makeMarkDown(str) {
	var converter = new showdown.Converter();
	return {__html: converter.makeHtml(str)};
}
