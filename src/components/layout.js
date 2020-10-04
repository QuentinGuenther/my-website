"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var gatsby_1 = require("gatsby");
var Layout = function (_a) {
    var location = _a.location, title = _a.title, children = _a.children;
    var rootPath = __PATH_PREFIX__ + "/";
    var isRootPath = location.pathname === rootPath;
    var header;
    if (isRootPath) {
        header = (react_1.default.createElement("h1", { className: "main-heading" },
            react_1.default.createElement(gatsby_1.Link, { to: "/" }, title)));
    }
    else {
        header = (react_1.default.createElement(gatsby_1.Link, { className: "header-link-home", to: "/" }, title));
    }
    return (react_1.default.createElement("div", { className: "global-wrapper", "data-is-root-path": isRootPath },
        react_1.default.createElement("header", { className: "global-header" }, header),
        react_1.default.createElement("main", null, children),
        react_1.default.createElement("footer", null,
            "\u00A9 ",
            new Date().getFullYear(),
            ", Built with", " ",
            react_1.default.createElement("a", { href: "https://www.gatsbyjs.com" }, "Gatsby"))));
};
exports.default = Layout;
