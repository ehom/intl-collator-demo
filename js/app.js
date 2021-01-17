var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var APP_NAME = "Intl.Collator Demo";

document.title = APP_NAME;

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      input: "",
      language: _this.props.languages[0],
      result: ""
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "handleSubmit",
    value: function handleSubmit(text, language) {
      console.debug("App: handle Submit", text, language);

      var result = text.split("\n").sort(Intl.Collator(language).compare).join("\n");

      this.setState({
        input: text,
        language: language,
        result: result
      });
    }
  }, {
    key: "render",
    value: function render() {
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
              { className: "container border border-light round pt-3 pb-3" },
              React.createElement(
                "div",
                { className: "mb-2" },
                "Input:"
              ),
              React.createElement(InputForm, {
                languages: this.props.languages,
                onSubmit: this.handleSubmit
              })
            )
          ),
          React.createElement(
            "div",
            { className: "col-sm-6" },
            React.createElement(
              "div",
              { className: "container border border-light round pt-3 pb-3" },
              React.createElement(
                "div",
                { className: "mb-2" },
                "Output:"
              ),
              React.createElement(OutputForm, { text: this.state.result })
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

var languages = {
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

ReactDOM.render(React.createElement(App, { languages: languages }), document.getElementById("root"));