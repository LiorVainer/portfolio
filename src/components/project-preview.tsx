"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
    WebPreview,
    WebPreviewBody,
    WebPreviewNavigation,
    WebPreviewUrl,
} from "@/components/ai-elements/web-preview";
import { cn } from "@/lib/utils";

interface ProjectPreviewProps {
    url: string;
    title: string;
    gradient: string;
    previewImage?: string;
    className?: string;
}

export function ProjectPreview({
    url,
    title,
    gradient,
    previewImage,
    className,
}: ProjectPreviewProps) {
    const [loadFailed, setLoadFailed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Reset state when URL changes
    // biome-ignore lint/correctness/useExhaustiveDependencies: url is needed to reset on URL change
    useEffect(() => {
        setLoadFailed(false);
        setIsLoading(true);
    }, [url]);

    // Timeout fallback - if iframe doesn't load in 3s, show fallback
    // biome-ignore lint/correctness/useExhaustiveDependencies: url is needed to restart timer on URL change
    useEffect(() => {
        const timer = setTimeout(() => {
            if (isLoading) {
                setLoadFailed(true);
                setIsLoading(false);
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, [isLoading, url]);

    const handleIframeLoad = useCallback(() => {
        setIsLoading(false);
    }, []);

    const handleIframeError = useCallback(() => {
        setLoadFailed(true);
        setIsLoading(false);
    }, []);

    // Show fallback card if load failed or previewImage provided as primary
    if (loadFailed) {
        return (
            <div
                className={cn(
                    "relative h-[200px] rounded-lg overflow-hidden",
                    className,
                )}
            >
                {/* Gradient background */}
                <div
                    className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-20",
                        gradient,
                    )}
                />

                {/* Preview image if available */}
                {previewImage && (
                    <Image
                        src={previewImage}
                        alt={`${title} preview`}
                        fill
                        className="object-cover opacity-30"
                    />
                )}

                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40">
                    <span className="text-white/60 text-sm">
                        Preview not available
                    </span>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full transition-colors"
                    >
                        View Live
                        <ExternalLink size={14} />
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className={cn("h-[200px]", className)}>
            <WebPreview defaultUrl={url} className="h-full">
                <WebPreviewNavigation>
                    <WebPreviewUrl
                        readOnly
                        className="bg-white/5 border-white/10 text-white/60 text-xs"
                    />
                </WebPreviewNavigation>
                <WebPreviewBody
                    src={url}
                    title={`${title} preview`}
                    onLoad={handleIframeLoad}
                    onError={handleIframeError}
                    className="bg-white/5"
                />
            </WebPreview>
        </div>
    );
}
