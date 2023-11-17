"use client";
import Label from "@/components/Front/UI/Label";
import Input from "@/components/Front/UI/Input";
import Submit from "@/components/Front/UI/Submit";
import { useState } from 'react';
// import SelectDropdown from "./Front/UI/SelectDropdown";
// import TextArea from "./Front/UI/TextArea";
import axios from "axios";
import {useForm} from "@/hooks/useForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCookie } from "cookies-next";
import { useAuth } from "@/context/UserContext";
import { useRouter } from "next/navigation";

const ProfileForm = ({user}) => {
    console.log(user);
    // return true;
    const [isLoding, setIsLoding] = useState(false);
    const [users, setUser] = useState(user);
    // console.log(users);
    // const [image_id, setImageId] = useState(user?.image_id);
    const [imageSrc, setImageSrc] = useState(user?.image_url);
    const [isImageLoading, setImageIsLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {errors,setErrors, renderFieldError} = useForm();
    const [form, setForm] = useState([]);
    const [error, setError] = useState(null);
    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
        
   }


    const makeRequest = async (e) => {
        // e.preventDefault();
        setErrors(null);
        setIsLoding(true);
        var formData = new FormData(e.target);
        formData.append('_method','PUT');
        await axios.post(`${process.env.BASE_API_URL}vendor/${user.id}`, formData).then(response => {
            // console.log(response.data);
            setIsLoding(false);
            // onClose(true)
            toast.success(response.data.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }).catch(error => {
            setIsLoding(false);
            if(error?.response?.data?.errors) {
                setErrors(error.response.data.errors);
            }
        });


    };

    async function onImageUpload(event) {
        event.preventDefault();
        setImageIsLoading(true);
        setError(null);
        setImageSrc(null);
      
        try {
          const formData = new FormData();
          formData.append('image', event.target.files[0]);
      
          const response = await fetch(`${process.env.BASE_API_URL}image`, {
            method: 'POST',
            body: formData,
          });
      
          if (!response.ok) {
            throw new Error('Failed to submit the data. Please try again.');
          }
      
          const data = await response.json();
          console.log(data.image_url);
      
          setUser({
            ...users,
            image_id: data.id,
            image_url: data.image_url,
          });
          setForm({
            ...form,
            image_id: data.file_id,
          });
        } catch (error) {
          setError(error.message);
          console.error(error);
        } finally {
          setError(null);
          setImageIsLoading(false);
        }
      }

  
    return (
        <section>
        <div className="container mx-auto max-w-3xl">

        <div className="w-full">
            <form action="#" method="POST" className="mx-auto mt-6" onSubmit={makeRequest}>
                <div className="w-full">
                <div className="w-half my-2 pb-6" >
                        <Label label="Have Photos?"  />
                        <div className="grid grid-cols-12 gap-x-4">
                        <div className="col-span-3 mt-2">
                        {isImageLoading ? <div style={{width:'20%',float:'left'}}><FontAwesomeIcon icon={faSpinner} spin /></div> : ''}
                            {imageSrc &&
                                <img src={imageSrc} style={{height:'100px',width:'100px'}} className="mx-auto rounded-full" />
                            }
                       </div>
                        <div className="col-span-9 mt-2.5">
                            <Input type="hidden" name="image_id" id="image_id" value={users.image_id}  />
                            <Input type="file" name="image" id="image" style={{width:'100%',float:'left'}}  onChange={onImageUpload} />
                           
                        </div>
                        
                        {renderFieldError('image_id')}
                        {error && <div className="text-[#c13e27] text-sm font-normal">{error}</div>}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="First Name" required="required" />
                            <div className="mt-2.5">
                                <Input name="first_name" id="first_name" value={users.first_name}  onChange={e => {handleForm('first_name',e.target.value);
                                setUser({...users,first_name:e.target.value})}} />
                            </div>
                            {renderFieldError('first_name')}
                        </div>
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Last Name" required="required" />

                            <div className="mt-2.5">
                                <Input name="last_name" id="last_name" value={users.last_name} onChange={e => {handleForm('last_name',e.target.value);setUser({...users,last_name:e.target.value})}} />
                            </div>
                            {renderFieldError('last_name')}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Name" required="required" />
                            <div className="mt-2.5">
                                <Input name="name" id="name" value={users.name}  onChange={e => {handleForm('name',e.target.value);
                                setUser({...users,name:e.target.value})}} />
                            </div>
                            {renderFieldError('name')}
                        </div>
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Short Description" required="required" />
                            <div className="mt-2.5">
                                <Input name="short_description" id="short_description" value={users.short_description}  onChange={e => {handleForm('short_description',e.target.value);
                                setUser({...users,short_description:e.target.value})}} />
                            </div>
                            {renderFieldError('short_description')}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Description" required="required" />

                            <div className="mt-2.5">
                                <Input name="description" id="description" value={users.description} onChange={e => {handleForm('description',e.target.value);setUser({...users,description:e.target.value})}} />
                            </div>
                            {renderFieldError('description')}
                        </div>
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Email Address" required="" />
                            <div className="mt-2.5">
                                <Input name="email" id="email" value={users.email} disable="disabled"/>
                            </div>
                            {renderFieldError('email')}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Phone Number" required="required" />
                            <div className="mt-2.5">
                                <Input name="mobile" id="mobile" value={users.mobile} onChange={e => {handleForm('mobile',e.target.value);setUser({...users,mobile:e.target.value})}} />
                            </div>
                            {renderFieldError('phone')}
                        </div>
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Address" required="required" />
                            <div className="mt-2.5">
                            <Input name="address" id="address" value={users.address} onChange={e => {handleForm('address',e.target.value);setUser({...users,address:e.target.value})}} />
                            </div>
                            {renderFieldError('address')}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="City" required="required" />
                            <div className="mt-2.5">
                                <Input name="city" id="city" value={users.city} onChange={e => {handleForm('city',e.target.value);setUser({...users,city:e.target.value})}} />
                            </div>
                            {renderFieldError('city')}
                        </div>
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="State" required="required" />

                            <div className="mt-2.5">
                                <Input name="state" id="state" value={users.state} onChange={e => {handleForm('state',e.target.value);setUser({...users,state:e.target.value})}} />
                            </div>
                            {renderFieldError('state')}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Country" required="required" />
                            <div className="mt-2.5">
                                <Input name="country" id="country" value={users.country} onChange={e => {handleForm('country',e.target.value);setUser({...users,country:e.target.value})}} />
                            </div>
                            {renderFieldError('country')}
                        </div>
                        <div className="col-span-1 my-2 pb-6" >
                        <Label label="Zip Code" required="required" />
                        <div className="mt-2.5">
                            <Input name="zip_code" id="zip_code" value={users.zip_Code} onChange={e => {handleForm('zip_code',e.target.value);setUser({...users,zip_code:e.target.value})}} />
                        </div>
                        {renderFieldError('zip_code')}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Website" required="required" />

                            <div className="mt-2.5">
                                <Input name="website_url" id="website_url" value={users.website_url} onChange={e => {handleForm('website_url',e.target.value);setUser({...users,website_url:e.target.value})}} />
                            </div>
                            {renderFieldError('last_name')}
                        </div>
                    </div>
                    <div className="w-half my-2" >
                        <div className="my-4">

                            <Submit button="Submit" is_loding={isLoding} disabled={isLoding} />
                        </div>
                    </div>
                </div>
                <div className="mt-2 mb-8" >

                </div>
            </form>
        </div>
        </div>
        </section>
    );
};

export default ProfileForm;