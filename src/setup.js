import { initAutoMetrics } from '@financial-times/n-auto-metrics';
import {
	setupLoggerInstance,
	requestIdMiddleware,
	enhancedRender,
} from '@financial-times/n-auto-logger';

let config = {};

const setupMonitor = ({ app, metrics, logger, autoNext = true }) => {
	config = { app, metrics, logger, autoNext };

	if (metrics) {
		initAutoMetrics(metrics);
	}

	if (logger) {
		setupLoggerInstance(logger);
	}

	app.use(
		/^\/(?!_{2}).*$/,
		autoNext ? [requestIdMiddleware, enhancedRender] : [requestIdMiddleware],
	);
};

export const getConfig = () => config;

export default setupMonitor;
