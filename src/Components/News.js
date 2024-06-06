import React, { Component } from "react";
import NewsItem from "./NewsItem";
import LoadComponent from "./LoadComponent";
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 6,
    apiKey: "be8dcddfedd84a35b8799ee51c55cb2c"
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
    apiKey: PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      totalResults: 0,
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.pageSize}`;
    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        this.setState({ totalResults: data.totalResults, articles: data.articles, loading: false });
      } else {
        console.error("Failed to fetch data:", response.statusText);
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
  }

  handlePreviousClick = async () => {
    if (this.state.page <= 1) return;
    this.setState({
        loading: true
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        this.setState({
          articles: data.articles,
          loading: false,
          page: this.state.page - 1
        });
      } else {
        console.error("Failed to fetch data:", response.statusText);
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
  };
  handleNextClick = async () => {
    if ((this.state.page + 1) > Math.ceil(this.state.totalResults/this.props.pageSize)) return;
    this.setState({
        loading: true
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pagesize=${this.props.pageSize}`;
    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        this.setState({
          articles: data.articles,
          loading: false,
          page: this.state.page + 1,
        });
      } else {
        console.error("Failed to fetch data:", response.statusText);
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
  };

  handleFirstPage = async() => {
    if (this.state.page <= 1) return;
    this.setState({
        loading: true
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.pageSize}`;
    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        this.setState({
          articles: data.articles,
          loading: false,
          page: 1
        });
      } else {
        console.error("Failed to fetch data:", response.statusText);
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div className="container" style={{margin: "auto"}} id="#">
        <h1 className="text-center my-4">NewsMonkey - Top Headlines</h1>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark btn-sm mx-2"
            onClick={this.handlePreviousClick}
            disabled={this.state.page === 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark btn-sm mx-2"
            onClick={this.handleFirstPage}
            disabled={this.state.page === 1}
          >
            Return to First Page
          </button>
          <button
            type="button"
            className="btn btn-dark btn-sm mx-2"
            onClick={this.handleNextClick}
            disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults/this.props.pageSize)}
          >
            Next &rarr;
          </button>
        </div>
        {this.state.loading && <LoadComponent/>}
        <div className="container row dflex justify-content-around">
          {!this.state.loading && this.state.articles.map((element) => {
            if (
              element.url !== null &&
              element.url !== "https://removed.com" &&
              element.title !== null
            ) {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description ? element.description : ""}
                    newsUrl={element.url ? element.url : ""}
                    author={element.author}
                    time={element.publishedAt}
                    source={element.source.name}
                    imgUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://static.toiimg.com/thumb/imgsize-263683,msid-109671561,width-400,resizemode-4/109671561.jpg"
                    }
                  />
                </div>
              );
            } else return null;
          })}
        </div>
        <div className="container d-flex justify-content-between" style={{marginTop: "30px", marginBottom: "40px"}}>
          <button
            type="button"
            className="btn btn-dark btn-sm mx-2"
            onClick={this.handlePreviousClick}
            disabled={this.state.page === 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark btn-sm mx-2"
            onClick={this.handleFirstPage}
            disabled={this.state.page === 1}
          >
            Return to First Page
          </button>
          <button
            type="button"
            className="btn btn-dark btn-sm mx-2"
            onClick={this.handleNextClick}
            disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults/this.props.pageSize)}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
