"use client"

import "./global.css"

import { useState } from "react"

interface WrapperProps {
  children: React.ReactNode
}

const ErrorWrapper = ({
    message = "An error occurred.",
}: {
    message?: string;
}) => {
    const [error, setError] = useState(false);

    if(error) {
        throw new Error(message);
    }
    
    return (
        <div>
            <button onClick={() => setError(true)}>Trigger Error</button>
        </div>
    );
}