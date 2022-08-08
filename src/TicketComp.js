import React from "react";
import OpenTickets from "./OpenTickets";
import CloseTickets from "./CloseTickets";
class TicketComp extends React.Component{
    constructor(props){
        super(props);
       this.state={
       Tickets:this.props.data
      
       }
       console.log(this.state.Tickets)
    }
    getOpenTickets=()=>{
             const Result=this.state.Tickets.filter((item)=>item.status===true)
             return Result
    }
    getCloseTickets=()=>{
        const Result=this.state.Tickets.filter((item)=>item.status===false)
        return Result
}
changeStatus=(itemid)=>{
    const temp=[...this.state.Tickets]
        const obj=temp.find((item)=>item.id===itemid)
        obj.status=!obj.status
        
        this.setState({Tickets:temp}) 
}
Reopen=(itemid)=>{
    const temp=[...this.state.Tickets]
        const obj=temp.find((item)=>item.id===itemid)
        obj.status=!obj.status
        this.setState({Tickets:temp}) 
}

    render(){
        
        return(

            <>
            <div>
                if(this.state.Tickets.priority===5){
                    <OpenTickets open={this.getOpenTickets()} ChangeToClose={this.changeStatus()} style={{backgroundColor:"orange"}}></OpenTickets>
                }
           if(this.state.Tickets.priority===4){
                    <OpenTickets open={this.getOpenTickets()} ChangeToClose={this.changeStatus()} style={{backgroundColor:"yellow"}}></OpenTickets>
                }
                 if(this.state.Tickets.priority===3){
                    <OpenTickets open={this.getOpenTickets()} ChangeToClose={this.changeStatus()} style={{backgroundColor:"pink"}}></OpenTickets>
                }
                 if(this.state.Tickets.priority===2){
                    <OpenTickets open={this.getOpenTickets()} ChangeToClose={this.changeStatus()} style={{backgroundColor:"blue"}}></OpenTickets>
                }
                 if(this.state.Tickets.priority===1){
                    <OpenTickets open={this.getOpenTickets()} ChangeToClose={this.changeStatus()} style={{backgroundColor:"red"}}></OpenTickets>
                }
            <CloseTickets Close={this.getCloseTickets()} ChangeToOpen={this.Reopen()}></CloseTickets>
           </div>
            </>
        )
    }
}
export default TicketComp