var APP_NAME = "Intl.Collator Demo";

document.title = APP_NAME;

var App = function App() {
  var languages = {
    "en-US": "English",
    "fr": "French",
    "de": "German",
    "zh-CN": "Chinese",
    "ja-JP": "Japanese",
    "es": "Spanish",
    "pl-PL": "Polish",
    "tr-TR": "Turkish"
  };

  var processText = function processText(locale, text) {
    /* console.debug("processText:", locale, text); */
    var result = text.split("\n").sort(Intl.Collator(locale).compare);
    /* console.debug("result:", result) */
    document.getElementById("results").value = result.join("\n");
  };

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "jumbotron pt-4 pb-2" },
      React.createElement(Banner, { text: "Intl.Collator demo" })
    ),
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-sm-6" },
        React.createElement(
          "div",
          { className: "container border border-light rounded pt-3 pb-2 mb-3" },
          React.createElement(
            "div",
            { className: "mb-2" },
            "Input:"
          ),
          React.createElement(InputForm, {
            id: "textInput",
            languages: languages,
            onButtonClick: processText
          })
        )
      ),
      React.createElement(
        "div",
        { className: "col-sm-6" },
        React.createElement(
          "div",
          { className: "container border border-light rounded pt-3 pb-4" },
          React.createElement(
            "div",
            { className: "mb-2" },
            "Output:"
          ),
          React.createElement(OutputForm, { id: "results" })
        )
      )
    )
  );
};

var Banner = function Banner(_ref) {
  var text = _ref.text;

  return React.createElement(
    "h4",
    null,
    text
  );
};

var LanguageSelector = function LanguageSelector(_ref2) {
  var id = _ref2.id,
      languages = _ref2.languages;

  var options = Object.keys(languages).map(function (key) {
    return React.createElement(
      "option",
      { value: key },
      languages[key],
      " (",
      key,
      ")"
    );
  });
  return React.createElement(
    "select",
    { id: id, className: "form-control" },
    options
  );
};

var InputForm = function InputForm(_ref3) {
  var id = _ref3.id,
      languages = _ref3.languages,
      onButtonClick = _ref3.onButtonClick;

  var handleClick = function handleClick() {
    // console.debug("click");
    var content = document.getElementById("textInput").value;
    var locale = document.getElementById("localeSelector").value;

    onButtonClick(locale, content);
  };

  return React.createElement(
    "div",
    { className: "pb-1" },
    React.createElement(
      "div",
      { className: "mb-2" },
      React.createElement("textarea", {
        className: "form-control",
        id: id,
        rows: "6",
        placeholder: "Enter a text item on each line, \r\nspecify a language and then click the Sort button"
      })
    ),
    React.createElement(
      "div",
      { className: "mb-2" },
      React.createElement(LanguageSelector, { id: "LanguageSelector", languages: languages })
    ),
    React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { type: "button", onClick: handleClick },
        "Sort"
      )
    )
  );
};

var OutputForm = function OutputForm(_ref4) {
  var id = _ref4.id;

  return React.createElement("textarea", { id: id, className: "form-control", rows: "6", readOnly: true });
};

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));