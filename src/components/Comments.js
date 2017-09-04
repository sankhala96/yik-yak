import React, {Component} from 'react'
import Comment from './Comment'
import style from './style'

class Comments extends Component{
    constructor(){
        super();
        this.state = {
            list: [
                {body: 'comment 1', username: 'ttygdhv', timeStamp: '10:30'},
                {body: 'comment 2', username: 'bfgbdvd', timeStamp: '11:30'},
                {body: 'comment 3', username: 'ddgdgdg', timeStamp: '12:00'},
                {body: 'comment 4', username: 'fvdgsgg', timeStamp: '12:30'}
            ]
        }
    }
    render(){
            const commentList = this.state.list.map((comment, i) => {
                return(
                    <li><Comment currentComment={comment}/></li>
                )
            });

        return(
            <div>
                <h1>Comments: Zone 1</h1>
                <div style={style.comment.commentBox}>
                    <ul style={style.comment.commentList}>
                        { commentList }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Comments