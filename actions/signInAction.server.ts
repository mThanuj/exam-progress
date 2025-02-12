"use server";

import { signIn } from "@/auth";

export async function signInAction(formData: FormData) {
  const provider = formData.get("provider") as string;
  await signIn(provider);
}
