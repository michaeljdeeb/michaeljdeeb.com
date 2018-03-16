import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Heading from '../components/Heading';

import { prettyDate } from '../shared/prettyDate';

class BlogPostTempalte extends Component {
  render() {
    const post = this.props.data.markdownRemark;
    const { frontmatter, html } = post;
    const { date, description, title } = frontmatter;
    const image = frontmatter.image.childImageSharp.sizes.src;
    const blogDate = prettyDate(date);
    console.log(image);

    return (
      <main>
        <Helmet
          title={`${title} | Michael J. Deeb`}
          meta={[
            { name: 'description', content: description },
            { name: 'og:description', content: description },
            { name: 'og:image', content: `https://michaeljdeeb.com${image}` },
            { name: 'og:site_name', content: 'michaeljdeeb.com' },
            { name: 'og:title', content: title },
            { name: 'og:type', content: 'article' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@michaeljdeeb' },
          ]}
        />
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
        image {
          childImageSharp {
            sizes {
              src
            }
          }
        }
      }
    }
  }
`;
