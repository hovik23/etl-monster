import { Routes, Route } from "react-router-dom";
import LoginTabs from './Auth/LoginTabs.jsx'
import Account from './Auth/Account.jsx'
import ETLRoot from './ETL/ETLRoot.jsx'
import Admin from './Admin/AdminRoot.jsx'

const Content = ( props ) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-10 mx-auto">
					<Routes>
						<Route path="/etl" element={<ETLRoot/>} />
						<Route path="/auth" element={<LoginTabs/>} />
						<Route path="/account" element={<Account/>} />
						<Route path="/tables" element={<Admin/>} />
					</Routes>
				</div>
			</div>
		</div>
		)
}

export default Content;
