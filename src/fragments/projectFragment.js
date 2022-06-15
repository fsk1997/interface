import React from "react";
import { graphql } from "gatsby";

export const projectFragment = graphql`
  fragment projectFragment on ProjectJson {
    created_at
    description
    github_css
    github_js
    id
    title
    slug
    mode
  }
`;
