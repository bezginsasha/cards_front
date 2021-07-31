import './PilesForm.css'
import OverForm from '../OverForm'
import PilesFormRow from './PilesFormRow'

function PilesForm(props) {
	var piles = [
		'word',
		'test',
		'hello',
	];

	var pilesElements = piles.map(pile => <PilesFormRow name={ pile } />);

	return (
		<OverForm>
			<p>{ props.title }</p>
			{ pilesElements }
		</OverForm>
	);
}

export default PilesForm
