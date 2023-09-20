import React, {useEffect, useMemo, useRef, useState} from 'react';
import './App.css'
import Remake from "./tools/toolsPerson";
import UserCom from "./tools/userCom";
import Counter from "./tools/Counter";
import ClassCounter from "./tools/ClassCounter";
import Postitem from "./tools/Postitem";
import PostList from "./tools/PostList";
import MyButton from "./Ul/button/MyButton";
import MyInput from "./Ul/input/MyInput";
import PostForm from "./tools/PostForm";
import MySelect from "./Ul/select/MySelect";
import PostFilter from "./tools/PostFilter";
import MyModal from "./Ul/MyModal/MyModal/MyModal";
import {usePost} from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./Ul/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPageCount, getPagesArray} from "./utils/pages";
import Pagination from "./Ul/pagination/Pagination";


function Posts (){
    const [post,setPost] = useState([])
    const [post2,setPost2] = useState([
        {id:1,title:'Python',body:'Decripthion'},
        {id:2,title:'Flask',body:'Decripthion 1'},
        {id:2,title:'Django',body:'Decripthion 5'}
    ])
    const [filter,setFilter] = useState({sort:'',query:''})
    const[modal,setModal] = useState(false)
    const [totalPages,setTotalPages] = useState(0)
    const [limit,setLimit] = useState(10)
    const [page,setPage] = useState(1)
    const sortAndSearchedPosts = usePost(post,filter.sort,filter.query);





    const [fetchPosts,isPostsLoading,postError] = useFetching(async (limit,page) => {
        const response = await PostService.getAll(limit,page);
        setPost(response.data);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount,limit))
    })


    console.log(totalPages)

    useEffect(()=>{
        fetchPosts(limit,page)
    },[])

    const createPosts = (newPost) => {
        setPost([...post, newPost])
        setModal(false)
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit,page)
    }

    const removePost = (posts) =>{
        setPost(post.filter(p => p.id !== posts.id))
    }

    return (
            <div className='App'>
                <button onClick={fetchPosts}>GET POST</button>
                <MyButton style={{marginTop:30}} onClick={() => setModal(true)}>
                    Create Object
                </MyButton>
                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm create={createPosts}/>
                </MyModal>
                <hr style={{margin:'15px 0'}}/>
                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                />
                {postError &&
                    <h1>you made misstake ${postError}</h1>
                }
                {isPostsLoading
                    ?<div style={{display:'flex',justifyContent:'center',marginTop:30}}><Loader/></div>
                    :<PostList remove={removePost} post={sortAndSearchedPosts} title={'programmer application and language-1'}/>
                }
                <Pagination
                    page={page}
                    changePage={changePage}
                    totalPages={totalPages}
                />
                <PostList post={post2} title={'programmer application and language-2'}/>
            </div>
    );
}

export default Posts;