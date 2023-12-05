import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="card">
        <img src={!imgUrl ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnews.gandi.net%2Fen%2F2021%2F12%2Fwhy-your-websites-url-is-important-for-seo%2F&psig=AOvVaw2SR2R3jHEyBMyR5lLTnHqK&ust=1699511858452000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCHx8Tms4IDFQAAAAAdAAAAABAD" : imgUrl} className="card-img-top" alt="" />
        <div className="card-body">
          <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className='card-text'><small className='text-muted'>By {author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} className="btn btn-dark">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem