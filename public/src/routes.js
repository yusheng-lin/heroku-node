import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/app';

export default (
    <Route path="/" component={App}>
    </Route>
);

/*
<IndexRoute component={PostsIndex} />
<Route path="posts/new" component={ PostsNew } />
*/