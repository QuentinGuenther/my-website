"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
var react_1 = __importDefault(require("react"));
var gatsby_1 = require("gatsby");
var bio_1 = __importDefault(require("../components/bio"));
var layout_1 = __importDefault(require("../components/layout"));
var seo_1 = __importDefault(require("../components/seo"));
var BlogIndex = function (_a) {
    var _b;
    var data = _a.data, location = _a.location;
    var siteTitle = ((_b = data.site.siteMetadata) === null || _b === void 0 ? void 0 : _b.title) || "Title";
    var posts = data.allMarkdownRemark.nodes;
    if (posts.length === 0) {
        return (react_1.default.createElement(layout_1.default, { location: location, title: siteTitle },
            react_1.default.createElement(seo_1.default, { title: "All posts" }),
            react_1.default.createElement(bio_1.default, null),
            react_1.default.createElement("p", null, "No blog posts found. Add markdown posts to \"content/blog\" (or the directory you specified for the \"gatsby-source-filesystem\" plugin in gatsby-config.js).")));
    }
    return (react_1.default.createElement(layout_1.default, { location: location, title: siteTitle },
        react_1.default.createElement(seo_1.default, { title: "All posts" }),
        react_1.default.createElement(bio_1.default, null),
        react_1.default.createElement("ol", { style: { listStyle: "none" } }, posts.map(function (post) {
            var title = post.frontmatter.title || post.fields.slug;
            return (react_1.default.createElement("li", { key: post.fields.slug },
                react_1.default.createElement("article", { className: "post-list-item", itemScope: true, itemType: "http://schema.org/Article" },
                    react_1.default.createElement("header", null,
                        react_1.default.createElement("h2", null,
                            react_1.default.createElement(gatsby_1.Link, { to: post.fields.slug, itemProp: "url" },
                                react_1.default.createElement("span", { itemProp: "headline" }, title))),
                        react_1.default.createElement("small", null, post.frontmatter.date)),
                    react_1.default.createElement("section", null,
                        react_1.default.createElement("p", { dangerouslySetInnerHTML: {
                                __html: post.frontmatter.description || post.excerpt,
                            }, itemProp: "description" })))));
        }))));
};
exports.default = BlogIndex;
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query IndexPage {\n    site {\n      siteMetadata {\n        title\n      }\n    }\n    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {\n      nodes {\n        excerpt\n        fields {\n          slug\n        }\n        frontmatter {\n          date(formatString: \"MMMM DD, YYYY\")\n          title\n          description\n        }\n      }\n    }\n  }\n"], ["\n  query IndexPage {\n    site {\n      siteMetadata {\n        title\n      }\n    }\n    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {\n      nodes {\n        excerpt\n        fields {\n          slug\n        }\n        frontmatter {\n          date(formatString: \"MMMM DD, YYYY\")\n          title\n          description\n        }\n      }\n    }\n  }\n"])));
var templateObject_1;
