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
import {BrowserRouter, Route} from "react-router-dom";
import About from "./pages/About";


const App = () => {
    let [users,setUsers] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
                console.log(value)
            });
    },[]);

    const [value,setValue] = useState('write here');
    const [post,setPost] = useState([])
    const [post2,setPost2] = useState([
        {id:1,title:'Python',body:'Decripthion'},
        {id:2,title:'Flask',body:'Decripthion 1'},
        {id:2,title:'Django',body:'Decripthion 5'}
    ])

    return (
        <div className={'wrap'}>
            <h1>Hello</h1>
            <Remake
                itemName={'Eric'}
                pic={'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'}/>
            <Remake
                itemName={'Kyle Broflovski'}
                pic={'https://static.wikia.nocookie.net/southpark/images/4/4c/HighJewElfKing.transparent.png/revision/latest?cb=20190411032218'}/>
            {
                users.map(value => <UserCom key={value.id} name={value.name} email={value.email} />)
            }
            <Counter/>
            <Counter/>
            <Counter/>
            <Counter/>
            <h1>{value}</h1>
            <input type={"text"} value={value} onChange={event => setValue(event.target.value)}/>
            <ClassCounter/>
            {/*<BrowserRouter>*/}
            {/*    <Route>*/}
            {/*        <About/>*/}
            {/*    </Route>*/}
            {/*</BrowserRouter>*/}

        </div>
    );
};

export {App};