import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from "./CommentDetail";
import ApproveCard from "./ApproveCard";


/**
 * could use below also
 * { CommentDetail() }
 */
const App = ()=>{
    return (
        <div className="ui container comments">
            <ApproveCard>
                <div>
                <h4>Warning!</h4>
                <p>Are sure to do that?</p>
                </div>
            </ApproveCard>
            <ApproveCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 04:45pm" 
                    commentText="Nice Blog 1"
                    avatar = {faker.image.avatar()}
                />
            </ApproveCard>
            <ApproveCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 05:15pm" 
                    commentText="Nice Blog 2"
                    avatar = {faker.image.avatar()}
                />
            </ApproveCard>
            <ApproveCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Today at 06:00pm" 
                    commentText="Nice Blog 3"
                    avatar = {faker.image.avatar()}
                />
            </ApproveCard>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);