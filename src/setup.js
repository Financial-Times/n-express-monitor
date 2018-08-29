import { initAutoMetrics } from '@financial-times/n-auto-metrics';
import {
	setupLoggerInstance,
	requestIdMiddleware,
	enhancedRender,
} from '@financial-times/n-auto-logger';

const setupMonitor = ({ app, metrics, logger }) => {
	initAutoMetrics(metrics);
	if (logger) {
		setupLoggerInstance(logger);
	}
	app.use(/^\/(?!_{2}).*$/, [requestIdMiddleware, enhancedRender]);
};

export default setupMonitor;
