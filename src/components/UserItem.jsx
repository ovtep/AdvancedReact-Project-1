import React from 'react';

function UserItem(props) {
    const {id, name, email, salariu, image, isGoldClient, deleteUser} = props;


    return (
        <div>
            <h3>{ name }</h3>
            <button onClick={() => deleteUser(id)}>Stergere</button>
            <p>Email: { email }</p>
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
            <p> Salariu: { salariu } </p>
            <img src= {image} alt="this is a client"></img>
            
        </div>
    );
}

export default UserItem;