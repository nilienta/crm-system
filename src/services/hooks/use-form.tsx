import { ChangeEvent, useState } from 'react';

export const useForm = (inputValues: { password: string; email: string }) => {
  const [values, setValues] = useState(inputValues);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleInputChange, setValues };
};
