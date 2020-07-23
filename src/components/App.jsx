import React, {
  useState
} from "react";
import InputField from "./input.jsx"

function App() {
  let [color, changeColor] = useState("white");
  let [details, changeDetails] = useState({
    fname: "",
    lname: "",
    email: "",
  })

  function handelChange(event) {
    const name = event.target.name
    const value = event.target.value
    changeDetails(prevValue => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
  }
  return ( < div className = "container" >
    <
    h1 > {
      "Hello " + details.fname + " " + details.lname
    } < /h1> <
    p > {
      details.email
    } < /p> <
    InputField OnChange = {
      handelChange
    }
    name = "fname"
    text = "text"
    placeholder = "First Name" / >
    <
    InputField OnChange = {
      handelChange
    }
    name = "lname"
    text = "text"
    placeholder = "Last Name" / >
    <
    InputField OnChange = {
      handelChange
    }
    name = "email"
    text = "email"
    placeholder = "Email" / >

    <
    button style = {
      {
        backgroundColor: color
      }
    }
    onMouseOver = {
      () => changeColor(color = "black")
    }
    onMouseOut = {
      () => changeColor(color = "white")
    } > Submit < /button> < /
    div >
  );
}

export default App;
