import { logAction, compose } from '@financial-times/n-auto-logger';
import { metricsAction, tagService } from '@financial-times/n-auto-metrics';

import { getConfig } from './setup';

const noDecoration = inputFunction => inputFunction;

export const monitorService = (serviceName, functionBundle) => {
	const { metrics } = getConfig();
	return compose(
		tagService(serviceName),
		metrics ? metricsAction : noDecoration,
		logAction,
	)(functionBundle);
};

export const monitorModule = functionBundle => {
	const { metrics } = getConfig();
	return compose(
		metrics ? metricsAction : noDecoration,
		logAction,
	)(functionBundle);
};
