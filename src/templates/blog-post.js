"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
var React = __importStar(require("react"));
var gatsby_1 = require("gatsby");
var bio_1 = __importDefault(require("../components/bio"));
var layout_1 = __importDefault(require("../components/layout"));
var seo_1 = __importDefault(require("../components/seo"));
var BlogPostTemplate = function (_a) {
    var _b;
    var data = _a.data, pageContext = _a.pageContext, location = _a.location;
    var post = data.markdownRemark;
    var siteTitle = ((_b = data.site.siteMetadata) === null || _b === void 0 ? void 0 : _b.title) || "Title";
    var previous = pageContext.previous, next = pageContext.next;
    return (React.createElement(layout_1.default, { location: location, title: siteTitle },
        React.createElement(seo_1.default, { title: post.frontmatter.title, description: post.frontmatter.description || post.excerpt }),
        React.createElement("article", { className: "blog-post", itemScope: true, itemType: "http://schema.org/Article" },
            React.createElement("header", null,
                React.createElement("h1", { itemProp: "headline" }, post.frontmatter.title),
                React.createElement("p", null, post.frontmatter.date)),
            React.createElement("section", { dangerouslySetInnerHTML: { __html: post.html }, itemProp: "articleBody" }),
            React.createElement("hr", null),
            React.createElement("footer", null,
                React.createElement(bio_1.default, null))),
        React.createElement("nav", { className: "blog-post-nav" },
            React.createElement("ul", { style: {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    listStyle: "none",
                    padding: 0,
                } },
                React.createElement("li", null, previous && (React.createElement(gatsby_1.Link, { to: previous.fields.slug, rel: "prev" },
                    "\u2190 ",
                    previous.frontmatter.title))),
                React.createElement("li", null, next && (React.createElement(gatsby_1.Link, { to: next.fields.slug, rel: "next" },
                    next.frontmatter.title,
                    " \u2192")))))));
};
exports.default = BlogPostTemplate;
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query BlogPostBySlug($slug: String!) {\n    site {\n      siteMetadata {\n        title\n      }\n    }\n    markdownRemark(fields: { slug: { eq: $slug } }) {\n      id\n      excerpt(pruneLength: 160)\n      html\n      frontmatter {\n        title\n        date(formatString: \"MMMM DD, YYYY\")\n        description\n      }\n    }\n  }\n"], ["\n  query BlogPostBySlug($slug: String!) {\n    site {\n      siteMetadata {\n        title\n      }\n    }\n    markdownRemark(fields: { slug: { eq: $slug } }) {\n      id\n      excerpt(pruneLength: 160)\n      html\n      frontmatter {\n        title\n        date(formatString: \"MMMM DD, YYYY\")\n        description\n      }\n    }\n  }\n"])));
var templateObject_1;
