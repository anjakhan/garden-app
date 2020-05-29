import React, { Component } from 'react';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import ItemInput from '../components/ItemInput/ItemInput';
import ItemList from '../components/ItemList/ItemList';
import {items} from '../database';
import './App.css';

class App extends Component {
  constructor() {
      super()
      this.state = {
          items: items,
          searchfield: ''
      }
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render() {
    const filteredItems = this.state.items.filter(item => {
      return item.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='f1'>My Garden App</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <ItemInput />
        <ItemList items={filteredItems} />
      </div>
    );
  }
}

export default App;