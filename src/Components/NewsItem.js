import React, { Component } from "react";

export default class NewsItem extends Component {
    
  render() {
    let {title, description, imgUrl, newsUrl, author, time, source} = this.props;
    return (
      <div className="my-3" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div className="card" style={{width: "100%"}}>
        {source && <span className="position-absolute top-0 translate-middle badge rounded-pill bg-warning" style={{left: "90%", color: "black", zIndex: "1"}}>
            {source}
        </span>}
          <img src={imgUrl} style={{height: "220px"}} className="card-img-top" alt="image not found!" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text" style={{fontSize: "15px", color: "#7C7C7D"}}>
              {description}
            </p>
            <p className="card-text"><small className="text-body-secondary">By <strong>{author ? author : "Unknown"}</strong> , Time: {new Date(time).toUTCString()}</small></p>
            <a href={newsUrl} className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
