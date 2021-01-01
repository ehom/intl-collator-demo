var APP_NAME = "Intl.Collator Demo";

document.title = APP_NAME;

var App = function App() {
  // TODO: run locales through Intl.Collator.getSupportedLocales()

  var locales = ["en-US", "fr", "de", "it-IT", "zh-CN", "ja-JP", "es", "pl-PL", "tr-TR"];
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
      { className: "container border border-light rounded pt-3 pb-2 mb-3" },
      React.createElement(InputForm, { id: "textInput", locales: locales, onButtonClick: processText })
    ),
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

var LocaleSelector = function LocaleSelector(_ref2) {
  var id = _ref2.id,
      locales = _ref2.locales;

  var options = locales.map(function (locale) {
    return React.createElement(
      "option",
      null,
      locale
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
      locales = _ref3.locales,
      onButtonClick = _ref3.onButtonClick;

  // todo: add human-friendly language names to the selector
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
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-sm-4 mb-2" },
        React.createElement(LocaleSelector, { id: "localeSelector", locales: locales })
      ),
      React.createElement(
        "div",
        { className: "col-sm-8" },
        React.createElement(
          "button",
          { type: "button", onClick: handleClick },
          "Sort"
        )
      )
    )
  );
};

var OutputForm = function OutputForm(_ref4) {
  var id = _ref4.id;

  return React.createElement("textarea", { id: id, className: "form-control", rows: "6", readOnly: true });
};

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));