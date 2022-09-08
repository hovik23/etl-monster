import { useState, useEffect } from 'react';
import UsersTable from './UsersTable.jsx'
import ProcessesTable from './ProcessesTable.jsx'

const Admin = () => {
    const [tables, setTables] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/data',
        {
            'methods':'GET',
            headers : {
                'Content-Type':'application/json'
            }
        })
        .then(response => { return response.json() })
        .then(data => {
            setTables(data)
        })
    },[])

    return (
        <div className="account-container">
            {tables && <UsersTable
                users={tables['users']}
            />}
            {tables && <ProcessesTable
                processes={tables['processes']}
            />}
        </div>
        )
}

export default Admin;