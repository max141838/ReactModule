import React from 'react';
import Postitem from "./Postitem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({post,title,remove}) => {

    if(!post.length){
        return (
            <h1 style={{textAlign:"center",color:"red"}}>
                Post undefind
            </h1>
        )
    }

    return (
        <div>
            <h1 className='Texts'>{title}</h1>
            <TransitionGroup>
            {
                post.map((post,index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                    <Postitem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;