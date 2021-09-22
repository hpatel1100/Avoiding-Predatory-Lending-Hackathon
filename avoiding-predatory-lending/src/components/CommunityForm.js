import React from "react";

class CommunityForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    //call api
    console.log("submitted");
  };
  render() {
    const {
      commentValue,
      handleCommentValue,
      enterCommentLine,
      submitCommentLine,
    } = this.props;
    const enableCommentButton = () => {
      return commentValue ? false : true;
    };
    const changeCommentButtonStyle = () => {
      return commentValue
        ? "comments-button-enabled"
        : "comments-button-disabled";
    };

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Name </label>
            <input id="username" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="userEmail">Email </label>
            <input id="userEmail" type="text" className="form-control" />
          </div>
          <div className="comments-box">
            <input
              onKeyPress={enterCommentLine}
              value={commentValue}
              id="comments-input"
              onChange={handleCommentValue}
              type="text"
              placeholder="Add message..."
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
export default CommunityForm;
