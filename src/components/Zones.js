import React, { Component } from 'react'
import Zone from './Zone'

class Zones extends Component{
    constructor(){
        super();
        this.state = {
            list: [
                {name:"Zone 1", zipCode:"1002", noComments:20},
                {name:"Zone 2", zipCode:"1003", noComments:10},
                {name:"Zone 3", zipCode:"1004", noComments:30},
                {name:"Zone 4", zipCode:"1005", noComments:40},
                {name:"Zone 5", zipCode:"1006", noComments:50}
            ]
        }
    }
    render(){

        const  listItem = this.state.list.map((zone,i) => {
           return(
               <li>
                   <Zone currentZone={zone} />
               </li>           )
        });
        return(
            <div>
                <ol>
                    {listItem}
                </ol>
            </div>
        )
    }
}

export default Zones