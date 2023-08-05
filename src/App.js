import React from 'react';
import './App.css'
import Remake from "./tools/toolsPerson";
const App = () => {
    return (
        <div className={'wrap'}>
        <h1>Hello</h1>
            <Remake
            itemName={'Eric'}
            pic={'https://southpark.fandom.com/wiki/File:Constabe_Eric_Cartman.png'}/>
            <Remake
            itemName={'Kyle Broflovski'}
            pic={'https://static.wikia.nocookie.net/southpark/images/4/4c/HighJewElfKing.transparent.png/revision/latest?cb=20190411032218'}/>
        </div>
    );
};

export {App};