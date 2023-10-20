"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import * as React from "react";

export default function Home() {
  const [uuid, setUuid] = React.useState<string>("");
  const router = useRouter();
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    router.push(`/notion/${uuid}`);
  }
  return (
    <main className="my-4">
      <Input
        placeholder="Enter UUID Here"
        value={uuid}
        onChange={(e) => setUuid(e.target.value)}
      />
      <Button onClick={handleClick} className="mt-4 w-full">
        Click me Senpai
      </Button>
    </main>
  );
}
