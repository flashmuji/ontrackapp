import React from "react";

const Table = props => {
  const { data } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Book Title</th>
          <th scope="col">Author</th>
          <th scope="col">Publication City</th>
          <th scope="col">Publication Country</th>
          <th scope="col">Publication Year</th>
          <th scope="col">Book Pages</th>
        </tr>
      </thead>
      <tbody>
        {data.map(book => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.book_title}</td>
            <td>{book.book_author}</td>
            <td>{book.book_publication_city}</td>
            <td>{book.book_publication_country}</td>
            <td>{book.book_publication_year}</td>
            <td>{book.book_pages}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
