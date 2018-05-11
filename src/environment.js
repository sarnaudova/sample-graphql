import {
	Environment,
	Network,
	RecordSource,
	Store
} from 'relay-runtime';

function fetchQuery(operation, variables) {
	const headers = {
		'Content-Type': 'application/json'
	};

	return fetch('http://localhost:3500/graphql', {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query: operation.text,
			variables
		})
	}).then((response) => response.json());
}

const environment = new Environment({
	network: Network.create(fetchQuery),
	store: new Store(new RecordSource())
});

export default environment;