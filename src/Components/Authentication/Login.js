import React from "react";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Home/Loading";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gLoading, gError] = useSignInWithGoogle(auth);
    const handleSignInWithGoogle = async () => {
        try {
            await signInWithGoogle();
            // Navigate to the home page after successful sign-in
            navigate('/all');
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    }

    const onSubmit = async (data) => {
        try {
            await signInWithEmailAndPassword(data.email, data.password);
            navigate("/all");
        } catch (error) {
            console.error("Authentication error:", error);
        }
    };

    let signInError = null;
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>;
    }

    if (loading || gLoading) {
        return <Loading />;
    }
  return (
    <div>
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 className="text-4xl font-medium">Login</h1>
        <p className="text-slate-500">Hi, Welcome back 👋</p>

        <div className="my-5">
            <button onClick={handleSignInWithGoogle} className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <img
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    className="w-6 h-6"
                    alt=""
                />{" "}
                <span>Login with Google</span>
            </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="my-10">
            <div className="flex flex-col space-y-5">
                <label htmlFor="email">
                    <p className="font-medium text-slate-700 pb-2">Email address</p>
                    <input
                        {...register("email", {
                            required: "Email is Required",
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: "Provide a valid Email",
                            },
                        })}
                        id="email"
                        type="email"
                        className="w-full text-white py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                        placeholder="Enter email address"
                    />
                    {errors.email && (
                        <span className="label-text-alt text-red-500">
                            {errors.email.message}
                        </span>
                    )}
                </label>
                <label htmlFor="password">
                    <p className="font-medium text-slate-700 pb-2">Password</p>
                    <input
                        {...register("password", {
                            required: "Password is Required",
                            minLength: {
                                value: 6,
                                message: "Must be 6 characters or longer",
                            },
                        })}
                        id="password"
                        type="password"
                        className="w-full text-white py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                        placeholder="Enter your password"
                    />
                    {errors.password && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                </label>
                {signInError}
                <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                <p className="text-center">
                    Not registered yet?{" "}
                    <Link to='/register' className="text-indigo-600 font-medium inline-flex space-x-1 items-center">
                        <span>Register now </span>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </span>
                    </Link>
                </p>
            </div>
        </form>
    </div>
</div>
  );
};

export default Login;
