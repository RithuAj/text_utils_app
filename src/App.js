
import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="container my-3">
      <TextForm defaultContent={"Play with the Text Here :)"}></TextForm>
    </div>
    </>
  );
}

export default App;
