export type FormField = {
  label: string;
  required : boolean;
}

export type TextField = FormField & {
    type: 'text';
    placeholder: string;
    minLength: number; 
    maxLength: number;
}

export type EmailField = FormField & {
    type: 'email';
    placeholder: string;
}

export type CheckboxField = FormField & {
    type: 'checkbox';
    description: string;
}

export type Option = { 
    label: string;
    value: string;
}

export type SelectField = FormField & {
    type: 'select';
    options: Option[];
}

export type Field = TextField | EmailField | CheckboxField | SelectField;

export type FormSchema = {
    fields: Field[];
}

export type FieldProps<T extends Field> = {
    model?: any;
    configuration: T 
}
