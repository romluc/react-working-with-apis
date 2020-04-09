import React, { Component } from 'react';
import SingleSide from './SingleSide';
import axios from 'axios';

class Sidenews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
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
      .catch((err) => console.log(err));
  }

  renderItems() {
    return this.state.sidenews.map((item) => (
      <SingleSide key={item.url} item={item} />
    ));
  }

  render() {
    return <div>{this.renderItems()}</div>;
  }
}

export default Sidenews;
