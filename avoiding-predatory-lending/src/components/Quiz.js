import React, { useState } from 'react'

import * as Mui from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { Box } from '@material-ui/core';

function ShowQuiz() {
  const questionBank =   [
    {
      questionText: 'A fixed rate is an interest rate that:',
      questionSolution: 'Solution: Does not change for the life of the loan | Explaination: A fixed rate is a type of interest rate that will not change during the life of the loan. Unless, it is explicitly stated on the loan agreement, for a portion of the loan term.',
      questionChoices: [
        { answerText: 'Changes monthly', correct: false},
        { answerText: 'Changes yearly', correct: false},
        { answerText: 'Changes once every three years', correct: false},
        { answerText: 'Does not change for the life of the loan', correct: true},
      ],
    },
    {
      questionText: 'Payday loans usually have reasonable interest rates around 20%',
      questionSolution: 'Solution: False | Explaination: Payday loans have a much higher interest rate value than you would think. The average interest rate can be well up to 400%',
      questionChoices: [
        { answerText: 'True', correct: false},
        { answerText: 'False', correct: true},
      ],
    },
    {
      questionText: 'Which of the following loans does not have a fixed rate?',
      questionSolution: 'Solution: Home Equity Line of Credit | Explaination: HELOC are credit lines that allow a borrower to take as much as needed up to a certain limit.',
      questionChoices: [
        { answerText: 'Car loans', correct: false},
        { answerText: 'Unsecured loans', correct: false},
        { answerText: 'Boat loan', correct: false},
        { answerText: 'Home Equity Line of Credit (HELOC)', correct: true}
      ]
    },
    {
      questionText: 'Because payday loans have such high interest rates, they are typically used by high-income households',
      questionSolution: 'Solution: False | Explaination: Payday loans are actually not used by high-income households as they qualify for much more realistic loans.',
      questionChoices: [
        { answerText: 'True', correct: false},
        { answerText: 'False', correct: true},
      ]
    },
  ];

  // Helpful variables for conditions
  const [currentQuestion, changeCurrentQuestion] = useState(0);
  const [showScore, changeShowScore] = useState(false);
  const [score, changeScore] = useState(0);
  const [value, setValue] = React.useState('default');
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  let [isDisabled, setButtonDisable] = React.useState(false)
  let [showSolutionMessage, setSolutionMessage] = React.useState(false)
  let [showIcon, setIcon] = React.useState(false)

  var checkAnswer = (ans) => {
    /*
    * Iterate through the questionBank and find the current question & the selection the user made
    * Check if that answer is correct (bool == true) 
    */
    for (var i = 0; i < questionBank[currentQuestion].questionChoices.length; i++) {
      if (questionBank[currentQuestion].questionChoices[i].answerText == ans) {
          if (questionBank[currentQuestion].questionChoices[i].correct) {
            return true;
          }
      } 
    }
    return false;
  }

  const submitAnswer = (correct) => {
    if (checkAnswer(correct)) {
      changeScore(score + 1);
    }
    else {
      // console.log(showSolutionMsg);
      //questionBank[currentQuestion].questionSolution;
    }
  }

  const showNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    
    if (nextQuestion < questionBank.length) {
      changeCurrentQuestion(nextQuestion);
    } else {
      changeShowScore(true);
    }
  };

  function retakeQuiz() {
    window.location.reload(false);
  }

  return (
    <Mui.Box>
      {showScore ? (
        <Mui.Box>
          <Mui.LinearProgress variant="determinate" value={100} thickness={5} size={100} />
          <Mui.Paper square = "true">
            You scored {score} out of {questionBank.length}
          </Mui.Paper>
          <Mui.Paper square = "true">
            {((score/questionBank.length) * 100).toFixed(2)}%
          </Mui.Paper>
          {
            ((score/questionBank.length) * 100).toFixed(2) == 100 ? (<Mui.Paper square = "true"> Great job! You know the material. </Mui.Paper>) : ""
          }
           {
            ((score/questionBank.length) * 100).toFixed(2) > 25 && ((score/questionBank.length) * 100).toFixed(2) < 100  ? (<Mui.Paper square = "true"> You may need to brush up on the material. </Mui.Paper>) : ""
          }
          {
            ((score/questionBank.length) * 100).toFixed(2) <= 25 ? (<Mui.Paper square = "true"> You will need to study the material. </Mui.Paper>) : ""
          }
          <Mui.Grid item xs = {12}>
          <Mui.Button variant="outlined" onClick={retakeQuiz}>Retake quiz</Mui.Button>
          </Mui.Grid>
        </Mui.Box>
      ) : (
    <Mui.Box>
    <Mui.Grid container spacing={2}>
    <Mui.Grid item xs={12}>
      <Mui.LinearProgress variant="determinate" value={(currentQuestion + 1)/questionBank.length * 100} thickness={5} size={100} />
    </Mui.Grid>
    <Mui.Grid item xs={12}>
      <Mui.Typography variant="h5">
      Question {currentQuestion + 1}/{questionBank.length}
      </Mui.Typography>
    </Mui.Grid>
<Mui.Grid item xs={12}>
     <Mui.Typography>
      {questionBank[currentQuestion].questionText}
      </Mui.Typography>
    </Mui.Grid>
<Mui.Grid item xs={12}>
      <Mui.Paper>
      <Mui.Box p = {2}>
  <FormControl component="fieldset">
  <FormLabel component="legend">Select your answer</FormLabel>
  <RadioGroup row aria-label="answer" name="radioButtons" onChange = {handleChange} value = {value} >
  {questionBank[currentQuestion].questionChoices.map((questionChoice) => (
    <Mui.Grid container spacing={2}>
    <Mui.Grid item sm={12} md={4}>
    <Mui.Grid container justify="flex-end">
    {  showIcon && questionChoice.correct ? <Box sx={{ color: 'green' }}>✔</Box> : ""}
    </Mui.Grid>
    </Mui.Grid>
    <Mui.Grid item sm={12} md={4}>
   <Mui.Grid container justify="flex-start">
     <FormControlLabel value={questionChoice.answerText} control={<Radio color="primary" />} label={questionChoice.answerText} />
    </Mui.Grid>
    </Mui.Grid>
    </Mui.Grid>
  ))}
    <Mui.Grid item xs = {12}>
      <Mui.Button variant="outlined" onClick={() => {submitAnswer(value); setButtonDisable(true); setSolutionMessage(true); setIcon(true); }} disabled={isDisabled}> Submit </Mui.Button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <Mui.Button variant="outlined" onClick={() => {showNextQuestion(); setButtonDisable(false); setSolutionMessage(false); setIcon(false); }}> Next Question </Mui.Button>
      </Mui.Grid>
    </RadioGroup>
</FormControl>
<Mui.Grid> 
  {  showSolutionMessage ? questionBank[currentQuestion].questionSolution : ""}
</Mui.Grid>
</Mui.Box>
</Mui.Paper>
    </Mui.Grid>
  </Mui.Grid>
  </Mui.Box>
  )}
  </Mui.Box>
  );
}

class Quiz extends React.Component {
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
                  Quiz
                </Mui.Typography>
                <Mui.Typography variant="h5">
                  This short quiz will gauge your level of knowledge on loans and determine if you should consider reading some material to help improve your understanding.
                </Mui.Typography>
              </Mui.Grid>
              <Mui.Grid item xs={12}>
                <ShowQuiz />
              </Mui.Grid>
            </Mui.Grid>
          </Mui.Box>
        </Mui.Paper>
      </Mui.Box>
    );
  }
}

export default Quiz;