import { logAction, compose } from '@financial-times/n-auto-logger';
import { metricsAction, tagService } from '@financial-times/n-auto-metrics';

export const monitorService = (serviceName, functionBundle) =>
	compose(
		tagService(serviceName),
		metricsAction,
		logAction,
	)(functionBundle);

export const monitorModule = functionBundle =>
	compose(
		metricsAction,
		logAction,
	)(functionBundle);
