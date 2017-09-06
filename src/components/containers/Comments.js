import React, {Component} from 'react'
import Comment from '../presentation/Comment'
import style from './style'
import { APIManager } from '../../utils'

class Comments extends Component{
    constructor(){
        super();
        this.state = {
            comment: {
              username: '',
              body: '',
              timestamp: ''
            },
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

    submitComment(){
        console.log('submit comment: ' + JSON.stringify(this.state.comment));
        let updateList = Object.assign([], this.state.list);
        updateList.push(this.state.comment);

        this.setState({
            list: updateList
        })

    }

    updateUserName(event){
        //console.log('username change'+ event.target.value);

        //copy object and update
        let updatedComment = Object.assign({}, this.state.comment);
        updatedComment['username'] = event.target.value;

        this.setState({
            comment: updatedComment
        })
    }

    updateComment(event){
        //console.log('Body update: '+ event.target.value);

        //copy object and update
        let updatedComment = Object.assign({}, this.state.comment);
        updatedComment['body'] = event.target.value;

        this.setState({
            comment: updatedComment
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

                    <input onChange={this.updateUserName.bind(this)} className="form-control" type="text" placeholder="User Name"/><br/>
                    <input onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="Comment"/><br/>
                    <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>

                </div>
            </div>
        )
    }
}

export default Comments