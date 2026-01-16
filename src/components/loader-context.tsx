"use client";

import { createContext, useContext } from "react";

interface LoaderContextType {
    isLoaderDismissed: boolean;
}

export const LoaderContext = createContext<LoaderContextType>({
    isLoaderDismissed: false,
});

export function useLoaderContext() {
    return useContext(LoaderContext);
}
