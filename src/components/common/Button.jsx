import React, { useState } from 'react';

export const Button = (props) => {
    return (
        <div>
            <div>
                <button
                    type={props.type}
                    onClick={props.onClick}
                    className={props.buttonStyle}
                >
                    {props.buttonLabel}
                </button>
            </div>
        </div>
    );
};
