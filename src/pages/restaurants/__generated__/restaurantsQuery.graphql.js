/**
 * @flow
 * @relayHash 60b93436c8b8c0dbf06c8ad956baf57d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type restaurantsQueryVariables = {||};
export type restaurantsQueryResponse = {|
  +restaurants: ?$ReadOnlyArray<?{|
    +_id: ?string,
    +name: string,
  |}>
|};
*/


/*
query restaurantsQuery {
  restaurants {
    _id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "restaurants",
    "storageKey": null,
    "args": null,
    "concreteType": "Restaurant",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "restaurantsQuery",
  "id": null,
  "text": "query restaurantsQuery {\n  restaurants {\n    _id\n    name\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "restaurantsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "restaurantsQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3011265e390a1a916bacc40533f4ece0';
module.exports = node;
