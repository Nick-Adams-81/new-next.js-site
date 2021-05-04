import Navbar from '../Navbar';
import Jumbotron from '../Jumbotron';
import TurnTable from '../Carousel'

const Wrapper = (props) => (
    <>
    <Navbar />
    <TurnTable /> 
    
    <div>{props.children}</div>

    </>
    

)

export default Wrapper;