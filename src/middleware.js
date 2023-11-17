import { NextResponse } from 'next/server'
import { useAuth } from "@/context/UserContext";
// This function can be marked `async` if using `await` inside
export function middleware(request) {

    // const {user,navigate}  = useAuth();
    const cookie = request.cookies.get('token')?.value;
    const moduleType = request.cookies.get('is_module_type')?.value;
    
    if(cookie && moduleType!='vendor' && request.nextUrl.pathname.startsWith('/vendor/dashboard')){
        return NextResponse.redirect(new URL('/', request.url))
    }else if(cookie && moduleType!='manager' && request.nextUrl.pathname.startsWith('/manager/dashboard')){
        return NextResponse.redirect(new URL('/', request.url))
    }else if(cookie && moduleType!='company' && request.nextUrl.pathname.startsWith('/company/dashboard')){
        return NextResponse.redirect(new URL('/', request.url))
    }
    
    if(cookie && request.nextUrl.pathname.startsWith(`/vendor/login`)){
        return NextResponse.redirect(new URL(`/vendor/dashboard`, request.url))
    }else if(cookie && request.nextUrl.pathname.startsWith(`/manager/login`)){
        return NextResponse.redirect(new URL(`/manager/dashboard`, request.url))
    }else if(cookie && request.nextUrl.pathname.startsWith(`/company/login`)){
        return NextResponse.redirect(new URL(`/company/dashboard`, request.url))
    }

    // console.log(cookie);
    if(!cookie && (request.nextUrl.pathname.startsWith(`/vendor/dashboard`) || request.nextUrl.pathname.startsWith(`/manager/dashboard`) || request.nextUrl.pathname.startsWith(`/company/dashboard`))){
        return NextResponse.redirect(new URL(`/`, request.url))
    }


}
 
// See "Matching Paths" below to learn more
export const config = {
    // matcher: ['/api/:path*'],
}