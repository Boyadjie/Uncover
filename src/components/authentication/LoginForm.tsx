'use client';

import {useState} from 'react';

import {signInWithEmailAndPassword} from 'firebase/auth';

import {auth} from '../../firebase';
import {Input} from './Inputs/InputManager';

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
  });

  const [responseErr, setResponseErr] = useState<boolean>(false);

  const isEmptyMail = formValues.email.length === 0;
  const isEmptyPasswords = formValues.password.length < 1;
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {name, value} = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isEmptyPasswords || isEmptyMail) {
      return;
    }

    // move logic to back end file useing next.js api routes
    signInWithEmailAndPassword(auth, formValues.email, formValues.password)
      .then((userCredential) => {
        const user = userCredential.user;
        // eslint-disable-next-line no-console
        console.log(user);
      })
      .catch(() => {
        setResponseErr(true);
      });
  };

  return (
    <div>
      <div>
        {/* use image from next */}
        <h1>Login</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <Input
            required={true}
            type="email"
            name="email"
            placeholder="Mail address"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Input
            type="password"
            name="password"
            value={formValues.password}
            placeholder="Password"
            onChange={handleInputChange}
          />
        </div>
        <div id="formError">
          {responseErr ? 'Email or Password Invalid' : ''}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
