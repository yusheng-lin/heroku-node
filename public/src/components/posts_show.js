import React,{ Component } from 'react'
import { fetchPost } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PostsShow extends Component{
    
    componentWillMount(){
        const { id } = this.props.params;
        this.props.fetchPost(id);
    }

    render(){
        if(!this.props.post)
            return(<div>Loading...</div>);

        return( 
            <div>
                <p>Categories: {this.props.post.categories}</p>
                <p>Titlte: {this.props.post.title}</p>
                <p>Content: {this.props.post.content}</p>
                <Link to="/" className="btn btn-primary" >back</Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { post: state.posts.selected };
}


export default connect(mapStateToProps,{ fetchPost })(PostsShow);