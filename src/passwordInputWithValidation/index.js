import React, { useEffect, useState } from 'react';

function isValidPassword(string) {
  const numberValidation = /\d/.test(string); // Check if the string has a number
  const capitalLetterValidation = /[A-Z]/.test(string); // Check if the string has a capital letter
  const specialCharacterValidation = /[^A-Za-z0-9]/.test(string); // Check if the string has a special character

  return numberValidation && capitalLetterValidation && specialCharacterValidation;
}

function PasswordInputWithValidation() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (value?.length !== 0 && value?.length < 8) {
      setError('🚀 Keep going password must be at least 8 characters');
    } else if (value?.length !== 0 && !isValidPassword(value)) {
      setError('❌ The password must contain one Number, one Capital Letter and one Special Character');
    } else {
      setError(null);
    }
  }, [value]);

  return (
    <article className="w-1/2 mt-12 mb-24">
      <p className="text-2xl font-medium text-white">Password Input With Validation</p>
      <p className="text-base text-white mt-4 bg-[#323232] p-4 rounded-md">In this Input box as the user types, it checks if the password is strong and secure. It looks for numbers, capital letters, and special characters to ensure a strong password. If the password is too short or missing any of these things, it shows an error message below with a shake animation.</p>
      
      <p className="text-base text-white mt-6 mb-4">Password</p>
      <input
        onKeyUp={(e) => {
          setValue(e.target.value);
        }}
        className={`border w-full text-white p-3 rounded-md  mx-auto block bg-black focus:border-2 focus:outline-none `}
      />

      <p className={`text-lg text-white mt-4 ${error ? 'error-show' : ''}`}>{error}</p>
    </article>
  );
}

export default PasswordInputWithValidation;
