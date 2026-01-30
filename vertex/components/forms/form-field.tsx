import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface FormFieldsProps {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  helperText?: string;
}

export const FormFields = ({
  label,
  name,
  id,
  placeholder,
  required,
  onChange,
  error,
  helperText,
}: FormFieldsProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
      {helperText && <p className="text-sm text-gray-500 mt-1">{helperText}</p>}
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};
