import { useState } from 'react';
import './App.css';
import Note from './components/Note';
import Button from './components/Button';
import { nanoid } from 'nanoid';

function App() {
	const [notes, setNotes] = useState([]);


	function createNote(id, value) {
		setNotes([...notes, { id: id, value: value, isComplited: false }])
	};

	function deleteNote(id) {
		let index;

		notes.map((note, i) => {
			if (note.id === id) {
				index = i;
			};
			return note;
		})
		setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
	}


	function changeValue(id, value) {
		let res = notes.map((note, index) => {
			if (note.id === id) {
				note.value = value;
			};
			return note;
		});

		setNotes(res);
	};

	function changeComplite(id) {
		console.log("change complited", id);
		let res = notes.map((note, index) => {
			if (note.id === id) {
				note.isComplited = !note.isComplited;
			};
			return note;
		});

		console.log(res);

		setNotes(res);
	}


	let result = notes.map(note => {
		return <Note key={note.id}
			id={note.id}
			value={note.value}
			deleteNote={deleteNote}
			changeValue={changeValue}
			changeComplited={changeComplite}
			isComplited={note.isComplited}
		/>
	});

	return (
		<div className='wrapper'>
			<div className="notes">
				<Button type="create" action={createNote} name="cerate" id={nanoid()} value="new note" />
				{result}
			</div>
		</div>
	);
}

export default App;
