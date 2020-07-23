import React from "react"
function InputField(props){
  return<
  input onChange = {
    props.OnChange
  }
  name = {props.name}
  type = {props.text}
  placeholder={props.placeholder}
  autoCorrect = "off"
  autoComplete = "off" / >
}
export default InputField
