import React, {Component} from 'react'
import{CreateComment, Comment} from '../presentation'
import style from './style'
import { APIManager } from '../../utils'

class Comments extends Component{
    constructor(){
        super();
        this.state = {

            list: []
        }
    }

    componentDidMount(){
        console.log('componentDidMount1');

        APIManager.get('/api/comment', null, (err, res) => {
            if(err){
                alert('Error: '+err.message);
                return
            }

            this.setState({
                list: res.results
            })
        });
    }

    submitComment(comment){
        console.log('submit comment: ' + JSON.stringify(comment));

        let updatedComment = Object.assign({}, comment);
        APIManager.post('/api/comment', updatedComment, (err, res) => {
            if(err){
                alert('Error: '+ err.message);
                return
            }
            let updatedList = Object.assign([], this.state.list);
            updatedList.push(res.result);
            this.setState({
                list: updatedList
            })
        })
    }

    render(){
            const commentList = this.state.list.map((comment, i) => {
                return(
                    <li key={i}><Comment currentComment={comment}/></li>
                )
            });

        return(
            <div>
                <h1>Comments: Zone 1</h1>
                <div style={style.comment.commentBox}>
                    <ul style={style.comment.commentList}>
                        { commentList }
                    </ul>

                    <CreateComment onCreate={this.submitComment.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default Comments