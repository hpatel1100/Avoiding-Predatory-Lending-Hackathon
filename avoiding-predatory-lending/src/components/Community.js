import React from "react";
import * as Mui from "@material-ui/core";
import { Route } from "react-router";
import CommunityForm from "./CommunityForm";

class Community extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Mui.Box>
          <Mui.Paper elevation={24} square>
            <Mui.Box p={2}>
              <Mui.Grid container spacing={2}>
                <Mui.Grid item xs={12}>
                  <Mui.Typography variant="h3">Ask The Community</Mui.Typography>
                  <CommunityForm />
                </Mui.Grid>
              </Mui.Grid>
            </Mui.Box>
          </Mui.Paper>
        </Mui.Box>
      </>
    );
  }
}

export default Community;
