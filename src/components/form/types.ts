export type FormProps = React.FormHTMLAttributes<HTMLFormElement>;
export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;
export type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & { helpertext?: string;};
export type TextareaProps =React.TextareaHTMLAttributes<HTMLTextAreaElement> & { helpertext?: string;};
export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;
export type SubmitProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
