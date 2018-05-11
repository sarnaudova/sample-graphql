/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type restaurantList_data$ref: FragmentReference;
export type restaurantList_data = $ReadOnlyArray<{|
  +name: string,
  +$refType: restaurantList_data$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "restaurantList_data",
  "type": "Restaurant",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2ff3a9fae2e6d30955a1b86e52d9e455';
module.exports = node;
