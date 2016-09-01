import axios from 'axios';

export const Fetch_Posts ='Fetch_Posts';
export const Fetch_Post ='Fetch_Post';
export const Create_Post ='Create_Post';

const URL_PATH ='/blogs';


export function fetchPosts(){

    const promise = axios.get(`${URL_PATH}`);

    return {
        type: Fetch_Posts,
        payload:promise
    }
};

export function fetchPost(id){
    const promise = axios.get(`${URL_PATH}/${id}`);

    return {
        type:Fetch_Post,
        payload:promise
    };
};


export function createPost(post){
    const promise = axios.post(`${URL_PATH}`,post);
    return {
        type:Create_Post,
        payload:promise
    }
};