"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    fetch("/api/ayd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then(({ url }) => {
        setIframeUrl(url);
      });
  }, []);

  return (
    <main>
      <iframe
        className="mx-auto"
        style={{
          height: "100vh",
          width: "100vw",
          border: "none", // 可选，去掉边框
        }}
        src={iframeUrl}
      ></iframe>
    </main>
  );
}
