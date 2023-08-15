import React, { useEffect, useState } from 'react';
import { ReactComponent as LoginImage } from '../login.svg';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Layout from './Layout.js';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../Redux/Actions/userActions.js';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { loginValidation } from '../Validation/UserValidation';
import { Input } from '../Validation/UsedInput';
import { InlineError } from '../Notifications/Error.js';
import { FiLogIn } from 'react-icons/fi';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, userInfo, isSuccess } = useSelector(
    (state) => state.userLogin
  );
  // validate user
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });
  const onSubmit = (data) => {
    console.log('data', data);
    dispatch(loginAction(data));
  };
  // useEffect
  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
    if (isSuccess) {
      toast.success(`Welcome back ${userInfo?.fullName}`);
    }
    if (isError) {
      toast.error(isError);
      dispatch({ type: 'USER_LOGIN_RESET' });
    }
  }, [userInfo, isSuccess, isError, navigate, dispatch]);

  return (
    // <Layout>
    <div className="w-full">
      <div className="w-5/6 mx-auto my-[10px]">
        <div className="flex w-11/12 mx-auto bg-gray-100 rounded-lg overflow-hidden">
          <div className="w-[50%]  ">
            <div action="" className="w-[50%] mx-auto py-[30px]">
              <div className="flex flex-col items-center">
                <p className="font-medium text-xl">Login Account</p>
                <p className="font-thin">
                  Welcome back! Please enter your details.
                </p>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-[12px] mt-[30px]"
              >
                <div>
                  {/* <label className="font-medium block" htmlFor="">
                      Email
                    </label> */}
                  <Input
                    className="outline-none w-full flex items-center pl-[10px] h-[30px] rounded placeholder:opacity-30 placeholder:font-thin placeholder:italic"
                    type="email"
                    placeholder="Enter your email"
                    label="Email"
                    register={register('email')}
                    bg={true}
                  />
                  {errors.email && (
                    <InlineError text={errors.email.message} />
                  )}
                </div>
                <div>
                  {/*  <label className="block font-medium" htmlFor="">
                      Password
                    </label> */}
                  <Input
                    className="outline-none w-full flex items-center pl-[10px] h-[30px] rounded placeholder:opacity-30 placeholder:font-thin placeholder:italic"
                    type="password"
                    placeholder="********"
                    register={register('password')}
                    bg={true}
                    label="Password"
                  />
                  {errors.password && (
                    <InlineError text={errors.password.message} />
                  )}
                </div>

                <div className="flex flex-row-reverse">
                  <p
                    className="font-medium text-sm"
                    style={{ color: '#7F56D9' }}
                  >
                    Forgot password ?
                  </p>
                </div>

                <button
                  className="w-full h-[30px] rounded font-medium"
                  style={{ backgroundColor: '#7F56D9' }}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    'Loading...'
                  ) : (
                    <>
                      {/* <FiLogIn /> */}
                      Sign In
                    </>
                  )}
                </button>

                <button className="flex items-center bg-white w-full  h-[30px] my-[10px] rounded gap-x-[10px] justify-center">
                  <FaFacebook className="text-blue-400 text-xl" />
                  <p className="font-medium">Sign in with Facebook</p>
                </button>

                <button className="flex items-center bg-white w-full  h-[30px] rounded gap-x-[10px] justify-center">
                  <FcGoogle className="text-xl" />
                  <p className="font-medium">Sign in with Google</p>
                </button>

                <div className="flex justify-center">
                  <p className="font-thin text-black/50">
                    Don’t have an account?{' '}
                    <Link
                      to="/register"
                      className="font-medium text-blue-400 underline"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="w-[50%]  flex items-center justify-center">
            <LoginImage className="" />
          </div>
        </div>
      </div>
    </div>
    // {/* <ToastContainer /> */}
    // </Layout>
  );
};

export default Login;
