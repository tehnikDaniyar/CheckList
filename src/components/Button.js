const Button = function ({ type, action, name, id, value, isComplited }) {
	let buttonClass;

	if (type === 'create') {
		buttonClass = 'button_create';
	} else if (type === 'control') {
		buttonClass = 'button_control';
	};

	let result = !isComplited ?
		<button className={`button ${buttonClass}`} onClick={() => action(id, value)} >{name} </button> :
		<button disabled className={`button ${buttonClass}`} >{name} </button>;

	return <>
		{result}
	</>


}
export default Button