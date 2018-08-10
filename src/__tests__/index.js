import { monitor, monitorService, monitorModule, setupMonitor } from '../index';

describe('index', () => {
	it('exports monitor', () => {
		expect(typeof monitor).toBe('function');
	});

	it('exports monitorService', () => {
		expect(typeof monitorService).toBe('function');
	});

	it('exports monitorModule', () => {
		expect(typeof monitorModule).toBe('function');
	});

	it('exports setupMonitor', () => {
		expect(typeof setupMonitor).toBe('function');
	});
});
