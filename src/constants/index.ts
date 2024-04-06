import 'server-only';

export const MAX_LIMIT_COUNT_FREE = Number(process.env.MAX_LIMIT_COUNT_FREE) || 100;
export const RATE_LIMIT_DURATION = process.env.RATE_LIMIT_DURATION || '60s';
