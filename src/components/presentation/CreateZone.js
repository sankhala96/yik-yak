import React, { Component } from 'react'

class CreateZone extends Component{
    constructor(){
        super();
        this.state = {
            zone: {
                name: '',
                zipCode: ''
            }

        }
    }

    updateZone(event){
        console.log('updatedComment: ' + event.target.id + '== ' + event.target.value);
        let updatedZone = Object.assign({}, this.state.zone);
        updatedZone[event.target.id] = event.target.value;
        this.setState({
            zone: updatedZone
        })
    }

    submitZone(event){
        console.log('submitZone: '+ JSON.stringify(this.state.zone));
        let updatedZone = Object.assign({}, this.state.zone);
        updatedZone['zipCode']= updatedZone.zipCode.split(',');
        this.props.onCreate(updatedZone);
    }

    render(){
        return(
            <div>
                <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zone Name"/><br/>
                <input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zip Code"/><br/>
                <button onClick={this.submitZone.bind(this)} className="btn btn-danger">Add Zone</button>
            </div>
        )
    }
}

export default CreateZone