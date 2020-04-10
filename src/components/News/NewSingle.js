import React from 'react';
import '../App.css';

const NewSingle = ({ item }) => {
  return (
    <div className='col s4'>
      <div className='card'>
        <div className='card-image'>
          <img src={item.urlToImage} alt={item.title} />
          <a
            className='btn-floating btn-medium halfway-fab waves-effect waves-light teal'
            href={item.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='material-icons'>+</i>
          </a>
        </div>
        <div className='card-content'>
          <strong>{item.title}</strong>
        </div>
      </div>
    </div>
  );
};

export default NewSingle;
