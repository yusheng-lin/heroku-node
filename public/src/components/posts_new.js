import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';
import { reduxform} from 'redux-form';

class PostsNew extends Component{

    render(){
        return(<div></div>);
    }
}

export default connect(null,{ createPost })(PostsNew);
