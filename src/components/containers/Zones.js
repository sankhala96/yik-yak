import React, { Component } from 'react'
import {Zone, CreateZone} from '../presentation'
import { APIManager } from '../../utils'

class Zones extends Component{
    constructor(){
        super();
        this.state = {
            selected: 0,
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

    addZone(zone){
        let updatedZone = Object.assign({}, zone);
        APIManager.post('/api/zone', updatedZone, (err, response) => {
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

    selectZone(index){
        console.log('select Zone ' + index);
        this.setState({
            selected: index
        })
    }

    render(){

        const  listItem = this.state.list.map((zone,i) => {
           let selected = (i == this.state.selected);
           return(
               <li key={i}>
                   <Zone index={i} select={this.selectZone.bind(this)} isSelected={selected} currentZone={zone} />
               </li>
           )
        });
        return(
            <div>
                <ol>
                    {listItem}<br/>
                    <CreateZone onCreate={this.addZone.bind(this)}/>
                </ol>
            </div>
        )
    }
}

export default Zones