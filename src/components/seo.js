"use strict";
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
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
var react_helmet_1 = require("react-helmet");
var gatsby_1 = require("gatsby");
var SEO = function (_a) {
    var _b, _c, _d;
    var _e = _a.description, description = _e === void 0 ? '' : _e, _f = _a.lang, lang = _f === void 0 ? '' : _f, _g = _a.meta, meta = _g === void 0 ? [] : _g, _h = _a.title, title = _h === void 0 ? '' : _h;
    var site = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      query {\n        site {\n          siteMetadata {\n            title\n            description\n            social {\n              twitter\n            }\n          }\n        }\n      }\n    "], ["\n      query {\n        site {\n          siteMetadata {\n            title\n            description\n            social {\n              twitter\n            }\n          }\n        }\n      }\n    "])))).site;
    var metaDescription = description || site.siteMetadata.description;
    var defaultTitle = (_b = site.siteMetadata) === null || _b === void 0 ? void 0 : _b.title;
    return (react_1.default.createElement(react_helmet_1.Helmet, { htmlAttributes: {
            lang: lang,
        }, title: title, titleTemplate: defaultTitle ? "%s | " + defaultTitle : undefined, meta: [
            {
                name: "description",
                content: metaDescription,
            },
            {
                property: "og:title",
                content: title,
            },
            {
                property: "og:description",
                content: metaDescription,
            },
            {
                property: "og:type",
                content: "website",
            },
            {
                name: "twitter:card",
                content: "summary",
            },
            {
                name: "twitter:creator",
                content: ((_d = (_c = site.siteMetadata) === null || _c === void 0 ? void 0 : _c.social) === null || _d === void 0 ? void 0 : _d.twitter) || "",
            },
            {
                name: "twitter:title",
                content: title,
            },
            {
                name: "twitter:description",
                content: metaDescription,
            },
        ].concat(meta) }));
};
exports.default = SEO;
var templateObject_1;
