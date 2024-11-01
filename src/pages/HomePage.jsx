import React, { useState, useEffect } from 'react';
import { Button } from '../components/common/Button';
import { fetchWithoutAuth } from '../api';

export function HomePage() {
    useEffect(() => {
        const getAllEvents = fetchWithoutAuth('/events', {
            method: 'GET',
        });
    }, []);
    // ...

    return (
        <>
            <div className="flex flex-row align-baseline justify-end">
                <Button
                    buttonLabel={'Create new event'}
                    buttonStyle={
                        'border border-[#CACED5] p-2 rounded-lg bg-[#374151]'
                    }
                />
            </div>
            <p>Home</p>
        </>
    );
}
