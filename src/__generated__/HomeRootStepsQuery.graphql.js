/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HomeRootStepsQueryVariables = {||};
export type HomeRootStepsQueryResponse = {|
  +step_connection: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +name: string
      |}
    |}>
  |}
|};
export type HomeRootStepsQuery = {|
  variables: HomeRootStepsQueryVariables,
  response: HomeRootStepsQueryResponse,
|};
*/


/*
query HomeRootStepsQuery {
  step_connection {
    edges {
      node {
        name
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeRootStepsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "stepConnection",
        "kind": "LinkedField",
        "name": "step_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "stepEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "step",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeRootStepsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "stepConnection",
        "kind": "LinkedField",
        "name": "step_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "stepEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "step",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f150c85b16f8b7120917a7a2fca94805",
    "id": null,
    "metadata": {},
    "name": "HomeRootStepsQuery",
    "operationKind": "query",
    "text": "query HomeRootStepsQuery {\n  step_connection {\n    edges {\n      node {\n        name\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3dda689b2c4e0c14e15bb9d5c8cba3c2';

module.exports = node;
