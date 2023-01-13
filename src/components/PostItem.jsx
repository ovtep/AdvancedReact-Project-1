import PropTypes from 'prop-types';

function PostItem({post}) {
    const {userId, title, body} = post;
    
    return <>
        <h2>Titlu: {title}</h2>
        <h3>By: {userId}</h3>
        <p>{body}</p>
    </>
}

PostItem.propTypes = {
    isVip: PropTypes.bool.isRequired
}

PostItem.defaultProps = {
    isVip: false
}

export default PostItem