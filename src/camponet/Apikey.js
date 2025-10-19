import React, { Component } from 'react';

export default class Apikey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [], // ✅ Initialize as empty array
    };
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=YOUR_API_KEY')
      .then((response) => response.json())
      .then((data) => {
        if (data.articles) {
          this.setState({ articles: data.articles });
        } else {
          console.error('No articles found in API response:', data);
        }
      })
      .catch((error) => console.error('Error fetching news:', error));
  }

  render() {
    return (
      <div>
        <h1>Top Headlines</h1>
        <ul>
          {this.state.articles.map((article, index) => (
            <li key={index}>{article.title}</li>
          ))}
        </ul>
      </div>
    ); 
  }
}
