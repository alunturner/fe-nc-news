import React from "react";
import { Link } from "@reach/router";
import * as api from "../api";

class NavList extends React.Component {
  state = { topics: [], currentlySelected: "" };

  componentDidMount() {
    this.requestTopics();
  }

  requestTopics = () => {
    return api.getTopics().then((topics) => {
      this.setState({ topics, currentlySelected: "" });
    });
  };

  handleClick = (e) => {
    const currentlySelected = e.target.name;
    this.setState({ currentlySelected });
  };

  render() {
    const { topics, currentlySelected } = this.state;
    return (
      <ul className="nav__list">
        Topics
        {topics.map((topic) => {
          return (
            <li key={topic.slug} className="nav__element">
              <Link
                onClick={this.handleClick}
                to={`/${topic.slug}`}
                name={topic.slug}
                className={
                  topic.slug === currentlySelected ? "selected--nav" : "normal"
                }
              >
                {topic.slug}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NavList;
