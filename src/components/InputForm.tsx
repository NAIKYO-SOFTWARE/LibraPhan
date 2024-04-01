import { useField } from "formik";

function InputForm({ field, placeholder }: { field: any; placeholder: string }) {
    return (
      <input
        {...field}
        placeholder={placeholder}
        type="text"
        className="input"
      />
    );
  }

export default InputForm;