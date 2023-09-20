import React from 'react';
import MyInput from "../Ul/input/MyInput";
import MySelect from "../Ul/select/MySelect";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e=>setFilter({...filter,query:e.target.value})}
                placeholder='search...'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter,sort:selectedSort})}
                defaultValue='select'
                options={[
                    {value:'title',name:'by name'},
                    {value:'body',name:'description'}
                ]}
            />
        </div>
    );
};

export default PostFilter;