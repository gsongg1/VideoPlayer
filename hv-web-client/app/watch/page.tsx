"use client";

import { Suspense } from "react";           //for client side rendering
import { useSearchParams } from "next/navigation";

function VideoPlayer() {
  const searchParams = useSearchParams();
  const videoSrc = searchParams.get("v");
  const videoPrefix ='https://storage.googleapis.com/hv-processed-videos/';

  return <video controls src={`${videoPrefix}${videoSrc}`} />;
}

export default function Watch() {
  return (
    <div>
      <h1>Watch Page</h1>
      <Suspense fallback={<div>Loading video...</div>}>
        <VideoPlayer />
      </Suspense>
    </div>
  );
} 


