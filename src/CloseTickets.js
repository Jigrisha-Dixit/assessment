import React from "react";
class CloseTickets extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        const {close,ChangeToOpen}=this.props
        return(
            <div>
               {
                close.map((item)=>(
                    <div>
                        <h3>{item.desc}</h3>
                        <button onClick={()=>ChangeToOpen(item.id)}>Reopen</button>
                        </div>
                ))
               }
                
                
            </div>
        )
    }
}
export default CloseTickets