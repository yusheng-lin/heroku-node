import { Fetch_Posts,Fetch_Post } from '../actions/index';

const defaultState ={
    all:[],
    selected:null
};

export default function(state=defaultState,action){
    switch(action.type){
        case Fetch_Posts: return { ...state,all:action.payload.data  };
        case Fetch_Post: return { ...state,selected:action.payload.data };
    }
    return state;
};