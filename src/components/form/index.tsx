import React, { forwardRef } from 'react';
import {
  FieldProps,
  FormProps,
  LabelProps,
  SelectProps,
  SubmitProps,
  TextareaProps,
} from './types';
import { twMerge } from 'tailwind-merge';

const Form = ({ children, ...props }: FormProps) => {
  return (
    <form className="w-full flex flex-col gap-4" {...props}>
      {children}
    </form>
  );
};

const Label = ({ children }: LabelProps) => {
  return (
    <label className="w-full flex flex-col gap-2 text-neutral-950 ">
      {children}
    </label>
  );
};

const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ helpertext, ...props }: FieldProps, ref) => {
    return (
      <input
      className={twMerge(
        'w-full px-4 py-3 rounded-lg border border-solid border-neutral-400 placeholder:text-neutral-400 bg-transparent outline-none',
        helpertext && ' border-red-400 placeholder:text-red-600'
      )}
        ref={ref}
        {...props}
      />
    );
  }
);

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ helpertext, ...props }: TextareaProps, ref) => {
    return (
      <textarea
        className={twMerge(
          'w-full px-4 py-3 rounded-lg h-32 resize-none border border-solid border-neutral-400 placeholder:text-neutral-400 bg-transparent outline-none',
          helpertext && 'border-red-400 placeholder:text-red-600'
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

const Select = ({ children, ...props }: SelectProps) => {
  return (
    <select
      className="w-full px-4 py-3 rounded-lg border border-solid border-neutral-400 text-neutral-400 bg-transparent outline-none"
      {...props}
    >
      {children}
    </select>
  );
};

const Submit = ({ children, ...props }: SubmitProps) => {
  return (
    <button
      className="w-full text-center py-3 rounded-lg  bg-indigo-600 text-neutral-50 transition-all duration-300 hover:opacity-70 "
      {...props}
    >
      {children}
    </button>
  );
};

Form.Label = Label;
Form.Field = Field;
Form.TextArea = Textarea;
Form.Select = Select;
Form.Submit = Submit;

export { Form };
