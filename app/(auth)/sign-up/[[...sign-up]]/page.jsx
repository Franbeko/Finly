'use client';
import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex min-h-screen">
      {/* Left side with background image */}
      <div
        className="hidden w-1/2 lg:flex flex-col items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/F2.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 p-10 text-white text-center">
          <h1 className="text-6xl font-bold mb-4">Welcome to Finly</h1>
          <p className="text-lg text-white/80 max-w-md">
            Track your expenses with ease. Join us and take control of your finances!
          </p>
        </div>
      </div>

      {/* Right side with sign-in form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-white p-6">
        <div className="w-full max-w-md">
          <SignUp />
        </div>
      </div>
    </div>
  );
}