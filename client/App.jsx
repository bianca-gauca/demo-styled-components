import { inject, observer } from 'mobx-react'
import { useState, useEffect, useCallback } from 'react'
import CreateItemCard from './components/CreateItemCard'
import ListItemCard from './components/ListItemCard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ActiveListCard from './components/PendingListCard'
import './styles.css'

function App(props) {
	const types = ['active', 'complete']
	const [activeTab, setActiveTab] = useState(types[0])

	const [activeTodos, setActiveTodos] = useState([])
	const [completedTodos, setCompletedTodos] = useState([])
	const { todoStore } = props.rootStore

	useEffect(() => {
		loadTasks()
	}, [])

	const loadTasks = async () => {
		await todoStore.loadTodos()
		setActiveTodos(todoStore.getActive())
		setCompletedTodos(todoStore.getComplete())
	}

	const createTask = async title => {
		await todoStore.createTask({ title: title })
		loadTasks()
	}

	const completeTask = async task => {
		await todoStore.completeATask({ id: task._id })
		loadTasks()
	}

	const tabPanel = () => {
		return (
			<Tabs>
				<TabList>
					{types.map(type => (
						<Tab
							key={type}
							isActive={activeTab === type}
							onClick={() => {
								setActiveTab(type)
							}}
						>
							{type}
						</Tab>
					))}
				</TabList>
				{/*<StyledDivider></StyledDivider>*/}
				<TabPanel>
					<ActiveListCard
						title="Active Tasks"
						cardData={activeTodos}
						completeTaskInParent={task => completeTask(task)}
					/>
				</TabPanel>
				<TabPanel>
					<ListItemCard title="Completed Tasks" cardData={completedTodos} />
				</TabPanel>
			</Tabs>
		)
	}

	return (
		<div className="container">
			{todoStore.isLoading && <h1> is Loading... </h1>}
			<CreateItemCard title="Add Tasks" createTaskInParent={title => createTask(title)} />
			<h2>A Simple ToDo List App</h2>
			<div>{tabPanel()}</div>
		</div>
	)
}

export default inject('rootStore')(observer(App))
