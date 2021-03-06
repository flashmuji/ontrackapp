import React, { Component } from "react";
import Table from "./table";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      id: 1,
      currentPage: 1,
      pageSize: 10
    };
  }

  handlePageChange = page => {
    this.setState({ id: page, currentPage: page });
    this.props.history.push("/" + page);
  };

  fetchData = () => {
    const options = {
      page: this.state.currentPage,
      itemsPerPage: 100
    };

    fetch("http://nyx.vima.ekt.gr:3000/api/books", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(options)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log(data);
        this.setState({ books: data.books });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    const id = Number(this.props.match.params.page);
    if (id) {
      this.setState({ id, currentPage: id });
    }
    this.fetchData();
  }
  render() {
    const { pageSize, currentPage, books } = this.state;
    const booksArr = paginate(books, currentPage, pageSize);

    return (
      <React.Fragment>
        <Table data={booksArr} />
        <Pagination
          itemsCount={books.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Home;
