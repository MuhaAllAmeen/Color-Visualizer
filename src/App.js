import './App.css';
import Hex from './Hex';
import React, { useState } from 'react';


function App() {
  const [hexString, setHexString] = useState("");
  function changeColor(){
    const color1 = document.getElementsByName('color1')[0].value
    const color2 = document.getElementsByName('color2')[0].value
    const color3 = document.getElementsByName('color3')[0].value
    document.body.style.backgroundColor = `rgb(${color1},${color2},${color3})`
    var hexString = rgbToHex(color1,color2,color3)
    setHexString(hexString);
  }
  
  function componentToHex(c) {
    var hex = Number(c).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  return (
    <>
    <div className="color-input">
      <input type='number' onChange={changeColor} name='color1' min={0} max={255} defaultValue={1}></input>
      <input type='number' onChange={changeColor} name='color2' min={0} max={255} defaultValue={1}></input>
      <input type='number' onChange={changeColor} name='color3' min={0} max={255} defaultValue={1}></input>
    </div>
    <Hex hexString={hexString}/>
    </>
  )
}



export default App;
