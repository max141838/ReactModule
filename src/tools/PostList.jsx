import React from 'react';
import Postitem from "./Postitem";

const PostList = ({post,title}) => {
    return (
        <div>
            <h1 className='Texts'>{title}</h1>
            {
                post.map((post) => <Postitem post={post} key={post.id}/>)
            }
        </div>
    );
};

export default PostList;