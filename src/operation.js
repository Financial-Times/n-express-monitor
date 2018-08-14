import { logOperation, autoNext } from '@financial-times/n-auto-logger';
import { metricsOperation, compose } from '@financial-times/n-auto-metrics';

const monitor = controllerOrBundle =>
	compose(
		autoNext,
		metricsOperation,
		logOperation,
	)(controllerOrBundle);

export default monitor;
