import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest  } from 'next/server'

export function middleware(req: NextRequest, event: NextFetchEvent ) {
    const reqData = {
        url: req.url,
        ip: req.ip,
        ua: req.ua,
        geo: req.geo
    }
       console.log(reqData);

    return new Response(JSON.stringify(reqData));
}