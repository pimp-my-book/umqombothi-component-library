"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("../../index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BodyText = function BodyText(_ref) {
  var text = _ref.text,
      className = _ref.className,
      regular = _ref.regular;

  if (regular) {
    return _react.default.createElement("p", {
      className: "text-lg font-body ".concat(className)
    }, text);
  } else {
    return _react.default.createElement("p", {
      className: "text-sm font-body ".concat(className)
    }, text);
  }
};

var propTypes = {
  className: _propTypes.default.string,
  text: _propTypes.default.string
};
BodyText.propTypes = propTypes;
var _default = BodyText;
exports.default = _default;

//# sourceMappingURL=BodyText.js.map