import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Todo from './components/Todo';

function App() {
  const [showDiv, setShowDiv] = useState(true);
  const todos = [
    {
      id: 1,
      title: 'wash dishes',
      completed: false
    },
    {
      id: 2,
      title: 'make dinner',
      completed: true
    }
  ]
  return (
    <div className="App">
      {
        todos.map((todo) => {
          return (<Todo todo={todo}/>)
        })
      }
      <div>
        <Input showDiv={showDiv} />
        <Button />
      </div>
    </div>
  );
}

export default App;
