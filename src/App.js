import './App.css';
import data from './data';
import {useState} from 'react'
import Card from './components/Card';

function App() {

  const [content,setContent] = useState(data)

  return (
    <main>
        <div className='container'>
          <h3>เครื่องมือพัฒนาเว็บ</h3>
          <section>
            {content.map(data=><Card key={data.id} {...data}/>)}
          </section>
        </div>
    </main>
  );
}

export default App;
