"use client";

import SignIn from "@/components/SignInButtons";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/auth/session");
      const data = await res.json();
      if (data.session) {
        router.push("/");
      }
    })();
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4 sm:p-8">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Sign In
        </h1>
        <SignIn />
      </div>
    </div>
  );
};

export default LoginPage;
