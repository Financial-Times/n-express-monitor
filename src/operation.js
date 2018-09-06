import {
	logOperation,
	autoNext,
	compose,
} from '@financial-times/n-auto-logger';
import { metricsOperation } from '@financial-times/n-auto-metrics';

import { getConfig } from './setup';

const noDecoration = inputFunction => inputFunction;

const monitor = controllerOrBundle => {
	const { metrics } = getConfig();
	return compose(
		autoNext,
		metrics ? metricsOperation : noDecoration,
		logOperation,
	)(controllerOrBundle);
};

export default monitor;
