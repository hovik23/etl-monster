import { useState } from 'react';
import UsersTable from './UsersTable.jsx'

const Admin = ( props ) => {
    return (
        <div className="account-container">
            <UsersTable
                users={props.tables['users']}
                processes={props.tables['processes']}
            />
        </div>
        )
}

export default Admin;