import React, { Component } from 'react';
import NewSingle from './NewSingle';
import Error from './Error';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false,
    };
  }

  componentDidMount() {
    const { type, query } = this.props.section;

    const url = `http://newsapi.org/v2/${type}?${query}&apiKey=8d36c39ab3d44e2f80e8e7b00153de06
      `;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles,
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
      return this.state.news.map((item) => (
        <NewSingle key={item.url} item={item} />
      ));
    } else {
      return <Error />;
    }
  }

  render() {
    return <div className='row'>{this.renderItems()}</div>;
  }
}

export default News;
