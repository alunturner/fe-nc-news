import React from "react";
import * as api from "../../api";

class AddCommentForm extends React.Component {
  state = { body: "", article_id: "", username: "" };

  componentDidMount() {
    this.setState({
      article_id: this.props.article_id,
      username: this.props.username,
    });
  }

  submitComment = (e) => {
    e.preventDefault();
    if (this.state.body.length === 0) {
      alert("please enter text into the comment box");
    } else {
      api.postCommentByArticleId({
        body: this.state.body,
        article_id: this.state.article_id,
        username: this.state.username,
      });
    }
  };

  changeCommentText = (e) => {
    this.setState({ body: e.target.value });
  };

  render() {
    return (
      <div>
        <form action="">
          <textarea
            onChange={this.changeCommentText}
            name=""
            id=""
            cols="30"
            rows="10"
            value={this.state.body}
            placeholder={`Commenting as ${this.props.username}`}
          ></textarea>
          <button onClick={this.submitComment}>SUBMIT MY COMMENT</button>
        </form>
      </div>
    );
  }
}

export default AddCommentForm;
