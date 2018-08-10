import { logOperation, errorToHandler } from '@financial-times/n-auto-logger';
import { metricsOperation, compose } from '@financial-times/n-auto-metrics';

const monitor = controllerOrBundle =>
	compose(
		errorToHandler,
		metricsOperation,
		logOperation,
	)(controllerOrBundle);

export default monitor;
