import Header from './header';
import AddItem from './AddItem';
import Content from './Content';
import SearchItem from './SearchItem';
import Footer from './Footer';
import './index.css'
import { useState } from "react";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shopping-list'))
    );


const [newItem, setNewItem] = useState('')
const [search, setSearch] = useState('')

const setAndStateItems = (newItems) => {
  setItems(newItems)
  localStorage.setItem('shopping-list', JSON.stringify(newItems))
}

const addItem = (item) => {
  const id = items.length ? items[items.length -1].id + 1 : 1;
  console.log(id)
  const myNewItem = {id, checked:false, item};
  const listItems = [...items, myNewItem]
  setAndStateItems(listItems)
}


const handleSubmit = (e) =>{
  e.preventDefault();
  if (!newItem) return;
  addItem(newItem)
  setNewItem('')

}

const handleCheck = (id) => {
    console.log(id)
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked } : item);
    setAndStateItems(listItems);
}

const handleDelete = (id) => {
    console.log(id)
    const listItems = items.filter((item) => item.id !== id)
    setAndStateItems(listItems);
}

  return (
    <div className="App">
      <Header title="Hanzalah's grocerries" />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
      <SearchItem search={search} setSearch={setSearch} />
      <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
