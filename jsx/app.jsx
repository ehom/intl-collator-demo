const APP_NAME = "Intl.Collator Demo";

document.title = APP_NAME;

const App = () => {
  const languages = {
    "en-US": "English",
    "fr": "French",
    "de": "German",
    "zh-CN": "Chinese",
    "ja-JP": "Japanese",
    "es": "Spanish",
    "pl-PL": "Polish",
    "tr-TR": "Turkish"
  };

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
      <div className="row">
        <div className="col-sm-6">
          <div className="container border border-light rounded pt-3 pb-2 mb-3">
            <div className="mb-2">Input:</div>
            <InputForm
              id="textInput"
              languages={languages}
              onButtonClick={processText}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="container border border-light rounded pt-3 pb-4">
            <div className="mb-2">Output:</div>
            <OutputForm id="results" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const Banner = ({ text }) => {
  return <h4>{text}</h4>;
};

const LanguageSelector = ({ id, languages }) => {
  const options = Object.keys(languages).map((key) => {
    return (
      <option value={key}>
        {languages[key]} ({key})
      </option>
    );
  });
  return (
    <select id={id} className="form-control">
      {options}
    </select>
  );
};

const InputForm = ({ id, languages, onButtonClick }) => {
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
      <div className="mb-2">
        <LanguageSelector id="LanguageSelector" languages={languages} />
      </div>
      <div>
        <button type="button" onClick={handleClick}>
          Sort
        </button>
      </div>
    </div>
  );
};

const OutputForm = ({ id }) => {
  return <textarea id={id} className="form-control" rows="6" readOnly />;
};

ReactDOM.render(<App />, document.getElementById("root"));
