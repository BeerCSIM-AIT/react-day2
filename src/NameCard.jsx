import React from 'react'

const NameCard = (props) => {
  return (
    <div style={divStyle}>
        <img src={props.picture} alt="" />
        <p style={textStyle}>
           Name: {props.name} 
        </p>
        <p style={textStyle}>
            Email: {props.email}
        </p>
        <p style={textStyle}>
            Tel: {props.tel}
        </p>
    </div>
  )
}
const divStyle={
    border: '1px solid black',
    borderRadius: 5,
    padding: 20,
    marginLeft: '20%',
    marginRight: '20%',
    marginBottom: 15,
    fontWeight: 'bold',
    fontFamily: 'courier'
}
const textStyle={
    marginBottom: 10,
}

export default NameCard