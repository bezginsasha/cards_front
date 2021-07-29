import './ContextMenu.css'

function ContextMenu(props) {
	return (
		<div className="context-menu" style={ {left: props.left} }>
			<input type="button" value="edit" className="context-menu-button" />
			<input type="button" value="delete" className="context-menu-button" />
		</div>
	)
}

export default ContextMenu