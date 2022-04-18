import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googlImg from '../../images/google.png';

const SignGoogle = () => {
  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  if (user) {
    navigate('/home');
  }

  const createUserWithGoogle = () => {
    signInWithGoogle();
  };
  return (
    <div>
      <button
        className="d-flex align-items-center btn btn-secondary"
        onClick={createUserWithGoogle}
      >
        <img style={{ width: '50px' }} src={googlImg} alt="" />
        <p>SignIn with google</p>
      </button>
    </div>
  );
};

export default SignGoogle;
