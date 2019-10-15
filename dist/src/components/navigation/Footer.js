"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BodyText = _interopRequireDefault(require("../typography/BodyText"));

var _HeadingFive = _interopRequireDefault(require("../typography/HeadingFive"));

var _CaptionText = _interopRequireDefault(require("../typography/CaptionText"));

require("../../index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
  var className = _ref.className;
  return _react.default.createElement("footer", {
    className: "".concat(className, " w-full fixed-bottom bottom-0 left-0  absolute bg-blueDarkest border-bottom")
  }, _react.default.createElement("div", {
    className: "flex x:flex-row s:flex-col md:flex-row p-5"
  }, _react.default.createElement("div", {
    className: "flex flex-col"
  }, _react.default.createElement(_HeadingFive.default, {
    text: "Get to know us",
    className: "text-white text-justify"
  }), _react.default.createElement(_BodyText.default, {
    className: "text-white font-thin",
    text: "Blog"
  }), _react.default.createElement(_BodyText.default, {
    className: "text-white font-thin",
    text: "Careers"
  }), _react.default.createElement(_BodyText.default, {
    className: "text-white font-thin",
    text: "About Pimp My Book"
  })), _react.default.createElement("div", {
    className: "flex flex-col x:ml-32 md:ml-16 s:mt-5 md:mt-0"
  }, _react.default.createElement(_HeadingFive.default, {
    text: "Make money with us",
    className: "text-white text-sm"
  }), _react.default.createElement(_BodyText.default, {
    className: "text-white font-thin",
    text: "Sell on PMB Plus"
  }), _react.default.createElement(_BodyText.default, {
    className: "text-white font-thin",
    text: "Be a vendor on PMB Plus"
  })), _react.default.createElement("div", {
    className: "flex flex-col x:ml-32 md:ml-16 s:mt-5 md:mt-0"
  }, _react.default.createElement(_HeadingFive.default, {
    text: "We Can Help You",
    className: "text-white text-sm"
  }), _react.default.createElement(_BodyText.default, {
    className: "text-white font-thin",
    text: "Your orders"
  }), _react.default.createElement(_BodyText.default, {
    className: "text-white font-thin",
    text: "Shipping Policy"
  }), _react.default.createElement(_BodyText.default, {
    className: "text-white font-thin",
    text: "Returns & Refunds"
  }), _react.default.createElement(_BodyText.default, {
    className: "text-white font-thin",
    text: "Help"
  })), _react.default.createElement("div", {
    className: "flex flex-col x:ml-32 md:ml-16 s:mt-5 md:mt-0"
  }, _react.default.createElement("img", {
    src: "https://pmb-plus-assets.s3.amazonaws.com/pmb_plus_logo.svg",
    alt: "pmb plus logo"
  }), _react.default.createElement("div", {
    className: "flex flex-row mt-3 ml-5 p-3"
  }, _react.default.createElement("img", {
    className: "p-2",
    src: "https://pmb-plus-assets.s3.amazonaws.com/instagram.svg",
    alt: "instagram logo"
  }), _react.default.createElement("img", {
    className: "pr-2",
    src: "https://pmb-plus-assets.s3.amazonaws.com/facebook.svg",
    alt: "facebook logo"
  }), _react.default.createElement("img", {
    src: "https://pmb-plus-assets.s3.amazonaws.com/twitter.svg",
    alt: "twitter logo"
  }))), _react.default.createElement("div", {
    className: "flex flex-col x:ml-32 md:ml-16 s:mt-5 md:mt-0"
  }, _react.default.createElement("div", {
    className: "flex flex-row"
  }, _react.default.createElement("img", {
    className: "pr-2",
    src: "https://pmb-plus-assets.s3.amazonaws.com/mastercard-2.svg",
    alt: "mastercard logo"
  }), _react.default.createElement("img", {
    src: "https://pmb-plus-assets.s3.amazonaws.com/visa.svg",
    alt: "visa logo"
  })), _react.default.createElement("div", {
    className: "flex flex-col"
  }, _react.default.createElement(_CaptionText.default, {
    className: "text-white",
    text: "Privacy Policy"
  }), _react.default.createElement(_CaptionText.default, {
    className: "text-white",
    text: "Terms and conditions"
  }), _react.default.createElement(_CaptionText.default, {
    className: "text-white",
    text: "\xA9 ".concat(new Date().getFullYear(), " Pimp My Book")
  })))));
};

var propTypes = {
  className: _propTypes.default.string
};
Footer.propTypes = propTypes;
var _default = Footer;
exports.default = _default;

//# sourceMappingURL=Footer.js.map