import { useState } from 'react'

function CreateItemCard(props) {
	const [title, setTitle] = useState([])

	const completeTask = title => {
		props.createTaskInParent(title)
		setTitle('')
	}

	return (
		<div>
			<h2>{props.title}</h2>
			<div>
				<input
					type="text"
					value={title}
					name="title"
					onChange={e => setTitle(e.target.value)}
					placeholder="add new task"
				/>
				<button onClick={() => completeTask(title)}>Add Task</button>{' '}
			</div>
		</div>
	)
}

export default CreateItemCard
