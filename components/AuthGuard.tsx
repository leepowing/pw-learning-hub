"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type AuthGuardProps = {
  children: ReactNode;
};

export default function AuthGuard({
  children,
}: AuthGuardProps) {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function checkAuth() {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (cancelled) {
        return;
      }

      if (error || !user) {
        window.localStorage.removeItem("currentStudent");
        router.replace("/login");
        return;
      }

      setCheckingAuth(false);
    }

    checkAuth();

    return () => {
      cancelled = true;
    };
  }, [router]);

  if (checkingAuth) {
    return (
      <main
        style={{
          maxWidth: "1100px",
          margin: "70px auto",
          padding: "0 24px",
        }}
      >
        <h2>Checking sign in...</h2>
      </main>
    );
  }

  return <>{children}</>;
}