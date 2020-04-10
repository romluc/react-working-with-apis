import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Sidenews from './News/Sidenews';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: `top-headlines`,
        query: `sources=bbc-news`,
      },
      news2: {
        type: `top-headlines`,
        query: `country=ca`,
      },
      news3: {
        type: `everything`,
        query: `domains=comicbookmovie.com&languange=en`,
      },
    };
  }
  render() {
    const { news1, news2, news3 } = this.state;
    return (
      <div className='container-fluid'>
        <div className='navbar-fixed'>
          <nav>
            <div className='nav-wrapper teal lighten-2'>
              <a href='/' className='brand-logo center'>
                My News Feed
              </a>
            </div>
          </nav>
        </div>
        <div className='row'>
          <div className='col s8'>
            <News section={news1} />
            <News section={news2} />
          </div>
          <div className='col s4'>
            <Sidenews section={news3} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
