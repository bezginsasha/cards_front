import OverForm from "./OverForm";
import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import request from "../../util/request";
import updateCardsAndPiles from "../../util/updateCardsAndPiles";

function ImportForm(props) {
	var [ highlight, setHighlight ] = useState('');
	var dispatch = useDispatch();

	function preventDefaults(event) {
		event.stopPropagation();
		event.preventDefault();
	}

	function makeHighlight(event) {
		preventDefaults(event);
		setHighlight('drop-area-highlight');
	}

	function makeUnhighlight(event) {
		preventDefaults(event);
		setHighlight('');
	}

	function uploadFiles(event) {
		var dt = event.dataTransfer;
		var file = dt.files[0];
		var form = new FormData();
		form.set('file', file);

		request({
			url: 'cards/import',
			method: 'POST',
			body: form,
			callback: data => {
				if (data.result === 'ok'){
					props.closeForm();
					updateCardsAndPiles(dispatch);
				}
				else
					alert(data.result);
			}
		});
	}

	return (
		<OverForm>
			<p>{ props.title }</p>
			<div
				className={ 'drop-area ' + highlight }
				onDragEnter={ makeHighlight }
				onDragOver={ makeHighlight }
				onDragLeave={ makeUnhighlight }
				onDrop={ event => {
					makeUnhighlight(event);
					uploadFiles(event);
				}}
			>
				Drag and drop file for import
			</div>
		</OverForm>
	);
}

export default ImportForm
