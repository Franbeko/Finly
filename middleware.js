import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
  // Only allow `/` as public; all other routes require auth
  publicRoutes: ['/'],
});

export const config = {
  matcher: [
    // Match all routes except Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
