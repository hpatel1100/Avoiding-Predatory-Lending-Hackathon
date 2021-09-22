import React from 'react'

import APL from './images/APL.png';

import * as Mui from '@material-ui/core';

import { Link } from 'react-router-dom';

function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Mui.Grid container>
      <Mui.Grid item xs={3} container alignItems="center" justify="center">
        <div value={value} onClick={handleChange}><Link to='/Main' style={{ textDecoration: 'none' }}><Mui.Paper> 
          {/* <img src={APL} alt="" /> */}
          <Mui.Box p={1}>
          🚫💰 Avoiding Predatory Lending 🚫💰
          </Mui.Box>
          </Mui.Paper></Link></div>
      </Mui.Grid>
      <Mui.Grid item xs={9}>
      <Mui.Box>
        <Mui.Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          textColor="primary"
          indicatorColor="primary"
        >
          {/* <Mui.Tab label="Main" component={Link} to="Main" /> */}
          <Mui.Tab label="Learning Resources" component={Link} to="LearningResources" />
          <Mui.Tab label="Calculator" component={Link} to="Calculator" />
          <Mui.Tab label="Quiz" component={Link} to="Quiz" />
          <Mui.Tab label="Ask The Community" component={Link} to="Community" />
          {/* <Mui.Tab label="About" component={Link} to="About"/> */}
        </Mui.Tabs>
      </Mui.Box>
      </Mui.Grid>
    </Mui.Grid>

    
  );
}

class NavBar extends React.Component {
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
        {/* <Mui.Paper  elevation={3} />
          <Mui.Button color="primary" variant="contained" component={Link} to="Main">Main Button</Mui.Button>
          <Mui.Button color="primary" variant="contained" component={Link} to="About">About Button</Mui.Button>
        <Mui.Paper /> */}
        
<ScrollableTabsButtonAuto />
      </Mui.Box>
    );
  }
}

export default NavBar;