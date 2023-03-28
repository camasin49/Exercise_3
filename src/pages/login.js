import React from "react";
import {useForm} from "react-hook-form";
export default function Login(){
    const{handleSubmit, register, formState:{errors},}=useForm();
        return (
            <div className="w-full min-h-screen flex justify-center bg-gray-900">
              <div className="relative w-[380px] h-[420px] bg-gray-800 rounded-lg overflow-hidden">
               <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-red-500 via-blue-500 
               to-transparent-top-[50%] -left-[50%] animate-spin-slow origin-bottom-right"></div>
                <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-yellow-500 via-violet-500
               to-transparent-top-[50%] -left-[50%] animate-spin-delay origin-bottom-right"> </div>
                   <div className="absolute inset-1 bg-gray-800 rounded-lg z-10 p-5">
                    <form onSubmit={handleSubmit()}>
                        <h2 className="text-x1 font-semibold text-blue-500 text-center mb-12">Sign In</h2>
                        <div className="relative flex flex-col mb-12">
                            <input
                            type="email"
                            id="email"
                            autoFocus
                            placeholder=""
                            className="relative z-10 border-0 border-b-2 border-blue-500 h-10 bg-transparent text-gray-100
                            outline-none px-2 peer"
                            {...register('email', {
                                required: 'please enter email',
                                pattern:{
                                    value: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+]\.[A-Za-z]{1,63}$/i,
                                    message: 'please enter valid email'
                                }
                            })}
                            />
                            {errors.email &&(
                                <div className="text-red-500 text-xs absolute -bottom-5">{errors.email.message}</div>
                            )}
                            <i className="bg-violet-500 rounded w-full bottom-0 left-0 absolute h-10 -z-10 duration-500 origin-bottom transform peer-focus: h-10
                            peer-placeholder-shown:h-[0.5px]"></i>
                            <label className="peer-focus:font-medium absolute text-sm duration-500 transform -translate-y-8 scale-75 top-3
                            left-0 -z-10 origin-[10] peer-focus-left-0 peer-focus:text-violet-500 text-lime-500-peer-placeholder-shown:
                            translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-8"
                            >Enter Email</label>
                        </div>

                        <div className="relative flex flex-col mb-12">
                            <input
                            type="password"
                            id="password"
                            autoFocus
                            placeholder=""
                            className="relative z-10 border-0 border-b-2 border-blue-500 h-10 bg-transparent text-gray-100
                            outline-none px-2 peer"
                            {...register('password', {
                                required: 'please enter password',
                                pattern:{
                                    value: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+]\.[A-Za-z]{1,63}$/i,
                                    message: 'please enter valid password'
                                }
                            })}
                            />
                            {errors.email &&(
                                <div className="text-red-500 text-xs absolute -bottom-5">{errors.password.message}</div>
                            )}
                            <i className="bg-violet-500 rounded w-full bottom-0 left-0 absolute h-10 -z-10 duration-500 origin-bottom transform peer-focus: h-10
                            peer-placeholder-shown:h-[0.5px]"></i>
                            <label className="peer-focus:font-medium absolute text-sm duration-500 transform -translate-y-8 scale-75 top-3
                            left-0 -z-10 origin-[10] peer-focus-left-0 peer-focus:text-violet-500 text-blue-500-peer-placeholder-shown:
                            translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-8"
                            >Enter Password</label>
                        </div>
                        <button type="submit"className="py-3 text-gray-100 bg-blue-500 w-full rounded hover:bg-violet-600
                        hover-scale-105 duration-300">Login</button>
                    </form>

                   </div>

              </div>
           </div>
    )
}