import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

// markup
const NotFoundPage = () => {
  return (
    <Layout
    // customTitle={customTitle}
    // customDescription={customDescription}
    // customOgImage={customOgImage}
    // customURL={customURL}
    >
      <title>Not found</title>

      <h1>Page not found</h1>
      <p>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
      </p>
      <p>
        <Link to="/">Go home</Link>.
      </p>
    </Layout>
  );
};

export default NotFoundPage;
