"use strict";
/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var gatsby_1 = require("gatsby");
var gatsby_image_1 = __importDefault(require("gatsby-image"));
var Bio = function () {
    var _a, _b, _c, _d;
    var data = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query BioQuery {\n      avatar: file(absolutePath: { regex: \"/profile-pic.jpg/\" }) {\n        childImageSharp {\n          fixed(width: 50, height: 50, quality: 95) {\n            ...GatsbyImageSharpFixed\n          }\n        }\n      }\n      site {\n        siteMetadata {\n          author {\n            name\n            summary\n          }\n          social {\n            twitter\n          }\n        }\n      }\n    }\n  "], ["\n    query BioQuery {\n      avatar: file(absolutePath: { regex: \"/profile-pic.jpg/\" }) {\n        childImageSharp {\n          fixed(width: 50, height: 50, quality: 95) {\n            ...GatsbyImageSharpFixed\n          }\n        }\n      }\n      site {\n        siteMetadata {\n          author {\n            name\n            summary\n          }\n          social {\n            twitter\n          }\n        }\n      }\n    }\n  "]))));
    // Set these values by editing "siteMetadata" in gatsby-config.js
    var author = (_a = data.site.siteMetadata) === null || _a === void 0 ? void 0 : _a.author;
    var social = (_b = data.site.siteMetadata) === null || _b === void 0 ? void 0 : _b.social;
    var avatar = (_d = (_c = data === null || data === void 0 ? void 0 : data.avatar) === null || _c === void 0 ? void 0 : _c.childImageSharp) === null || _d === void 0 ? void 0 : _d.fixed;
    return (react_1.default.createElement("div", { className: 'bio' },
        avatar && (react_1.default.createElement(gatsby_image_1.default, { fixed: avatar, alt: (author === null || author === void 0 ? void 0 : author.name) || "", className: 'bio-avatar', imgStyle: {
                borderRadius: "50%",
            } })),
        (author === null || author === void 0 ? void 0 : author.name) && (react_1.default.createElement("p", null,
            "Written by ",
            react_1.default.createElement("strong", null, author.name),
            " ",
            (author === null || author === void 0 ? void 0 : author.summary) || null, " ",
            react_1.default.createElement("a", { href: "https://twitter.com/" + ((social === null || social === void 0 ? void 0 : social.twitter) || "") }, "You should follow them on Twitter")))));
};
exports.default = Bio;
var templateObject_1;
