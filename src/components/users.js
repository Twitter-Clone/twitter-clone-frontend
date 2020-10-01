import React from 'react'

const Users = ({ users }) => {
    return (
        <div>
            <h1>Users List</h1>
            {users.map ((user) =>(
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title"> {users.twitterhandle}</h3>
                        <h6 class="card-subtitle"> {users.email}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Users;