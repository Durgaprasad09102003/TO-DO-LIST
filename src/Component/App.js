import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import AddContent from './AddContent';
import ContentList from './ContentList';

function App() {
  const LOCAL_STORAGE_KEY = "lists";
  const [lists, setLists] = useState([]);

  const removeContentHandler = (id) => {
    const newContentList = lists.filter((list) => list.id !== id);
    setLists(newContentList);
  };

 
  useEffect(() => {
    const retrievedContent = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (retrievedContent) {
      setLists(JSON.parse(retrievedContent));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lists));
  }, [lists]);


  const addContentHandler = (content) => {
    setLists([...lists, { id: uuidv4(), ...content }]);
  };

  return (
    <div className="App">
      <AddContent addContentHandler={addContentHandler} />
      <ContentList lists={lists} getContentId={removeContentHandler} />
    </div>
  );
}

export default App;
