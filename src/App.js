import React, {useEffect, useState} from 'react';
import './App.css'
import Remake from "./tools/toolsPerson";
import UserCom from "./tools/userCom";
import Counter from "./tools/Counter";
import ClassCounter from "./tools/ClassCounter";
import Postitem from "./tools/Postitem";
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
    {id:2,title:'JavaScript 2',body:'Decripthion 1'},
    {id:2,title:'JavaScript 3',body:'Decripthion 5'}
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
                <h1 className='text'>Text Subject</h1>
                {
                    post.map((post) => <Postitem post={post} key={post.id}/>)
                }

            </div>









        </div>
    );
};

export {App};