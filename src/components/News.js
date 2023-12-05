import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
// import sampleoutput from '.../sampleoutput.json'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=315f63f7526f4199a7a2fe259702084b&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ loading: false });
    this.setState({ articles: parsedData.articles })

  }
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=315f63f7526f4199a7a2fe259702084b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false
    })
  }
  handlePreviousClick = async () => {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=315f63f7526f4199a7a2fe259702084b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false
    })
  }
  render() {
    return (
      <div className='container my-4 md-4'>

        <h1 className='text-center my-4'>KnowNews-Top Headlines..</h1>
        <div className='container d-flex justify-content-between md-4 my-4'>
          <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        {this.state.loading && <Spinner />}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <div className='my-4'>
                <NewsItem title={element.title} description={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage} 
                newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></NewsItem>
              </div>
            </div>
          })}
        </div>
        <div className='container d-flex justify-content-between md-4 my-4'>
          <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News