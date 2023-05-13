import logo from './logo.svg';
import './App.css';

function App() {
  const drop=(ev)=>{
    ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  }
  const allowDrop=(ev)=>{
    ev.preventDefault();
  }

  const drag=(ev)=>{
    ev.dataTransfer.setData("text", ev.target.id);
  }
  return (
    <div className="App">
      <h2>Drag and Drop</h2>

<div id="div1" onDrop={drop} onDragOver={allowDrop}>
  <div draggable="true" onDragStart={drag} id="drag1">
    <h3> NAME 1</h3>
    <h5> Designation 1</h5>
      </div>
      <div draggable="true" onDragStart={drag} id="drag2">
    <h3> NAME 2</h3>
    <h5> Designation 2</h5>
      </div>
      <div draggable="true" onDragStart={drag} id="drag3">
    <h3> NAME 3</h3>
    <h5> Designation 1</h5>
      </div>
      <div draggable="true" onDragStart={drag} id="drag4">
    <h3> NAME 4</h3>
    <h5> Designation 2</h5>
      </div>
      <div draggable="true" onDragStart={drag} id="drag5">
    <h3> NAME 5</h3>
    <h5> Designation 1</h5>
      </div>
    
 
  
</div>

<div id="div2" onDrop={drop}  onDragOver={allowDrop}></div>
<div id="div3" onDrop={drop} onDragOver={allowDrop}></div>
    </div>
  );
}

export default App;
