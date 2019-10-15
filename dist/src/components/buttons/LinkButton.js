"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

require("../../index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n:after{\n    border-radius: 1em;\n    border-top: .1em solid #ED0677;\n    content: \"\";\n    position: absolute;\n    right: 100%;\n    bottom: .14em;\n    left:0;\n    transition: right .4s cubic-bezier(0,.5,0,1);\n   \n}\n\n:hover:after{\n    right:0;\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LinkStyles = _styledComponents.default.a(_templateObject());

var LinkButton = function LinkButton(_ref) {
  var text = _ref.text,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["text", "className"]);

  return _react.default.createElement(LinkStyles, _extends({}, props, {
    className: "".concat(className, " text-pinkDarkest relative font-medium")
  }), text);
};

var propTypes = {
  className: _propTypes.default.string,
  text: _propTypes.default.string
};
LinkButton.propTypes = propTypes;
var _default = LinkButton;
exports.default = _default;

//# sourceMappingURL=LinkButton.js.map