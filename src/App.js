import React from "react"
import validator from "validator"

class App extends React.Component {
  constructor(props) {
    super(props)
    this._name = React.createRef()
    this._email = React.createRef()
    this._phone = React.createRef()
    this._blog = React.createRef()
  }

  state = {
    completeORnot: "Form is Incomplete!",
  }

  render() {
    var formSubmmit = () => {
      if (
        this._name.current.value !== "" &&
        validator.isEmail(this._email.current.value) &&
        validator.isMobilePhone(this._phone.current.value) &&
        validator.isURL(this._blog.current.value)
      ) {
        this.setState({
          completeORnot: "Form is Complete!",
        })
      } else {
        this.setState({
          completeORnot: "Form is Incomplete!",
        })
      }
    }

    return (
      <div className="App">
        <div className="appContainer">
          {/* //!HEADING */}

          <div className="head">Form Validation</div>

          {/* //!FORM */}

          <form
            onSubmit={(x) => {
              x.preventDefault()
              formSubmmit()
            }}
          >
            {/* //@NAME */}

            <div className="inputBlock">
              <label>Name :</label>
              <input placeholder="Name" type="text" ref={this._name} />
            </div>

            {/* //@EMAIL*/}

            <div className="inputBlock">
              <label>Email :</label>
              <input placeholder="E-Mail" ref={this._email} type="text" />
            </div>

            {/* //@Phone*/}

            <div className="inputBlock">
              <label>Phone :</label>
              <input placeholder="Phone" ref={this._phone} type="text" />
            </div>

            {/* //@Blog*/}

            <div className="inputBlock">
              <label>Blog URL :</label>
              <input placeholder="URL" ref={this._blog} type="text" />
            </div>

            <button className="click">CLICK ME</button>
          </form>

          <div className="result">{this.state.completeORnot}</div>
        </div>
      </div>
    )
  }
}

export default App









