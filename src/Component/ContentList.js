import React from 'react';
import './App.css';
import delicon from '../Media/deleteicon.png';

const ContentList = (props) => {
  const deleteContentHandler = (id) => {
    props.getContentId(id);
  };

  const renderContentList = props.lists.map((list, index) => (
    <tr key={list.id}> {/* Ensure key is unique */}
      <td id="t1">{index + 1}</td>
      <td id="t2">{list.tasks}</td>
      <td id="t3">
        <img
          className="delicon"
          id ="delicon"
          src={delicon}
          alt="delete icon"
          onClick={() => deleteContentHandler(list.id)}
        />
      </td>
    </tr>
  ));

  return (
    <div className="Notes">
      <table>
        <thead>
          <tr>
            <th id="t1">S.no</th>
            <th id="t2">Tasks</th>
            <th id="t3">Delete</th>
          </tr>
        </thead>
        <tbody>{renderContentList}</tbody>
      </table>
    </div>
  );
};

export default ContentList;
