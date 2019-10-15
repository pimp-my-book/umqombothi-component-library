"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("../../index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NavigationBar = function NavigationBar(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      content = _ref.content;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  return _react.default.createElement("nav", {
    className: "border-top bg-blueDarkest flex items-center justify-between flex-wrap bg-green-darker p-6"
  }, _react.default.createElement("div", {
    className: "flex items-center flex-no-shrink text"
  }, _react.default.createElement("img", {
    src: "https://pmb-plus-assets.s3.amazonaws.com/pmb_plus_logo.svg",
    alt: "PMB +"
  })), children, _react.default.createElement("div", {
    className: "block "
  }, _react.default.createElement("span", {
    onClick: function onClick() {
      return setIsMenuOpen(!isMenuOpen);
    },
    className: "flex items-center px-3 py-2"
  }, _react.default.createElement("img", {
    src: "https://pmb-static-assests.s3.amazonaws.com/menu.svg",
    alt: "menu"
  }))), _react.default.createElement("div", {
    className: isMenuOpen ? 'block sm-600:block md:block sm-land:block' : 'hidden'
  }, content));
};

var propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.element,
  content: _propTypes.default.func
};
NavigationBar.propTypes = propTypes;
var _default = NavigationBar;
exports.default = _default;

//# sourceMappingURL=NavigationBar.js.map