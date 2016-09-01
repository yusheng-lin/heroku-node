import React,{ Component } from 'react';
import { connect  } from 'react-redux';
import { fetchPosts } from '../actions/index.js';
import { Link } from 'react-router';

class PostsIndex extends Component {
    
    componentWillMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return this.props.posts.map(post =>(
            <li key={post._id}>
                <div>categries:{post.categories}</div>
                <div>title:{post.title}</div>
                <Link to={ `posts/show/${post._id}` } className="btn btn-primary" >go</Link>
            </li>
        )); 
    }

    render(){
        if(this.props.posts.length === 0)
            return(<div>Loading..</div>);
       
        return(
            <div>
                <Link to="posts/new" className="btn btn-primary pull-right">Add Post</Link>
                <ul>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProp(state){
    return {  posts: state.posts.all };
}

export default connect (mapStateToProp,{ fetchPosts })(PostsIndex);

