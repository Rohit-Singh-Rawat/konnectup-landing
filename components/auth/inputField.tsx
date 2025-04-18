'use client';

import { ChangeEvent, useState } from 'react';

interface InputFieldProps {
	id: string;
	name: string;
	type: string;
	label: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function InputField({ id, name, type, label, value, onChange }: InputFieldProps) {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div className='relative pt-5'>
			<label
				htmlFor={id}
				className={`absolute transition-all duration-200 ${
					isFocused || value ? 'text-xs top-0 text-black' : 'text-base top-5 text-black/70'
				}`}
			>
				{label}
			</label>
			<input
				id={id}
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				className='w-full pb-1 pt-1 border-0 border-b border-gray-300 focus:ring-0 focus:border-black outline-none bg-transparent'
			/>
		</div>
	);
}
