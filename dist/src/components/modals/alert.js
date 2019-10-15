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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Alert = function Alert(_ref) {
  var message = _ref.message,
      className = _ref.className,
      error = _ref.error,
      warning = _ref.warning,
      props = _objectWithoutProperties(_ref, ["message", "className", "error", "warning"]);

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      showAlert = _useState2[0],
      setAlert = _useState2[1];

  var hideAlert = function hideAlert() {
    setAlert(!showAlert);
  };

  if (showAlert) {
    return _react.default.createElement("div", _extends({}, props, {
      "aria-label": "Alert",
      "data-dismiss": "alert",
      className: "".concat(className, " p-2 w-350 h-10 rounded-px ").concat(error ? 'bg-red' : warning ? 'bg-orange' : 'bg-green', " flex flex-row relative")
    }), _react.default.createElement("div", {
      className: "mr-5"
    }, error ? _react.default.createElement("span", {
      role: "img",
      "aria-label": "error emoji"
    }, "\uD83D\uDEA8") : warning ? _react.default.createElement("span", {
      role: "img",
      "aria-label": "warning emoji"
    }, "\uD83D\uDEA7") : _react.default.createElement("span", {
      role: "img",
      "aria-label": "success emoji"
    }, "\uD83C\uDF89")), _react.default.createElement("p", {
      "aria-label": "alert message",
      className: "font-body"
    }, message), _react.default.createElement("span", {
      "aria-label": "close button",
      onClick: hideAlert,
      className: "right-0 top-0 absolute mr-2 cursor-pointer"
    }, "\xD7"));
  } else {
    return _react.default.createElement("div", null);
  }
};

var propTypes = {
  message: _propTypes.default.string,
  className: _propTypes.default.string,
  error: _propTypes.default.bool,
  warning: _propTypes.default.bool
};
Alert.propTypes = propTypes;
var _default = Alert;
exports.default = _default;

//# sourceMappingURL=alert.js.map