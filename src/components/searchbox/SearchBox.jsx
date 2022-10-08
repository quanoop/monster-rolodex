import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className={this.props.className}
          type="search"
          placeholder="Search Monster"
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
