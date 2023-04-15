import { ChangeEvent, useState } from 'react';

export const useForm = (inputValues: {
  name?: string;
  password?: string;
  email?: string;
  token?: string;
}) => {
  const [values, setValues] = useState(inputValues);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleInputChange, setValues };
};
