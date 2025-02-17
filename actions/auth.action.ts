"use server";

import { signIn, signOut } from "@/auth";

export async function signInAction(formData: FormData) {
  const provider = formData.get("provider") as string;
  await signIn(provider);
}

export async function signOutAction() {
  await signOut();
}
