import React from "react";
class OpenTickets extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        const {open,ChangeToClose}=this.props
        return(
            <div>
               {
                open.map((item)=>(
                    <div>
                        <h3>{item.desc}</h3>
                        <button onClick={()=>ChangeToClose(item.id)}>CLOSE THE TICKET</button>
                        </div>
                ))
               }
                
                
            </div>
        )
    }
}
export default OpenTickets