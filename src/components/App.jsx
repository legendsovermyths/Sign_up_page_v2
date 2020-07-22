import React, {
  useState
} from "react";

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
      if (name === "fname") {
        return {
          fname: value,
          lname: prevValue.lname,
          email: prevValue.email
        }
      } else if (name === "lname") {
        return {
          fname: prevValue.fname,
          lname: value,
          email: prevValue.email,
        }
      } else if (name === "email") {
        return {
          fname: prevValue.fname,
          lname: prevValue.lname,
          email: value,
        }
      }
    })

  }

  return ( <
    div className = "container" >
    <
    h1 > {
      "Hello " + details.fname + " " + details.lname
    } < /h1> <
    p > {
      details.email
    } < /p> <
    input onChange = {
      handelChange
    }
    name = "fname"
    type = "text"
    placeholder = "First Name"
    autoCorrect = "off"
    autoComplete = "off" / >
    <
    input onChange = {
      handelChange
    }
    name = "lname"
    type = "text"
    placeholder = "Last Name"
    autoCorrect = "off"
    autoComplete = "off" / >
    <
    input onChange = {
      handelChange
    }
    name = "email"
    type = "email"
    placeholder = "Email"
    autoCorrect = "off"
    autoComplete = "off" / >
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
    } > Submit < /button> <
    /div>
  );
}

export default App;
