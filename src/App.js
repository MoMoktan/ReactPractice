
import './App.css';
import UserGreeting from './UserGreeting';
import List from './List';
import Newlist from './Newlist';



function App(){
  const fruits = [
    { name: 'banana', id: 99, calories: 122 },
    { name: 'apple', id: 19 ,calories: 33},
    { name: 'pineapple', id: 29, calories: 12 },
    { name: 'berries', id: 89 , calories: 22}
];
  return (
    <>
    <UserGreeting isLoggedIn = {true} username = 'Soul' />
     <List/>

    <Newlist items = {fruits}/> 
   </>
  );
}

export default App;


