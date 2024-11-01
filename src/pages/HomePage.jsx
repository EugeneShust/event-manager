import React, { useState, useEffect } from 'react';
import { Button } from '../components/common/Button';
import { getAllEvents } from '../services';
import { Event } from '../components';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleButton() {
        navigate('/create-event');
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getAllEvents();
                console.log(JSON.stringify(data));
                setEvents(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getData();

        return () => {
            console.log('Cleanup function ran');
        };
    }, []);

    return (
        <>
            <div className="flex flex-row align-baseline justify-end">
                <Button
                    onClick={handleButton}
                    buttonLabel={'Create new event'}
                    buttonStyle={
                        'border-2 border-[#CACED5] p-2 rounded-lg bg-[#374151]'
                    }
                />
            </div>
            <div className="grid grid-cols-3 gap-4">
                {events?.map((item) => (
                    <Event key={item.id} data={item} />
                ))}
            </div>
        </>
    );
}
