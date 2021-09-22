import React from 'react'

import * as Mui from '@material-ui/core';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loan: 0,
      interestRate: 0,
      time: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    var time = Number(this.state.time), loan = Number(this.state.loan), rate = Number(this.state.interestRate);
    var financeCharge = (rate/(100*365))*time*loan;
    // var Apr = ((financeCharge / loan) * 365) / (time * 100);
    // var percent = ((time / Apr) / 100) + 1;
    var total = financeCharge + loan;
     
    return (
      <Mui.Box>
        <Mui.Paper elevation={24} square>
          <Mui.Box p={2}>
            <Mui.Grid container spacing={2}>
              <Mui.Grid item xs={12}>
                <Mui.Typography variant="h3">
                  Payday Loan Calculator
                </Mui.Typography>
              </Mui.Grid>
              <Mui.Grid item xs={12}>
                <Mui.Typography variant="body1">
                  Find out the true cost
                </Mui.Typography>
              </Mui.Grid >
              
              <Mui.Grid item xs={12}>
                Loan ($):
              </Mui.Grid>
              
              <Mui.Grid item xs={12}>
                <Mui.TextField variant="outlined" name="loan" type="number" value={this.state.loan} onChange={this.handleInputChange} />
              </Mui.Grid>

              <Mui.Grid item xs={12}>
                Interest Rate %:
              </Mui.Grid>

              <Mui.Grid item xs={12}>
                <Mui.TextField variant="outlined" name="interestRate" type="number" value={this.state.interestRate} onChange={this.handleInputChange} />
              </Mui.Grid>
            
              <Mui.Grid item xs={12}>
                Time (Days):
              </Mui.Grid>

              <Mui.Grid item xs={12}>
                <Mui.TextField variant="outlined" name="time" type="number" value={this.state.time} onChange={this.handleInputChange} />
              </Mui.Grid>

              <Mui.Grid item xs={12}>
                <Mui.Typography variant="h3" >{"Total interest payment " + "$ " + financeCharge.toLocaleString('en-US',{ minimumFractionDigits: 2, style:'decimal', maximumFractionDigits: 2})}</Mui.Typography>
                
              </Mui.Grid>

              <Mui.Grid item xs={12}>
                <Mui.Typography variant="h3" >{"Amount of loan " + "$ " + loan.toLocaleString('en-US',{ minimumFractionDigits: 2, style:'decimal', maximumFractionDigits: 2})}</Mui.Typography>
                
              </Mui.Grid>
              <Mui.Grid item xs={12}>
                <Mui.Typography variant="h3" >{"Total payment " + "$ " + total.toLocaleString('en-US',{ minimumFractionDigits: 2, style:'decimal', maximumFractionDigits: 2})}</Mui.Typography>
                
              </Mui.Grid>

              <Mui.Grid item xs={12}>
                <Mui.Typography variant="h5">
                  Loans
                </Mui.Typography>
                <Mui.Divider variant="middle" />
                <Mui.Typography variant="body1">
                  Payday loans are loans that are highly risky, as they require no collateral to take out. Due to the short term nature
                  of payday loans they are usually followed by very high APR's (annual percentage rate).
                </Mui.Typography>
                <br />
                <Mui.Typography variant="h5">
                  Interest Rates
                </Mui.Typography>
                <Mui.Divider variant="middle" />
                <Mui.Typography variant="body1">
                  Payday loans can have APR's that go as high as 780% with the average loan running around 400%.
                  With rates that high, lenders can expect to pay well above the original loan by the end of their loan.
                </Mui.Typography>
                <br />
                <Mui.Typography variant="h5">
                  Time
                </Mui.Typography>
                <Mui.Divider variant="middle" />
                <Mui.Typography variant="body1">
                  Payday loans are usually repaied within two to four weeks from the date the loan was made. If a lender is not able
                  to pay back the loan on time more fees will be added on the loan forcing borrowers to re-borrow more money. This vicious
                  cycle would repeat until all debt is paid off.
                </Mui.Typography>

              </Mui.Grid >

            </Mui.Grid>
          </Mui.Box>
        </Mui.Paper>
      </Mui.Box>
    );


  }
}

export default Calculator;