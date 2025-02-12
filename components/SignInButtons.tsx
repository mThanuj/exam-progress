"use client";

import { signInAction } from "@/actions/signInAction.server";

export default function SignIn() {
  const providers = ["google"];

  return (
    <div className="space-y-4 w-full">
      {providers.map((provider) => (
        <form
          key={provider}
          action={signInAction}
          className="flex flex-col items-center w-full"
        >
          <input type="hidden" name="provider" value={provider} />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all"
          >
            Sign in with{" "}
            {provider[0].toUpperCase() + provider.substring(1).toLowerCase()}
          </button>
        </form>
      ))}
    </div>
  );
}
