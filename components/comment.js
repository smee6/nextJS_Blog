// components/comment.js
import React, { useEffect, useRef } from "react";

export default function Comment({ repo }) {
    const containerRef = useRef();
    useEffect(() => {
        const utterances = document.createElement("script");
        const attributes = {
            src: "https://utteranc.es/client.js",
            repo,
            "issue-term": "pathname",
            label: "comment",
            theme: "github-light", //다크 테마
            crossorigin: "anonymous",
            async: "true",
        };
        Object.entries(attributes).forEach(([key, value]) => {
            utterances.setAttribute(key, value);
        });
        containerRef.current.appendChild(utterances);
    }, []);
    return <div id="comment" ref={containerRef} />;
}
