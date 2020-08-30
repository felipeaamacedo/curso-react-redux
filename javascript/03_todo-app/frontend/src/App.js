import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import './components/custom.css'

import React from 'react';
import Menu from './components/Menu'
import Routes from './main/Routes'

export default props => (
	<div className='container'>
		<Menu />
		<Routes />
	</div>
)
