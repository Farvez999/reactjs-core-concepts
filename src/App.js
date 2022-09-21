import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel', 'BappRaz', 'Kuber', 'Jasim', 'Riyas']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {/* <Person name="Rubel" nayika="Mousumi"></Person>
      <Person name="BappRaz" nayika="Cheka"></Person>
      <Person name="kuber" nayika="kopila"></Person>
      <Person></Person> */}
      <h2>New Componets....YaY!!!</h2>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className='person'>
      <h3>Nayok : {props.name}</h3>
      <p>Nayika : {props.nayika}</p>
    </div>
  )
}
function Friend() {
  return (
    <div className='friend'>
      <h3>Basu Dev</h3>
      <p>Job : App Developer</p>
    </div>
  )
}

export default App;
