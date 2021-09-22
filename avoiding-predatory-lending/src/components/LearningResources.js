import React from "react";


import * as Mui from "@material-ui/core";
import cfpbLogo from "./images/cfpbLogo.png";
import hhsLogo from "./images/hhsLogo.png";

class LearningResources extends React.Component {
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
      <Mui.Box>
        <Mui.Paper elevation={24} square>
          <Mui.Box p={2}>
            <Mui.Grid container spacing={2}>
              <Mui.Grid item xs={12}>
                <Mui.Typography variant="h3">Learning Resources</Mui.Typography>
              </Mui.Grid>
              <Mui.Grid item xs={12}>
                <Mui.Typography variant="body1">
                  What is predatory lending?
                </Mui.Typography>
                <Mui.Divider variant="middle" />
                <Mui.Typography variant="body1">
                  Predatory lending typically refers to lending practices that
                  impose unfair, deceptive, or abusive loan terms on borrowers.
                  In many cases, these loans carry high fees and interest rates,
                  strip the borrower of equity, or place a creditworthy borrower
                  in a lower credit-rated (and more expensive) loan, all to the
                  benefit of the lender. Predatory lenders often use aggressive
                  sales tactics and take advantage of borrowers' lack of
                  understanding of financial transactions. Through deceptive or
                  fraudulent actions and a lack of transparency, they entice,
                  induce, and assist a borrower to take out a loan that they
                  will not reasonably be able to pay back.
                </Mui.Typography>

                <Mui.Typography variant="body1">
                  <br />
                  Common Types
                </Mui.Typography>
                <Mui.Divider variant="middle" />

                <Mui.Typography variant="body1">
                  Subprime mortgages, payday loans, and auto-title loans are all
                  common forms of predatory lending. These schemes often consist
                  of high interest rates and even unresonable collateral such as
                  the vehicle's title and a spare set of keys. In fact, 1 in 5
                  borrowers have their car siezed because they're unable to
                  repay the loan.
                </Mui.Typography>

                <Mui.Typography variant="body1">
                  <br/>
                  How do I avoid these lending traps?
                </Mui.Typography>
                <Mui.Divider variant="middle" />

                <Mui.Typography variant="body1">
                  Educate yourself by looking out for the red flags mentioned
                  above. Always explore your options and compare offers from
                  multiple reputable lenders, including JP. Morgan. Consider
                  turning to family and friends, local religious establishment,
                  or public assistance programs.
                </Mui.Typography>

                <br />
                <br />
              </Mui.Grid>
              <Mui.Grid item xs={12}>
                <Mui.Typography variant="h5">
                  Additional Resources
                </Mui.Typography>
              </Mui.Grid>
              <Mui.Grid item xs={12}>
                <Mui.Typography variant="body1">
                  Find alternative resources that can direct you to find help
                  for your specific needs.
                </Mui.Typography>
              </Mui.Grid>
              <Mui.Grid item xs={12}>
                <Mui.Divider variant="middle" />
              </Mui.Grid>
              <Mui.Grid item xs={12}>
                <img src={cfpbLogo} width="250" />
              </Mui.Grid>
              <Mui.Grid item xs={12}>
                <Mui.Typography variant="body1">
                  <Mui.Button
                    variant="contained"
                    color="primary"
                    href="https://www.consumerfinance.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CONSUMER FINANCIAL PROTECTION BUREAU
                  </Mui.Button>
                </Mui.Typography>
              </Mui.Grid>
              <Mui.Grid item xs={12}>
                <Mui.Typography variant="body1">
                  This government bureau is a U.S. government agency that makes
                  sure banks, lenders, and other financial companies treat you
                  fairly.
                </Mui.Typography>
              </Mui.Grid>
              <Mui.Grid item xs={12}>
                <Mui.Divider variant="middle" />
              </Mui.Grid>
              <Mui.Grid item xs={12}>
                <img src={hhsLogo} width="250" />
              </Mui.Grid>
              <Mui.Grid item xs={12}>
                <Mui.Typography variant="body1">
                  <Mui.Button
                    variant="contained"
                    color="primary"
                    href="https://www.hhs.texas.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TEXAS HEALTH AND HUMAN SERVICES
                  </Mui.Button>
                </Mui.Typography>
              </Mui.Grid>
              <Mui.Grid item xs={12}>
                <Mui.Typography variant="body1">
                  Use this government resource to apply for benefits, find jobs,
                  or get help with benefits you qualify for.
                </Mui.Typography>
              </Mui.Grid>
            </Mui.Grid>
          </Mui.Box>
        </Mui.Paper>
      </Mui.Box>
    );
  }
}

export default LearningResources;
