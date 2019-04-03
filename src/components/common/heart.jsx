import React from 'react';

const Heart = (props) => {
    const {liked, toggleHeart} = props;
        let heartClasses = "fa fa-heart";
        if (!liked) heartClasses += "-o"
    return (<i className={heartClasses} aria-hidden="true" style={{cursor: "pointer"}} onClick={toggleHeart}></i>)
}

export default Heart;
 

