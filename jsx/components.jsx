class LanguageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    console.debug("handle lang select:", event.target.value);
    this.props.onLangSelect(event.target.value);
  }

  render() {
    const options = Object.keys(this.props.languages).map((key) => (
      <option value={key}>
        {" "}
        {this.props.languages[key]} ({key})
      </option>
    ));

    return (
      <select className="form-control" onChange={this.handleSelect}>
        {options}
      </select>
    );
  }
}

class InputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: "",
      language: "en-US"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
  }

  handleChange(event) {
    document.getElementById("InputForm-Submit").disabled =
      event.target.value <= 0;

    this.setState({
      textInput: event.target.value
    });
  }

  handleLanguage(language) {
    this.setState({
      language: language
    });
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.textInput, this.state.language);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-2">
          <textarea
            className="form-control"
            placeholder="Enter a text item on each line, &#13;&#10;specify a language and then click the Sort button"
            value={this.state.textInput}
            onChange={this.handleChange}
            rows="6"
          />
        </div>
        <div className="mb-2">
          <LanguageSelector
            languages={this.props.languages}
            onLangSelect={this.handleLanguage}
          />
        </div>
        <div>
          <button id="InputForm-Submit" type="submit" disabled>
            Sort
          </button>
        </div>
      </form>
    );
  }
}

const Banner = ({ text }) => <h4>{text}</h4>;

const OutputForm = ({ text }) => (
  <textarea value={text} className="form-control" rows="8" readOnly />
);
