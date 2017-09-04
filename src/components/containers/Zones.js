import React, { Component } from 'react'
import Zone from '../presentation/Zone'
import superagent from 'superagent'

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

        superagent
            .get('/api/zone')
            .query(null)
            .set('Accept', 'application/json')
            .end((err, res) => {

                if(err){
                    alert('Error: '+err);
                    return
                }

                console.log(JSON.stringify(res.body));
                let results = res.body.results;

                this.setState({
                    list: results
                })
            })
    }

    addZone(){
        let updateList = Object.assign([], this.state.list);
        updateList.push(this.state.zone);

        this.setState({
            list: updateList
        })
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
                    <input id="zip" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zip Code"/><br/>
                    <button onClick={this.addZone.bind(this)} className="btn btn-danger">Add Zone</button>
                </ol>
            </div>
        )
    }
}

export default Zones