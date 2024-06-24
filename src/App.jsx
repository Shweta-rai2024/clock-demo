
import ClockSlogan from "./components/ClockSlogan";
import ClockHeading from "./components/ClockHeading";
import CurrentTime from "./components/CurrentTime";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
 
  return (
   <div>
    <ClockHeading></ClockHeading>
    <ClockSlogan> </ClockSlogan>
    <CurrentTime></CurrentTime>

   </div>
  )
}

export default App
