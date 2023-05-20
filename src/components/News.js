import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      page: 1,
      totalResults: 0,
      loading: false,
      capitalizedTitle:
        this.props.category[0].toUpperCase() + this.props.category.slice(1),
    };
    document.title =
      this.props.category === "general"
        ? `Press Daily - Top Headlines`
        : `Press Daily - ${this.state.capitalizedTitle}`;
  }
  static defaultProps = {
    category: "general",
  };
  static propTypes = {
    category: PropTypes.string,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=01fc80553767463ba8b12cbc72e1a83c&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=01fc80553767463ba8b12cbc72e1a83c&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      article: this.state.article.concat(parsedData.articles),
    });
  };

  // Functions to handle click events when using buttons to navigate through pages

  // handlePrevClick = async () => {
  //   window.scrollTo(0, 0);
  //   this.setState({ loading: true });
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //     this.props.category
  //   }&apiKey=01fc80553767463ba8b12cbc72e1a83c&page=${
  //     this.state.page - 1
  //   }&pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({ loading: false });
  //   this.setState({
  //     page: this.state.page - 1,
  //     article: parsedData.articles,
  //   });
  // };

  // handleNextClick = async () => {
  // window.scrollTo(0, 0);
  // this.setState({ loading: true });
  // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //   this.props.category
  // }&apiKey=01fc80553767463ba8b12cbc72e1a83c&page=${
  //   this.state.page + 1
  // }&pageSize=${this.props.pageSize}`;
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // this.setState({ loading: false });
  // this.setState({
  //   page: this.state.page + 1,
  //   article: parsedData.articles,
  // });
  // };

  // Functions to handle click events when using buttons to navigate through pages

  render() {
    return (
      <div className="container my-4" style={{ margin: "auto" }}>
        {this.state.loading && <Loading />}
        <h3 style={{ fontFamily: "cursive", fontSize: "2.7vw",marginTop : "8vh" }}>
          Top Headlines from{" "}
          {this.props.category === "general"
            ? "Press Daily"
            : this.state.capitalizedTitle}{" "}
        </h3>
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={
            this.state.page <=
            Math.ceil(this.state.totalResults / this.props.pageSize)
          }
          loader=<Loading />
        >
          <div className="container">
            <div className="row">
              {this.state.article.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={
                        element.title === null
                          ? "Top News Headlines Today"
                          : element.title.slice(0, 125)
                      }
                      imageUrl={
                        element.urlToImage === null
                          ? "https://www.gktoday.in/wp-content/uploads/2021/04/todays-headlines-1.png.webp"
                          : element.urlToImage
                      }
                      newsUrl={element.url}
                      author={
                        element.author === null ? "Unknown" : element.author
                      }
                      publishDate={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <button
          disabled={
            this.state.page >=
            Math.ceil(this.state.totalResults / this.props.pageSize)
          }
          type="button"
          className="btn btn-dark"
          onClick={this.handleNextClick}
          style={{ float: "right", marginBottom: "10vh" }}
        >
          Next &rarr;
        </button>
        <button
          disabled={this.state.page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={this.handlePrevClick}
          style={{ float: "left", marginBottom: "10vh" }}
        >
          &larr; Previous
        </button> */}
      </div>
    );
  }
}
