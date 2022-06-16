import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest  } from 'next/server'

export function middleware(req: NextRequest, event: NextFetchEvent ) {
    // Store the response so we can modify its headers
    const response = NextResponse.next()

    console.log('User coming from: ' + req.geo?.country);

    if (req.geo?.country === 'FR') {
        response.headers.set('x-country-fr', 'true')
    }

  return response;
}