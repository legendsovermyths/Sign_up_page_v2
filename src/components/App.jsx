import React,{useState} from "react";

function App() {
  let [color, changeColor] = useState("white");
  let [heading,changeHeading]=useState("")
  let [name,setName]=useState("")

   function handelChange(event){
     setName(event.target.value)
  }
  function handelClick(){
    changeHeading(name)
  }

  return (
    <div className="container">
      <h1>{"Hello "+heading}</h1>
      <input onChange={handelChange} type="text" placeholder="What's your name?" />
      <button style={{ backgroundColor: color}}
      onMouseOver={()=>changeColor(color="black")}
      onMouseOut={()=>changeColor(color="white")}
      onClick={handelClick}>Submit</button>
    </div>
  );
}

export default App;
