const APP_NAME = "Intl.Collator Demo";

document.title = APP_NAME;

const App = () => {
  // TODO: run locales through Intl.Collator.getSupportedLocales()

  const locales = ["en-US", "fr", "de", "it-IT", "zh-CN", "ja-JP", "es", "pl-PL", "tr-TR"];
  const processText = (locale, text) => {
    /* console.debug("processText:", locale, text); */
    const result = text.split("\n").sort(Intl.Collator(locale).compare);
    /* console.debug("result:", result) */
    document.getElementById("results").value = result.join("\n");
  };

  return (
    <React.Fragment>
      <div className="jumbotron pt-4 pb-2">
        <Banner text="Intl.Collator demo" />
      </div>
      <div className="container border border-light rounded pt-3 pb-2 mb-3">
        <InputForm id="textInput" locales={locales} onButtonClick={processText} />
      </div>
      <div className="container border border-light rounded pt-3 pb-4">
        <div className="mb-2">Output:</div>
        <OutputForm id="results" />
      </div>
    </React.Fragment>
  );
};

const Banner = ({text}) => {
  return <h4>{text}</h4>;
};

const LocaleSelector = ({ id, locales }) => {
  const options = locales.map((locale) => {
    return <option>{locale}</option>;
  });
  return (
    <select id={id} className="form-control">
      {options}
    </select>
  );
};

const InputForm = ({ id, locales, onButtonClick }) => {
  // todo: add human-friendly language names to the selector
  const handleClick = () => {
    // console.debug("click");
    const content = document.getElementById("textInput").value;
    const locale = document.getElementById("localeSelector").value;

    onButtonClick(locale, content);
  };

  return (
    <div className="pb-1">
      <div className="mb-2">
        <textarea
          className="form-control"
          id={id}
          rows="6"
          placeholder="Enter a text item on each line, &#13;&#10;specify a language and then click the Sort button"
        />
      </div>
      <div className="row">
        <div className="col-sm-4 mb-2">
          <LocaleSelector id="localeSelector" locales={locales} />
        </div>
        <div className="col-sm-8">
          <button type="button" onClick={handleClick}>
            Sort
          </button>
        </div>
      </div>
    </div>
  );
};

const OutputForm = ({ id }) => {
  return <textarea id={id} className="form-control" rows="6" readOnly />;
};

ReactDOM.render(<App />, document.getElementById("root"));

