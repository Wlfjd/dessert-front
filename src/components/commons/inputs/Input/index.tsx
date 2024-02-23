import { getInputStyle } from '@/commons/utils';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ id, type, onChange, placeholder, required }: InputProps) => {
    return (
        <input
            id={id}
            className={getInputStyle()}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
        />
    );
};

export default Input;
