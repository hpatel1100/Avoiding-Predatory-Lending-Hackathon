import React from 'react'

import * as Mui from '@material-ui/core';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Mui.Box>
        <Mui.Paper elevation={24} square>
          <Mui.Box p={2}>
            <Mui.Grid container spacing={2}>
              <Mui.Grid item xs={12}>
                <Mui.Typography variant="h3">
                  About
                </Mui.Typography>
              </Mui.Grid>
              <Mui.Grid item xs={12}>
                <Mui.Typography variant="body1">
                  About Content 1
                </Mui.Typography>
              </Mui.Grid>
            </Mui.Grid>
          </Mui.Box>
        </Mui.Paper>
      </Mui.Box>
    );
  }
}

export default About;