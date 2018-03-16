import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Heading from '../components/Heading';

import { prettyDate } from '../shared/prettyDate';

class BlogPostTempalte extends Component {
  render() {
    const post = this.props.data.markdownRemark;
    const { html } = post;
    const { date, description, title } = post.frontmatter;
    const blogDate = prettyDate(date);

    return (
      <main>
        <Helmet title={`${title} | Michael J. Deeb`} />
        <Heading heading={title} sub={blogDate} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    );
  }
}

export default BlogPostTempalte;

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`;
