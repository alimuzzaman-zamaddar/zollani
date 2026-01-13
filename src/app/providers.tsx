"use client";

import React from "react";
import { Provider } from "react-redux";
import  store  from "@/redux/store";
import { Toaster } from "react-hot-toast";

import AosProvider from "@/Provider/AosProvider/AosProvider";
import AuthProvider from "@/Provider/AuthProvider/AuthProvider";
import QueryProvider from "@/Provider/QueryProvider/QueryProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <QueryProvider>
        <AuthProvider>
          <AosProvider>
            <Toaster />
            {children}
          </AosProvider>
        </AuthProvider>
      </QueryProvider>
    </Provider>
  );
}
