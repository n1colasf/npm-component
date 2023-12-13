"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.sort.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Component = props => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center text-6xl mt-10"
  }, props.title), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center mt-10"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: " bg-black rounded-xl text-white p-3",
    onClick: props.onCompClick
  }, props.label)), /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: "table-auto mx-auto mt-12 bg-white shadow"
  }, /*#__PURE__*/_react.default.createElement("thead", {
    className: " bg-black text-white"
  }, /*#__PURE__*/_react.default.createElement("tr", null, Object.keys(props.tableHeader).map(key => /*#__PURE__*/_react.default.createElement("th", {
    key: key,
    className: "px-4 py-2"
  }, props.tableHeader[key])))), /*#__PURE__*/_react.default.createElement("tbody", null, props.tableContent.map((item, index) => /*#__PURE__*/_react.default.createElement("tr", {
    key: index,
    className: "bg-".concat(index % 2 === 0 ? "gray-100" : "gray-200")
  }, Object.keys(item).map(key => /*#__PURE__*/_react.default.createElement("td", {
    key: key,
    className: "border px-4 py-2"
  }, item[key]))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center text-4xl mt-10"
  }, "Select API Country"), /*#__PURE__*/_react.default.createElement("div", {
    className: "select-auto text-center mt-4"
  }, /*#__PURE__*/_react.default.createElement("select", {
    className: "select-auto"
  }, /*#__PURE__*/_react.default.createElement("option", null, "Select a country"), Object.keys(props.countrySelector).sort().map(key => /*#__PURE__*/_react.default.createElement("option", {
    key: key,
    value: key
  }, props.countrySelector[key]))))));
};
var _default = exports.default = Component;