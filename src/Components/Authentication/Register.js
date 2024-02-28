import React from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Loading from "../Home/Loading";
const Register = () => {
  const [signInWithGoogle, gLoading, gError] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = async () => {
    try {
        await signInWithGoogle();
        const currentUser = auth.currentUser;
        if (currentUser) {
           
          const { email, displayName } = currentUser;
          const userData = {
              email: email,
              name: displayName
          };
            const apiResponse = await fetch('http://localhost:7000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                   
                },
                body: JSON.stringify(userData),
            });

            if (apiResponse.ok) {
                console.log('User data saved successfully');
                navigate("/all");
            } else {
                console.error('Failed to save user data to the API');
               
            }
        } else {
            console.error('No user signed in or user data not available');
        }
    } catch (error) {
        console.error('Error occurred during Google sign-in or data saving:', error);
    }
};

  
const {
  register,
  formState: { errors },
  handleSubmit,
} = useForm();
const [createUserWithEmailAndPassword, loading, error] =
  useCreateUserWithEmailAndPassword(auth);

const navigate = useNavigate();

let signInError;

if (loading || gLoading) {
  return <Loading/>;
}

if (error || gError) {
  signInError = (
    <p className="text-red-500">
      <small>{error?.message || gError?.message}</small>
    </p>
  );
}


const onSubmit = async (data) => {
  
  await createUserWithEmailAndPassword( data.email, data.password, data.name);
  const userData = {
    email: data.email,
    name : data.name
  };
  try {
    const apiResponse = await fetch('http://localhost:7000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (apiResponse.ok) {
      console.log('User data saved successfully');
      navigate("/all");
    } else {
      console.error('Failed to save user data to the API');
    }
  } catch (apiError) {
    console.error('Error occurred while saving user data to the API', apiError);
  }
};
  return (
    <div className="flex h-screen justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              {signInError}
              <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="Sign Up"
              />
            </form>
            <p>
              <small>
                Already have an account?{" "}
                <Link className="text-primary" to="/login">
                  Please login
                </Link>
              </small>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={() => handleGoogleSignIn()}
              className="btn btn-outline"
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
  );
};

export default Register;
