export interface FormFieldBase {
  label: string;
  name: string;
  required?: boolean;
  attributes?: Record<string, any>;
}

export interface InputField extends FormFieldBase {
  type: 'input';
  inputType: string;
  placeholder?: string;
}

export interface PasswordField extends FormFieldBase {
  type: 'password';
  inputType: string;
  placeholder?: string;
}

export interface SelectField extends FormFieldBase {
  type: 'select';
  options: Array<{ value: string; text: string }>;
}

export interface CheckboxField extends FormFieldBase {
  type: 'checkbox';
  options: Array<{ value: string; text: string }>;
}

export interface RadioField extends FormFieldBase {
  type: 'radio';
  options: Array<{ value: string; text: string }>;
}

export interface TextareaField extends FormFieldBase {
  type: 'textarea';
  rows?: number;
  cols?: number;
  placeholder?: string;
}

export type FormField = InputField | PasswordField | SelectField | CheckboxField | RadioField | TextareaField;

export interface FormConfig {
  name?: string;
  fields: FormField[];
}

export type FormModel = Record<string, any>;
