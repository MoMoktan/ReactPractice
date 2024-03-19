
import './App.css';
import UserGreeting from './UserGreeting';
import List from './List';
function App() {
  return (
    <>
    <UserGreeting isLoggedIn = {true} username = 'Soul' />
   <List/>
   </>
  );
}

export default App;

