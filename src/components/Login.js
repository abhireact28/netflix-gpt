import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { BG_URL } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //Validate the form data`

    // console.log(email.current.value);
    // 
    
    // e.log(password.current.value);
    // console.log(name.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message)
    if(message) return;

    if(!isSignInForm){
      //Sign Up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, 
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
    .then(() => {
        const {uid, email, displayName, photoURL} = auth.currentUser;
        dispatch(
          addUser({
            uid: uid, 
            email: email, 
            displayName: displayName, 
            photoURL: photoURL
          }
          ));
    })
    .catch((error) => {
      setErrorMessage(error.message)
    });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" " +errorMessage)
  });

    }
    else{
      //Sign In logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode, errorMessage)
  });
    }
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
            <Header />
            <div className='absolute w-[100%]'>
                <img src={BG_URL}
                    className='h-screen object-cover w-full'
                    alt='bg-img' />
            </div>
            
            <form onSubmit={(e) => e.preventDefault()} className='absolute bg-black w-full md:w-4/12  p-14 my-36 md:my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-[#333] rounded-lg' />}

                <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-[#333] rounded-lg' />
                <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-[#333] rounded-lg' />

                <p className='text-red-500 font-bold py-2'>{errorMessage}</p>
                <button onClick={handleButtonClick} className='p-4 my-6 bg-red-600 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p onClick={toggleSignInForm} className='py-4 cursor-pointer'>{isSignInForm ? "New To Netflix? Sign Up Now" : "Already Registered? Sign In "}</p>
            </form>
        </div>
  );
}

export default Login;
