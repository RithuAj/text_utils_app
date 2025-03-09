import React from 'react'

export default function Alert(props) {
  const capitalizeFirstLetter=(word)=>{
    let lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);

  }
  return (
    props.alert &&
    <div className="alert alert-primary" role="alert">
 <strong>{capitalizeFirstLetter(props.alert.type)}:  {props.alert.msg} </strong>

</div>
  )
}
