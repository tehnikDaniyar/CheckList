import Button from "./Button";
import { useState } from "react";

const Note = function ({ id, value, deleteNote, changeValue, changeComplited, isComplited }) {

	const [state, setState] = useState('create');

	function editNote() {
		setState('create');
	};

	function saveNote() {
		setState('saved')
	};

	return <div className="note" key={id}>
		{
			state === 'create' ?
				<input value={value} className="note__input" type="text" autoFocus onChange={(e) => changeValue(id, e.target.value)} /> :
				<span className={`${!isComplited ? "note__text" : "note__text_undertext"}`}>{value}</span>

		}
		<div className="note__buttons">
			<Button type="control" name={state === 'create' ? "save" : "edit"} action={state === 'create' ? saveNote : editNote} value={value} isComplited={isComplited} />
			<Button type="control" name="delete" action={deleteNote} id={id} isComplited={isComplited} />
			{state === "saved" ? <input type="checkbox" onChange={() => changeComplited(id)} /> : <span></span>}
		</div>

	</div>
}
export default Note