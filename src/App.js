import './App.css';

function App() {
  return (
    <div className="color-input">
      <input type='number' onChange={changeColor} name='color1' min={0} max={255} defaultValue={1}></input>
      <input type='number' onChange={changeColor} name='color2' min={0} max={255} defaultValue={1}></input>
      <input type='number' onChange={changeColor} name='color3' min={0} max={255} defaultValue={1}></input>
    </div>
  );
}

function changeColor(){
  const body = document.getElementsByTagName('body')
  const color1 = document.getElementsByName('color1')[0].value
  const color2 = document.getElementsByName('color2')[0].value
  const color3 = document.getElementsByName('color3')[0].value
  console.log(color1.value)
  document.body.style.backgroundColor = `rgb(${color1},${color2},${color3})`
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


export default App;
