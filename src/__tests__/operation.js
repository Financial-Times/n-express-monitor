import * as nAutoMetrics from '@financial-times/n-auto-metrics';

import setupMonitor from '../setup';
import monitor from '../operation';

describe('monitor', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	const app = {
		use: jest.fn(),
	};
	// const metrics = {};
	// const logger = {};

	it.skip('disable autoNext if it was set to false', () => {
		setupMonitor({ app, autoNext: false });
		const targetOperation = () => {};
		monitor(targetOperation);
		expect(nAutoMetrics.compose.mock.calls).toMatchSnapshot();
	});
});
