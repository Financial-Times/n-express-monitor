import * as nAutoMetrics from '@financial-times/n-auto-metrics';
import * as nAutoLogger from '@financial-times/n-auto-logger';

import setupMonitor from '../setup';

jest.mock('@financial-times/n-auto-metrics');
jest.mock('@financial-times/n-auto-logger');

describe('setupMonitor', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	afterAll(() => {
		jest.resetModules();
	});

	const app = {
		use: jest.fn(),
	};
	const metrics = {};
	const logger = {};

	it('initAutoMetrics if metrics instance is provided', () => {
		setupMonitor({ app, metrics });
		expect(nAutoMetrics.initAutoMetrics).toBeCalledWith(metrics);
	});

	it('setupLoggerInstance to override the default if logger is provided', () => {
		setupMonitor({ app, logger });
		expect(nAutoLogger.setupLoggerInstance).toBeCalledWith(logger);
	});
});
