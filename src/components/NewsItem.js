import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title,imageUrl,newsUrl,author,publishDate} = this.props;
    return (
      <div className="card my-3">
        <img src={imageUrl} className="card-img-top" alt="..." style={{height : '42vh' }} />
        <div className="card-body" style={{height : '44vh',position : 'relative'}}>
          <h5 className="card-title">{title}</h5>
          {/* <p className="card-text">
            {description}
          </p> */}
          <a href={newsUrl} rel="noreferrer" className="btn bg-dark btn-sm btn-primary" style={{marginTop : '1vh', marginBottom : '1vh'}}>
            Read more
          </a>
          <p className="card-text" style={{position: 'absolute', bottom: 0, marginBottom : '10px'}}>By : {author} on <b>{publishDate}</b> <small className="text-muted"></small></p>
        </div>
      </div>
    );
  }
}
