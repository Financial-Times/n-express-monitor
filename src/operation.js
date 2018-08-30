import {
	logOperation,
	autoNext as callNext,
} from '@financial-times/n-auto-logger';
import { metricsOperation, compose } from '@financial-times/n-auto-metrics';

import { getConfig } from './setup';

const monitor = controllerOrBundle => {
	const { metrics, autoNext } = getConfig();
	return compose(
		autoNext ? callNext : i => i,
		metrics ? metricsOperation : i => i,
		logOperation,
	)(controllerOrBundle);
};

export default monitor;
