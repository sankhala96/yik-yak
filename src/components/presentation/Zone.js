import React, { Component } from 'react'
import styles from './style'

class Zone extends Component{
    onSelectTitle(event){
        event.preventDefault();
        console.log('onSelectTitle '+ this.props.index);
        this.props.select(this.props.index);
    }

    render(){
        const style = styles.zone;
        const title = (this.props.isSelected) ? <a href="#" style={style.title}>{this.props.currentZone.name}</a> : <a href="#">{this.props.currentZone.name}</a> ;
        return(

            <div style={style.container}>
                <h2 onClick={this.onSelectTitle.bind(this)} style={style.header}>
                    {title}
                </h2>
                <span className="detail">{this.props.currentZone.zipCode}</span><br/>
                <span className="detail">{this.props.currentZone.noComments} comments</span>
            </div>

        )
    }
}

export default Zone