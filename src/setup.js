import { initAutoMetrics } from '@financial-times/n-auto-metrics';
import {
	setupLoggerInstance,
	requestIdMiddleware,
	enhancedRender,
} from '@financial-times/n-auto-logger';

let config = {};

const setupMonitor = ({ app, metrics, logger }) => {
	config = { app, metrics, logger };

	if (metrics) {
		initAutoMetrics(metrics);
	}

	if (logger) {
		setupLoggerInstance(logger);
	}

	app.use(/^\/(?!_{2}).*$/, [requestIdMiddleware, enhancedRender]);
};

export const getConfig = () => config;

export default setupMonitor;
