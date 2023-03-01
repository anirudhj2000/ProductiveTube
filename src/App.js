import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';

function App() {
  const [searchText, setSearchText] = useState("");
  console.log(searchText)
  return (
    <div className="App flex flex-col w-full">
      <div className='self-center mt-4 text-[2rem]'>
        Productive Tube
      </div>
      <div className='text-[1rem] flex flex-row self-center mt-[30vh]'>
        <input className='mx-2 px-2 py-1 border-2' value={searchText} onChange={(e) => {setSearchText(e.target.value)}} type={'text'} />
        <a className='bg-blue-400 rounded-[0.25rem] p-2 text-white' target={"_blank"} href={`https://www.youtube.com/results?search_query=${searchText}`}>
          <div>Search</div>
        </a>
      </div>
    </div>
  );
}

export default App;
