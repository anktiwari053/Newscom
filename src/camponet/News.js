import React, { Component } from 'react'
import Newsltem from './Newsltem'

export default class News extends Component {

  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
  }

  async updateNews(pageNo) {
    this.setState({ loading: true });

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=3d5715759517449ab430e8a80d52038e&page=${pageNo}&pageSize=8`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults,
      loading: false,
      page: pageNo
    });
  }

  async componentDidMount() {
    this.updateNews(1);
  }

  handlePrev = async () => {
    this.updateNews(this.state.page - 1);
  }

  handleNext = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 8)) {
      this.updateNews(this.state.page + 1);
    }
  }

  render() {


   


    return (
      <div className="container my-3" >
        <h2>News Monkey - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <Newsltem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  url={element.urlToImage}
                  newurl={element.url}
                />
              </div>
            )
          })}
        </div>

        {/* Pagination Buttons */}
        <div className='container d-flex justify-content-between my-3'>
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev}>
            &larr; Previous
          </button>

          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 8)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}>
            Next &rarr;
          </button>
        </div>
      </div>
    )
  }
}
