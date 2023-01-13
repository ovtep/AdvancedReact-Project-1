import React from 'react';
import UserItem from './UserItem';

function UserList(props) {
    const { users, deleteUser } = props;

    return (
        <div>
            <h2>Lista utilizatorilor:</h2>
            { users.map((user, index) => {
                return <UserItem
                    id={ user.id }
                    name={ user.name }
                    email={ user.email }
                    isGoldClient={ user.isGoldClient }
                    salariu = { user.salariu }
                    image = { user.image }
                    key={ index }
                    deleteUser = {deleteUser}
                />
            })}
        </div>
    );
}

export default UserList;