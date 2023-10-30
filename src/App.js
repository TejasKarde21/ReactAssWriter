import LineCard from './profileCard.js';
import RightSide from './RightSide';

const right = { 
   display : "flex",
//    border : "8px solid blue",
}



function App(){
  return(  <>
  <div style={right}>
          <LineCard/>
          <RightSide />
          </div>
    </>);
}


export default App;
