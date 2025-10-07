"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
    const params = useParams();

  return (
    <LiveblocksProvider publicApiKey={"pk_dev_brHjS-DQ9BFK3igqgJ3LSrxWmSB6tfs1nLLXwmDW1nuKhoiR_BW_pccCIZaKdwTT"}>
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}