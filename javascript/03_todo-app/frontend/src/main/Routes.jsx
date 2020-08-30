import React from 'react'
import {Router, Route, Redirect, hashHistory, HashRouter} from 'react-router-dom'

import Todo from '../components/Todo'
import About from '../components/About'

export default props=>(
	<HashRouter>
			<Route path='/todos' component={Todo} />
			<Route path='/about' component={About} />
			<Redirect from='/*' to='/todos' />
	</HashRouter>

)
