import { initAutoMetrics } from '@financial-times/n-auto-metrics';
import {
	requestIdMiddleware,
	enhancedRender,
} from '@financial-times/n-auto-logger';

const setupMonitor = ({ app, metrics }) => {
	initAutoMetrics(metrics);
	app.use(/^\/(?!_{2}).*$/, [requestIdMiddleware, enhancedRender]);
};

export default setupMonitor;
