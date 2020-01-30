"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Square =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Square, _React$Component);

  function Square(props) {
    var _this;

    _classCallCheck(this, Square);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Square).call(this, props));
    _this.state = {
      value: null
    };
    return _this;
  }

  _createClass(Square, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return dom("button", {
        className: "square",
        onClick: function onClick() {
          return _this2.setState({
            value: 'X'
          });
        }
      }, this.state.value);
    }
  }]);

  return Square;
}(_react.default.Component);

var Board =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Board, _React$Component2);

  function Board(props) {
    var _this3;

    _classCallCheck(this, Board);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Board).call(this, props));
    _this3.state = {
      squares: Array(9).fill(null)
    };
    return _this3;
  }

  _createClass(Board, [{
    key: "renderSquare",
    value: function renderSquare(i) {
      var _this4 = this;

      return dom(Square, {
        value: this.state.squares[i],
        onClick: function onClick() {
          return _this4.handleClick(i);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var status = 'Next player: X';
      return dom("div", null, dom("div", {
        className: "status"
      }, status), dom("div", {
        className: "board-row"
      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), dom("div", {
        className: "board-row"
      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), dom("div", {
        className: "board-row"
      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));
    }
  }]);

  return Board;
}(_react.default.Component);

var Game =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Game, _React$Component3);

  function Game() {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, _getPrototypeOf(Game).apply(this, arguments));
  }

  _createClass(Game, [{
    key: "render",
    value: function render() {
      return dom("div", {
        className: "game"
      }, dom("div", {
        className: "game-board"
      }, dom(Board, null)), dom("div", {
        className: "game-info"
      }, dom("div", null), dom("ol", null)));
    }
  }]);

  return Game;
}(_react.default.Component); // ========================================


_reactDom.default.render(dom(Game, null), document.getElementById('root'));
//# sourceMappingURL=index.js.map