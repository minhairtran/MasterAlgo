import React, { Component } from "react";
import FeedbackForm from "./FeedbackForm";

export default class Feedback extends Component {
  styles = {
    top: 600,
    height: 45,
    width: 55
  };
  render() {
    return (
      <>
        <div
          className="clearfix float-left bg-warning ml-3 pl-1 rounded fixed-bottom"
          style={this.styles}
          type="button"
          data-toggle="modal"
          data-target="#feedback"
        >
          <svg
            className="bi bi-card-text"
            width="3em"
            height="3em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M3 5.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3 8a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8zm0 2.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <FeedbackForm
        />
      </>
    );
  }
}
