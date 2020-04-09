import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Sidenews from './News/Sidenews';
import Separator from './Separator';

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
    };
  }
  render() {
    return (
      <div className='container-fluid'>
        <div className='navbar-fixed'>
          <nav>
            <div className='nav-wrapper teal lighten-2'>
              <a href='/#' className='brand-logo center'>
                My News Feed
              </a>
            </div>
          </nav>
        </div>
        <div className='row'>
          <div className='col s8'>
            <News section={this.state.news1} />
            <Separator />
            <News section={this.state.news2} />
          </div>
          <div className='col s4'>
            <Sidenews />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
