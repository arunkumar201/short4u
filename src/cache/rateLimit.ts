import { NextRequest, NextResponse } from 'next/server';

import { MAX_LIMIT_COUNT_FREE } from '@/constants';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

let redis: Redis;
let ratelimit: Ratelimit;

if (process.env.UPSTASH_REDIS_REST_URL) {
  redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL ?? '',
    token: process.env.UPSTASH_REDIS_REST_TOKEN ?? '',
  });

  ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(MAX_LIMIT_COUNT_FREE, '60s'),
  });
}

export async function rateLimitMiddleware(req: NextRequest): Promise<Response> {
  const ip =
    req.headers.get('X-Forwarded-For') ??
    req.headers.get('x-real-ip') ??
    req.ip;
  if (!ip) return NextResponse.json({ error: 'IP not found' }, { status: 400 });
  const { success, limit, remaining, reset } = await ratelimit.limit(ip);
  if (!success)
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });

  return NextResponse.next({
    headers: {
      'X-RateLimit-Limit': limit.toString(),
      'X-RateLimit-Remaining': remaining.toString(),
      'X-RateLimit-Reset': reset.toString(),
    },
  });
}
