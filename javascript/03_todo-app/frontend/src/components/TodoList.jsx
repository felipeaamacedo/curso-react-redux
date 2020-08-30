import React from 'react'

import IconBtn from './IconBtn'


export default props=>{

	const renderRows = () => {
	const list = props.list || []
		return list.map(todo=>(
				<tr key={todo._id} >
						<td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
				<td> 
						<IconBtn style='success' icon='check' hide={todo.done}
								onClick={()=>props.handleCheckAsDone(todo)}></IconBtn>
						<IconBtn style='warning' icon='undo' hide={!todo.done}
								onClick={()=>props.handleCheckAsPending(todo)}></IconBtn>
					<IconBtn style='danger' icon='trash-o' hide={!todo.done}
							onClick={()=>props.handleRemove(todo)}></IconBtn>
				</td>
			</tr>
		))
	}


	return (
			<table className='table' >
					<thead> 
							<tr>
								<th>Description</th>
								<th className='tableActions'>Ações</th>
							</tr>
					</thead>
					<tbody>
							{renderRows()}							
					</tbody>

			</table>
	)
}
