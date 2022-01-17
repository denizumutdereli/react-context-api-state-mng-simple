import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Users from './components/Users';
import AddUser from './components/AddUser';

function App() {


  return (
    <div className='container'>
      <Navbar title="App" counts="11"/>
      

        <AddUser></AddUser>
      <hr/>
      <Users/>
      <Footer></Footer>
    </div>
  );
}

export default App;
