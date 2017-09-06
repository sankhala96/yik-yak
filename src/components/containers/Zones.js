import React, { Component } from 'react'
import Zone from '../presentation/Zone'
import { APIManager } from '../../utils'

class Zones extends Component{
    constructor(){
        super();
        this.state = {
            zone: {
                name: '',
                zipCode: ''
            },
            list: []

        }
    }

    componentDidMount(){
        console.log('componentDidMount');
        APIManager.get('/api/zone', null, (err, res) => {
            if(err){
                alert('Error: '+err.message);
                return
            }
            this.setState({
                list: res.results
            })
        });
    }

    addZone(){

        let updateZone = Object.assign({}, this.state.zone);
        updateZone['zipCode']= updateZone.zipCode.split(',');
        console.log('ADD Zone: ' + JSON.stringify(updateZone));

        APIManager.post('/api/zone', updateZone, (err, response) => {
            if(err){
                alert('Error: '+err.message);
                return
            }
            console.log('Zone Created: ' + JSON.stringify(response));
            let updatedList = Object.assign([], this.state.list);
            updatedList.push(response.result);
            this.setState({
                list: updatedList
            })

        });

    }

    updateZone(event){
        console.log('update Zone:' +event.target.id + '==' + event.target.value);

        let updateZone = Object.assign({}, this.state.zone);
        updateZone[event.target.id] = event.target.value;

        this.setState({
            zone: updateZone
        })
    }

    render(){

        const  listItem = this.state.list.map((zone,i) => {
           return(
               <li key={i}>
                   <Zone currentZone={zone} />
               </li>           )
        });
        return(
            <div>
                <ol>
                    {listItem}<br/>

                    <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zone Name"/><br/>
                    <input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zip Code"/><br/>
                    <button onClick={this.addZone.bind(this)} className="btn btn-danger">Add Zone</button>
                </ol>
            </div>
        )
    }
}

export default Zones