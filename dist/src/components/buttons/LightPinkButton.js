"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

require("../../index.css");

var _loading = _interopRequireDefault(require("../../assets/loading.svg"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n display: inline-block;  \n animation: ", " 2s  infinite linear;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n\t  transform: rotate(0deg);\n  }\n  to {\n\t  transform: rotate(360deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
  className: _propTypes.default.string,
  onClick: _propTypes.default.func,
  text: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  large: _propTypes.default.bool,
  long: _propTypes.default.bool,
  isLoading: _propTypes.default.bool
};
var rotate = (0, _styledComponents.keyframes)(_templateObject());

var ImageStyles = _styledComponents.default.img(_templateObject2(), rotate);

var LightPinkButton = function LightPinkButton(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      onClick = _ref.onClick,
      text = _ref.text,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      isLoading = _ref.isLoading,
      large = _ref.large,
      _long = _ref.long;

  if (isLoading) {
    return _react.default.createElement("button", {
      /* eslint-disable no-template-curly-in-string*/
      className: "".concat(className, " ").concat(_long ? 'bg-pinkLight text-white font-bold py-2 px-10 rounded-px hover:bg-white focus:outline-none  border-2 hover:border-pinkLight hover:text-pinkLight ${className}' : large ? 'bg-pinkLight text-white font-bold py-4 px-8 rounded-px hover:bg-white focus:outline-none  border-2 hover:border-pinkLight hover:text-pinkLight ${className}' : 'bg-pinkLight text-white font-bold py-2 px-8 rounded-px hover:bg-white focus:outline-none  border-2 hover:border-pinkLight hover:text-pinkLight '),
      onClick: onClick,
      disabled: disabled
    }, _react.default.createElement(ImageStyles, {
      src: _loading.default,
      alt: "loading..."
    }));
  } else {
    return _react.default.createElement("button", {
      className: "".concat(className, " ").concat(_long ? 'bg-pinkLight text-blueDarkest font-bold py-2 px-10 rounded-px hover:bg-white focus:outline-none  border-2 border-pinkLight  hover:border hover:border-pinkLight hover:text-pinkLight ${className}' : large ? 'bg-pinkLight text-blueDarkest font-bold py-4 px-8 rounded-px hover:bg-white focus:outline-none  border-2 border-pinkLight  hover:border hover:border-pinkLighthover:text-blueDarkest ${className}' : 'bg-pinkLight text-blueDarkest font-bold py-2 px-8 rounded-px hover:bg-white focus:outline-none border-2 border-pinkLight  hover:border hover:border-pinkLight hover:text-blueDarkest '),
      onClick: onClick,
      disabled: disabled
    }, text);
  }
};

LightPinkButton.propTypes = propTypes;
var _default = LightPinkButton;
exports.default = _default;

//# sourceMappingURL=LightPinkButton.js.map