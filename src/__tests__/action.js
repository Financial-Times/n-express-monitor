import * as nAutoMetrics from '@financial-times/n-auto-metrics';

import setupMonitor from '../setup';
import { monitorService, monitorModule } from '../action';

jest.mock('@financial-times/n-auto-metrics', () => ({
	tagService: () => inputFunction => inputFunction,
	metricsAction: jest.fn(inputFunction => inputFunction),
	initAutoMetrics: jest.fn(),
}));

describe('monitorService', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	const app = {
		use: jest.fn(),
	};

	const metrics = {};

	it('disable metricsAction if metrics instance is not set', () => {
		setupMonitor({ app });
		const serviceActions = {
			method: () => {},
		};
		monitorService('mock-service', serviceActions);
		expect(nAutoMetrics.metricsAction.mock.calls).toMatchSnapshot();
	});

	it('enable metricsAction if metrics instance is set', () => {
		setupMonitor({ app, metrics });
		const serviceActions = {
			method: () => {},
		};
		monitorService('mock-service', serviceActions);
		expect(nAutoMetrics.metricsAction.mock.calls).toMatchSnapshot();
	});
});

describe('monitorModule', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	const app = {
		use: jest.fn(),
	};

	const metrics = {};

	it('disable metricsAction if metrics instance is not set', () => {
		setupMonitor({ app });
		const moduleFunctions = {
			method: () => {},
		};
		monitorModule(moduleFunctions);
		expect(nAutoMetrics.metricsAction.mock.calls).toMatchSnapshot();
	});

	it('enable metricsAction if metrics instance is set', () => {
		setupMonitor({ app, metrics });
		const moduleFunctions = {
			method: () => {},
		};
		monitorModule(moduleFunctions);
		expect(nAutoMetrics.metricsAction.mock.calls).toMatchSnapshot();
	});
});
