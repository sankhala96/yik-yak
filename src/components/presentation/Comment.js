import React, {Component} from 'react'

class Comment extends Component{
    render(){
        return(
            <div>
                <p>
                    {this.props.currentComment.username}
                </p>

                <span>{this.props.currentComment.body}<br /></span>
                <span>|</span>
                <span>{this.props.currentComment.timeStamp}</span>
                <hr />
            </div>
        )
    }
}

export default Comment