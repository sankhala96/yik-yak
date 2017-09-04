import React, { Component } from 'react'
import styles from './style'

class Zone extends Component{

    render(){
        const style = styles.zone;
        return(

            <div style={style.container}>
                <h2 style={style.header}>
                    <a href="#" style={style.title}>{this.props.currentZone.name}</a>
                </h2>
                <span className="detail">{this.props.currentZone.zipCode}</span><br/>
                <span className="detail">{this.props.currentZone.noComments} comments</span>
            </div>

        )
    }
}

export default Zone