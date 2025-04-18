/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Control} from 'react-hook-form';

interface InputFieldProps {
	id: string;
	name: string;
	type: string;
	label: string;
	control: Control<any>;
	placeholder?: string;
}

export function InputField({ id, name, type, label, control, placeholder }: InputFieldProps) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className='relative'>
					<FormControl>
						<Input
							id={id}
							type={type}
							placeholder={placeholder || `Enter your ${label.toLowerCase()}`}
							{...field}
							className='peer w-full pl-0 pb-1 pt-1 border-0 border-b border-gray-300 focus:ring-0 focus:border-black outline-none bg-transparent rounded-none shadow-none placeholder:text-transparent'
						/>
					</FormControl>
					<Label
						htmlFor={id}
						className='absolute text-black/70 left-0 text-base top-5 transition-all duration-200 peer-focus:text-xs peer-focus:top-0 peer-focus:text-black peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-black'
					>
						{label}
					</Label>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
