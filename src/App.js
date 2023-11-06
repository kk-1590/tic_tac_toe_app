import './App.css';
import { useState , useEffect } from 'react';

const initialState = [0,0,0,0,0,0,0,0,0];


function App() {
  return (
    <div className="App">
      <Board></Board>
      
    </div>
  );
}

function Board(){
  const [marks,setMarks] = useState([0,0,0,0,0,0,0,0,0]);

  const [player,setPlayer] = useState(1);


  useEffect(() => {
	const combinations = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	]

	for(let c of combinations){
		if(marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1){
			console.log('Player 1 wins');
			setTimeout(() => {
				setMarks(initialState);
				setPlayer(1);
			},1000);
		}
		if(marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2){
			console.log('Player 2 wins');
			setTimeout(() => {
				setMarks(initialState);
				setPlayer(1);
			},1000);
		}
	}

  },[marks]);

  const changeMark = (i) => {
	const m = [...marks];

	if(m[i] === 0){
		m[i] = player;
		setMarks(m);
		setPlayer(player === 1 ? 2 : 1);
	}	
	else{
		alert('Please click on empty block');
	}
  }

    return (
        <div className='Board'>
          <div>
            <Block mark={marks[0]} position={0} changeMark={changeMark}></Block>
            <Block mark={marks[1]} position={1} changeMark={changeMark}></Block>
            <Block mark={marks[2]} position={2} changeMark={changeMark}></Block>
          </div>
          <div>
            <Block mark={marks[3]} position={3} changeMark={changeMark}></Block>
            <Block mark={marks[4]} position={4} changeMark={changeMark}></Block>
            <Block mark={marks[5]} position={5} changeMark={changeMark}></Block>
          </div>
          <div>
            <Block mark={marks[6]} position={6} changeMark={changeMark}></Block>
            <Block mark={marks[7]} position={7} changeMark={changeMark}></Block>
            <Block mark={marks[8]} position={8} changeMark={changeMark}></Block>
          </div>            
        </div>
    )
}

function Block({mark,position,changeMark}){
  return (
    <div className={`Block mark${mark}`} onClick={() => changeMark(position)}>
      
    </div>
)
}

export default App;
