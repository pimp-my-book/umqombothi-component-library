"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("../../index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeadingOne = function HeadingOne(_ref) {
  var text = _ref.text,
      className = _ref.className;
  return _react.default.createElement("p", {
    className: "text-5xl font-display ".concat(className)
  }, text);
};

var propTypes = {
  className: _propTypes.default.string,
  text: _propTypes.default.string
};
HeadingOne.propTypes = propTypes;
var _default = HeadingOne;
exports.default = _default;

//# sourceMappingURL=HeadingOne.js.map