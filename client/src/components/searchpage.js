import React, { useState, useEffect } from 'react';
import SearchBar from './searchbar';
import categories from '../categories';
import Examples from './examples';
import '../App.css';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [groupListDefault, setGroupListDefault] = useState();
  const [groupList, setGroupList] = useState([]);

//   const fetchData = async () => {
//     return await fetch('https://restcountries.eu/rest/v2/all')
//       .then(response => response.json())
//       .then(data => {
//          setGroupList(data) 
//          setGroupListDefault(data)
//        });}

    const fetchData = () => {
        setGroupList(categories) 
        setGroupListDefault(categories)
       }

  const updateInput = async (input) => {
     const filtered = groupListDefault.filter(group => {
      return group.title.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setGroupList(filtered);
  }

//   componentDidMount( () => {fetchData()},[]);

  useEffect( () => {fetchData()},[]);
	
  return (
      <React.Fragment>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
       {/* <GroupList GroupList={GroupList}/> */}
      <div className="examples">
        <div className="grid-container">
        {groupList.map((category, i) => (
                    <div key={i} className="grid-child">
                      {category.name}
                    <Examples name={category.title} description={category.text} image={category.img}/>
                    </div>
                  ))}
        </div>
    </div>
    </React.Fragment>
   );
}

export default SearchPage