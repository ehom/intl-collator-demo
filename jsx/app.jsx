const APP_NAME = "Intl.Collator Demo";

document.title = APP_NAME;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      language: this.props.languages[0],
      result: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(text, language) {
    console.debug("App: handle Submit", text, language);

    const result = text
      .split("\n")
      .sort(Intl.Collator(language).compare)
      .join("\n");

    this.setState({
      input: text,
      language: language,
      result: result
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron pt-4 pb-2">
          <Banner text="Intl.Collator demo" />
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="container border border-light round pt-3 pb-3">
              <div className="mb-2">Input:</div>
              <InputForm
                languages={this.props.languages}
                onSubmit={this.handleSubmit}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="container border border-light round pt-3 pb-3">
              <div className="mb-2">Output:</div>
              <OutputForm text={this.state.result} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const languages = {
  "en-US": "English",
  fr: "French",
  de: "German",
  "zh-CN": "Chinese",
  "ja-JP": "Japanese",
  "ko-KR": "Korean",
  "pl-PL": "Polish",
  es: "Spanish",
  "sv-SE": "Swedish",
  "tr-TR": "Turkish"
};

ReactDOM.render(<App languages={languages} />, document.getElementById("root"));

