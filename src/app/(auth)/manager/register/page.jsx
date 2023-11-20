"use client";
import Label from "@/components/Front/UI/Label";
import Input from "@/components/Front/UI/Input";
import Submit from "@/components/Front/UI/Submit";
import Right from "@/components/Front/Auth/Right";
import TableCheckbox from "@/components/Front/Company/TableCheckbox"
import Link from "next/link";
import { useState,useEffect } from 'react';
import { useAuth } from "@/context/UserContext";
import Head from "next/head";
import axios from "axios";

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company_id, setCompany] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [companies, setCompanies] = useState([]);
  // console.log(companies);
  const {register,renderFieldError,isLoding}  = useAuth();
  // console.log(user);

  useEffect(() => {
    // Fetch companies data
    axios.get(`${process.env.BASE_API_URL}company`)
      .then(response => {
        const result = response.data;
        if (Array.isArray(result.data)) {
          setCompanies(result.data);
        } else {
          console.error('API response data does not contain an array:', result.data);
        }
      })
      .catch(error => {
        console.error('Error fetching companies:', error);
      });
  }, []);

  const makeRequest = (e) => {
      e.preventDefault();
      register('manager',{
        company_id,
        name,
        email,
        password,
        password_confirmation: passwordConfirmation
    })

  };

 

  return (
    <>
        <Head>
            <title>Vendor Guide | Register</title>
        </Head>
      <div className="container mx-auto overflow-hidden px-24">
        <div className="mx-auto max-w-7xl">
          <div className="lg:mx-auto  max-w-4xl grid grid-cols-2 md:gap-x-16 md:gap-y-16 lg:max-w-none">

            <div className="md:col-span-2 lg:col-span-1 col-span-12 lg:-mr-16 order-2 sm:order-1 ">
              <div className="container mx-auto overflow-hidden p-12 md:pt-12 px-12 md:px-12 xl:px-12">
                <div className="">
                  <div className="absolute inset-x-0 top-[-10rem] -z-10 transhtmlForm-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">

                  </div>
                  <div className=" text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl  text-left">Manager Registration</h2>

                  </div>
                  <form action="#" method="POST" className="mx-auto mt-6" onSubmit={makeRequest}>
                    <div className="">
                    <div className="w-full my-2 pb-6">
                      <Label label="Company" required="required" />
                      <div className="mt-2.5">
                        <select
                          name="company_id"
                          className="w-full bg-gray-200 border border-gray-200 text-sm py-3 px-4 pr-8 mb-3 rounded"
                          value={company_id}
                          onChange={e => setCompany(e.target.value)} 
                        >
                          <option key="0" value="">
                            Select Company
                            </option>
                          {/* Map through companies and create options */}
                          {companies.map((company, index) => (
                            <option key={index} value={company.id}>
                              {company.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      {renderFieldError('company')}
                    </div>

                      <div className="w-full my-2 " >
                        <Label label="Name" required="required" />

                        <div className="mt-2.5">
                          <Input name="name" id="name" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        {renderFieldError('name')}
                      </div>
                      <div className="w-full my-2" >
                        <Label label="Email" required="required" />

                        <div className="mt-2.5">
                          <Input name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        {renderFieldError('email')}
                      </div>
                      <div className="w-full my-2">
                        <Label label="Password" required="required" />
                        <div className="mt-2.5">
                          <Input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        {renderFieldError('password')}
                      </div>
                      <div className="w-full my-2">
                        <Label label="Confirm Password" required="required" />
                        <div className="mt-2.5">
                          <Input type="password" name="password_confirmation" id="password_confirmation" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
                        </div>
                        {renderFieldError('password_confirmation')}
                      </div>
                      <div className="flex gap-2 pt-3">
                        <TableCheckbox />  <p className=" text-lg font-semibold"> Remember Me</p>
                      </div>

                      <div className="my-4">

                        <Submit button="Submit" is_loding={isLoding} disabled={isLoding} />
                      </div>

                      <div>
                        <Link href="/manager/login" className="text-[#c13e27] text-lg font-semibold">Login</Link>
                      </div>
                      <div>
                        {/* <Link href="#" className="text-[#c13e27] text-lg font-semibold">Forgot Password</Link> */}
                      </div>

                    </div>
                    <div className="mt-2 mb-8" >

                    </div>
                  </form>
                </div>
              </div>
            </div>
            <Right />

          </div>
        </div>
      </div>
    </>
  );
};


export default Page;
