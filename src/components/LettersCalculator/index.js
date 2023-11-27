import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    count: '',
  }

  onChange = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="card">
          <div className="text-container">
            <h1>Calculate the Letters you enter</h1>

            <div>
              <label htmlFor="letter">Enter the phrase</label>
              <br />
              <input
                className="typing"
                id="letter"
                placeholder="Enter the phrase"
                type="text"
                onChange={this.onChange}
              />
            </div>

            <br />
            <p type="button" className="button">
              No.of letters: {count.length}
            </p>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
