import React, { Component } from 'react'
import Newsltem from './Newsltem'
import Spinner from './Spinner';



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

  async updateNews(pageNo){
    
    if(this.props.setProgress) this.props.setProgress(10);
    this.setState({ loading: true });

  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=fc890f2ed51e4e8d90562bb68003f029&page=${pageNo}&pageSize=${this.props.pageSize}`; 
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    if(this.props.setProgress) this.props.setProgress(70);
   
   

    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults,
      loading: false,
      page: pageNo
    });
   if(this.props.setProgress) this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews(1);
  }

  handlePrev = async () => {
    this.updateNews(this.state.page - 1);
  }

  handleNext = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults /this.props.pageSize)) {
      this.updateNews(this.state.page + 1);
    }
  }

  render() {


   


    return (
      <div className="container my-3" >
        <h2 className='text-center mt-5'>News Monkey - Top Headlines</h2>
       {this.state.loading && <Spinner/>}  
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <Newsltem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  url={element.urlToImage}
                  newurl={element.url}
                  author={element.author}
                  data={element.publishedAt}
                  chanla={element.source.name} 
                />
              </div>
            )
          })}
        </div>

       
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
