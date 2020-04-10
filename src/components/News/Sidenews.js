import React, { Component } from 'react';
import axios from 'axios';
import SingleSide from './SingleSide';
import Error from './Error';
import '../App.css';

class Sidenews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
      error: false,
      source: 'Comicbookmovie.com',
    };
  }

  componentDidMount() {
    const { type, query } = this.props.section;

    const url = `http://newsapi.org/v2/${type}?${query}&apiKey=8d36c39ab3d44e2f80e8e7b00153de06
      `;

    axios
      .get(url)
      .then((res) => {
        this.setState({
          sidenews: res.data.articles,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.sidenews.map((item) => (
        <SingleSide key={item.url} item={item} />
      ));
    } else {
      return <Error />;
    }
  }

  render() {
    return (
      <div className='sidenews'>
        <h2 className='sidenews__header'>More News</h2>
        <h5>{this.state.source}</h5>
        <div>{this.renderItems()}</div>
      </div>
    );
  }
}

export default Sidenews;
