import { usePreloadedQuery } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';

/**
 * The root component for the home route.
 */
export default function HomeRoot(props) {
  // Defines *what* data the component needs via a query. The responsibility of
  // actually fetching this data belongs to the route definition: it calls
  // preloadQuery() with the query and variables, and the result is passed
  // on props.prepared.stepsQuery - see src/routes.js
  const data = usePreloadedQuery(
    graphql`
      query HomeRootStepsQuery {
        step_connection {
          edges {
            node {
              name
            }
          }
        }
      }
    `,
    props.prepared.stepsQuery,
  );

  return <div >{JSON.stringify(data)}</div>;
}