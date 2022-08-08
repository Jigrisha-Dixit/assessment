import './App.css';
import data from './TicketData';
import TicketComp from './TicketComp';
function App() {
  return (
    <div>
    <h1>Tickets</h1>
    <TicketComp data={data}></TicketComp>
  
    </div>
  );
}

export default App;
