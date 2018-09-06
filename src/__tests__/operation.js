import * as nAutoMetrics from '@financial-times/n-auto-metrics';

import setupMonitor from '../setup';
import monitor from '../operation';

jest.mock('@financial-times/n-auto-metrics', () => ({
	metricsOperation: jest.fn(inputFunction => inputFunction),
	initAutoMetrics: jest.fn(),
}));

describe('monitor', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	const app = {
		use: jest.fn(),
	};

	const metrics = {};

	it('disable metricsOperation if metrics instance is not set', () => {
		setupMonitor({ app });
		const targetOperation = () => {};
		monitor(targetOperation);
		expect(nAutoMetrics.metricsOperation.mock.calls).toMatchSnapshot();
	});

	it('enable metricsOperation if metrics instance is set', () => {
		setupMonitor({ app, metrics });
		const targetOperation = () => {};
		monitor(targetOperation);
		expect(nAutoMetrics.metricsOperation.mock.calls).toMatchSnapshot();
	});
});
