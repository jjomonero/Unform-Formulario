import React, { useEffect, useRef }from 'react';
import { useField } from '@unform/core'

export default function Input({ name, ...rest }) {
    const { fieldName, registerField, defaultValue, error } = useField(name);

    const inputRef = useRef(null);


    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    return (
        <div>
            <input style={{
                margin:'0.6rem',
                padding: '0.5rem',
                textAlign: 'center'
            }} defaultValue={defaultValue} ref={inputRef} {...rest}/> 

            {error && <span style={{color:'#e55'}}> {error} </span>}
        </div>
    );
}
