"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import Store, { AppStore } from "@/redux/store";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = Store();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
