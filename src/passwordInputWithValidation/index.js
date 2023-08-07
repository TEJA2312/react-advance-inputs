import React, { useEffect, useState } from 'react';
import WrongIcon from "../icons/wrongIcon"
import CorrectIcon from "../icons/correctIcons"


function PasswordInputWithValidation() {
  
  const [value, setValue] = useState('');
  const [error, setError] = useState({
    minValueValidation: false,
    numberValidation: false,
    capitalLetterValidation: false,
    specialCharacterValidation: false
  });


  useEffect(() => {
    setError({
      minValueValidation: value.length >= 8,
      numberValidation: /\d/.test(value),
      capitalLetterValidation: /[A-Z]/.test(value),
      specialCharacterValidation: /[^A-Za-z0-9]/.test(value)
    });
  }, [value]);


  console.log("er", error, value.length);

  return (
    <article className="w-1/2 mt-12 mb-24">
        <p className="text-2xl font-medium text-white">Password Input With Validation</p>

        <p className="text-base text-white mt-4 bg-[#323232] p-4 rounded-md">In this Input box as the user types, it checks if the password is strong and secure. It looks for numbers, capital letters, and special characters to ensure a strong password. If the password is too short or missing any of these things, it shows an error message below with a shake animation.</p>

        <p className="text-base text-white mt-6 mb-4">Password</p>

        <input onKeyUp={(e) => setValue(e.target.value)}
          className={`border w-full text-white p-3 rounded-md  mx-auto block bg-black focus:border-2 focus:outline-none `}
        />
       

        <div className='flex items-center gap-4 my-6'>
        {error.minValueValidation ?  
         <CorrectIcon wrapperClass={`w-4 h-auto text-white text-green-500`} /> 
         : 
         <WrongIcon wrapperClass="w-4 h-auto text-white text-red-500" />}
         <p className={`text-base font-medium ${error.minValueValidation ? "text-green-500" : "text-red-500"}`}>Password must be atleast 8 characters</p>
        </div>

        <div className='flex items-center gap-4 my-6'>
        {error.numberValidation ?  
         <CorrectIcon wrapperClass={`w-4 h-auto text-white text-green-500`} /> 
         : 
         <WrongIcon wrapperClass="w-4 h-auto text-white text-red-500" />}
         <p className={`text-base font-medium ${error.numberValidation ? "text-green-500" : "text-red-500"}`}>Password must have atleast one number</p>
        </div>

        <div className='flex items-center gap-4 my-6'>
        {error.capitalLetterValidation ?  
         <CorrectIcon wrapperClass={`w-4 h-auto text-white text-green-500`} /> 
         : 
         <WrongIcon wrapperClass="w-4 h-auto text-white text-red-500" />}
         <p className={`text-base font-medium ${error.capitalLetterValidation ? "text-green-500" : "text-red-500"}`}>Password must have atleast one Capital Letter</p>
        </div>

        <div className='flex items-center gap-4 my-6'>
        {error.specialCharacterValidation ?  
         <CorrectIcon wrapperClass={`w-4 h-auto text-white text-green-500`} /> 
         : 
         <WrongIcon wrapperClass="w-4 h-auto text-white text-red-500" />}
         <p className={`text-base font-medium ${error.specialCharacterValidation ? "text-green-500" : "text-red-500"}`}>Password must have atleast one special characters</p>
        </div>

    </article>
  );
}

export default PasswordInputWithValidation;
