import React, { useState } from 'react';
import WrongIcon from '../icons/wrongIcon';
import CorrectIcon from '../icons/correctIcons';

const PasswordInputWithValidation = () => {
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    minValueValidation: false,
    numberValidation: false,
    capitalLetterValidation: false,
    specialCharacterValidation: false,
  });

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (password) => {

    setErrors({
      minValueValidation: password.length >= 8,
      numberValidation: /\d/.test(password),
      capitalLetterValidation: /[A-Z]/.test(password),
      specialCharacterValidation: /[^A-Za-z0-9]/.test(password),
    });
  };

  return (
    <article className="w-1/2 mt-12 mb-24">
      {/* Your other content goes here */}
      <p className="text-base text-white mt-6 mb-4">Password</p>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        className={`border w-full text-white p-3 rounded-md mx-auto block bg-black focus:border-2 focus:outline-none`}
      />

      {Object.entries(errors).map(([key, value]) => (
        <div key={key} className="flex items-center gap-4 my-6">
          {value ? (
            <CorrectIcon wrapperClass="w-4 h-auto text-white text-green-500" />
          ) : (
            <WrongIcon wrapperClass="w-4 h-auto text-white text-red-500" />
          )}
          <p className={`text-base font-medium ${value ? 'text-green-500' : 'text-red-500'}`}>
            {key === 'minValueValidation' && 'Password must be at least 8 Characters'}
            {key === 'numberValidation' && 'Password must have at least one Number'}
            {key === 'capitalLetterValidation' && 'Password must have at least one Capital Letter'}
            {key === 'specialCharacterValidation' && 'Password must have at least one Special Character'}
          </p>
        </div>
      ))}
    </article>
  );
};

export default PasswordInputWithValidation;
