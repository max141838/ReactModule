import React, {useState} from 'react';
import MyInput from "../Ul/input/MyInput";
import MyButton from "../Ul/button/MyButton";

const PostForm = ({create}) => {
    const [posts,setPosts] = useState({title: '', body: ''})
    const addNewPost = (e) => {
        e.preventDefault()
       const newPost = {
            ...posts, id:Date.now()
       }
       create(newPost)
        setPosts({title: '', body: ''})
    }
    return (
        <form>
            <input type={"text"}/>
            <input
                value={posts.title}
                onChange={e => setPosts({...posts,title:e.target.value})}
                className='petro' type='text'
                placeholder='name object'/>
            <MyInput
                value={posts.body}
                onChange={e => setPosts({...posts,body:e.target.value})}
                type='text'
                placeholder='description object'/>
            <MyButton onClick={addNewPost}>Add object</MyButton>
        </form>
    );
};
export default PostForm;