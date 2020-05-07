import React, { Component } from 'react'

class QuizQuestionButton extends Component {
    handleClick(){
    }
render() {
    return (
       <ul>
      <li>
      <button onClick={this.handleClick.bind(this)}>{this.props.button_text}
      </button>
      </li>
      </ul>
    )
  }
 
}

export default QuizQuestionButton
