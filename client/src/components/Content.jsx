import {useState} from 'react';

import LoginTabs from './Auth/LoginTabs.jsx'
import Account from './Auth/Account.jsx'
import ETLRoot from './ETL/ETLRoot.jsx'
import Admin from './Admin/AdminRoot.jsx'

const Content = ( props ) => {
    return (
        <div className="container">
			<div className="row">
				<div className="col-sm-10 mx-auto">
					{props.activeTab === 'etl' && ( <ETLRoot/> )}
					{props.activeTab === 'login' && ( <LoginTabs/> )}
					{props.activeTab === 'account' && ( <Account/> )}
					{props.activeTab === 'admin' && ( <Admin tables={props.tables}/> )}
				</div>
			</div>
		</div>
        )
}

export default Content;
