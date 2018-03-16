import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'normalize.css';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './index.css';
import 'prismjs/themes/prism-okaidia.css';
import styles from './index.module.css';

const TemplateWrapper = ({ children, data }) => {
  const { title, description, repositoryUrl } = data.site.siteMetadata;

  console.info(`Hi! If you'd like to see how the code looks pre-production, it lives here: ${repositoryUrl}`);

  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
        ]}
      />
      <Navigation />
      <main className={styles.main}>
        {children()}
        <Footer />
      </main>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        repositoryUrl
      }
    }
  }
`;

export default TemplateWrapper;
