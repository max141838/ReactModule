import React, {useEffect, useState} from 'react';
import './App.css'
import Remake from "./tools/toolsPerson";
import UserCom from "./tools/userCom";
import Counter from "./tools/Counter";
import ClassCounter from "./tools/ClassCounter";
import Postitem from "./tools/Postitem";
import PostList from "./tools/PostList";
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
const [post,setPost] = useState([
    {id:1,title:'JavaScript',body:'Decripthion'},
    {id:2,title:'React',body:'Decripthion 1'},
    {id:2,title:'Node.js',body:'Decripthion 5'}
])
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

            <div className='App'>
               <PostList post={post} title={'programmer application and language-1'}/>
                <PostList post={post2} title={'programmer application and language-2'}/>
            </div>









        </div>
    );
};

export {App};