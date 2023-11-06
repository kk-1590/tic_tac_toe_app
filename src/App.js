import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Board></Board>
      
    </div>
  );
}

function Board(){
  const [marks,setMarks] = useState([0,0,0,0,0,0,0,0,0]);

  const changeMark = () => {

  }

    return (
        <div className='Board'>
          <div>
            <Block mark={marks[0]}></Block>
            <Block mark={marks[1]}></Block>
            <Block mark={marks[2]}></Block>
          </div>
          <div>
            <Block mark={marks[3]}></Block>
            <Block mark={marks[4]}></Block>
            <Block mark={marks[5]}></Block>
          </div>
          <div>
            <Block mark={marks[6]}></Block>
            <Block mark={marks[7]}></Block>
            <Block mark={marks[8]}></Block>
          </div>            
        </div>
    )
}

function Block({mark,changeMark}){
  return (
    <div className={`Block ${mark}`} onClick={(e) => changeMark}>
      
    </div>
)
}

export default App;
