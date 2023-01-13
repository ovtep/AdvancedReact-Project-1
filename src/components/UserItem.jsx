import PropTypes from 'prop-types';

function UserItem({user}) {
    const {name, email, isVip} = user;
    return <>
        <h1>{name}</h1>
        <p>{email}</p>
        <h1>{isVip ? 'VIP User' : 'Standard user'}</h1>
    </>
}

UserItem.propTypes = {
    isVip: PropTypes.bool.isRequired
}

UserItem.defaultProps = {
    isVip: false
}

export default UserItem;