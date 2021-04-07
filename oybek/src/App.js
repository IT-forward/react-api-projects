import React, { useState, useEffect } from 'react';
import CardTop from './components/CardTop';
import List from './components/List';
import Header from './components/Header';
import Search from './components/Search';
import ListHeader from './components/ListHeader';



function App() {

  const [results, setResults] = useState([]);

  const url = 'https://corona.lmao.ninja/v2/countries/';

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(url).then(res => res.json());
      setResults(data);
    }
    fetchData();

  }, []);

  const [searchCountry, setSearchCountry] = useState('');

  const filterCountry = results.filter(item => {
    return searchCountry !== "" ? item.country.toLowerCase().includes(searchCountry.toLowerCase()) : item;
  });

  return (
    <div className="App">
      <Header />
      <CardTop />
      <ListHeader />
      <Search onChange={e => setSearchCountry(e.target.value)} />
      <List results={filterCountry} />
    </div>
  );
}

export default App;
