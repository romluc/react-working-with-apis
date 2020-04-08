import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    const url = `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8d36c39ab3d44e2f80e8e7b00153de06
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
      .catch((err) => console.log(err));
  }

  renderItems() {
    return this.state.news.map((item) => (
      <NewSingle key={item.url} item={item} />
    ));
  }

  render() {
    return <div className='row'>{this.renderItems()}</div>;
  }
}

export default News;
