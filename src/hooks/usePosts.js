import {useMemo} from "react";

export const useSortedPosts = (post,sort) => {
    const sortedPost = useMemo(() =>{
        console.log('function FINISH WORK')
        if(sort){
            return [...post].sort((a,b)=>a[sort].localeCompare(b[sort]))
        }
        return post
    },[sort,post])
    return sortedPost
}

export const usePost = (post,sort,query) => {

    const sortedPost = useSortedPosts(post,sort)

    const sortAndSearchedPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(query))
    },[query,sortedPost])
    return sortAndSearchedPosts
}









