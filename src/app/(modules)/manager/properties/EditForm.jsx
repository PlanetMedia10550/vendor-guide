"use client";
import Label from "@/components/Front/UI/Label";
import Input from "@/components/Front/UI/Input";
import Submit from "@/components/Front/UI/Submit";
import TableCheckbox from "@/components/Front/Company/TableCheckbox";
import Link from "next/link";
import { useEffect, useState } from 'react';
import SelectDropdown from "@/components/Front/UI/SelectDropdown";
import TextArea from "@/components/Front/UI/TextArea";
import axios from "axios";
import {useForm} from "@/hooks/useForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';
import { getCookie } from "cookies-next";


const EditForm = ({user,navigate,onClose,propertie,setPropertie}) => {
    // console.log(user.data)
    if(!getCookie('token')){
        navigate.push('/')
    }
    const [options, setOptions] = useState(['Register New Property']);
    const options2 = ['Multi Family','Commercial Property','Residential Property'];
    const [isLoding, setIsLoding] = useState(false);
    const [propertyLocation, setPropertyLocation] = useState(0);
    const [propertyType, setPropertyType] = useState(propertie.property_name?propertie.property_name:options2[0]);
    const [propertyName, setPropertyName] = useState(propertie.property_name);
    const [address, setAddress] = useState(propertie.address);
    const [address2, setAddress2] = useState(propertie.address_2);
    const [city, setCity] = useState(propertie.city);
    const [state, setState] = useState(propertie.state);
    const [zipCode, setZipCode] = useState(propertie.zip_code);
    const [image_id, setImageId] = useState(propertie.image_id);
    const { errors,setErrors, renderFieldError} = useForm();
    const [form, setForm] = useState({property_type:propertyType});
    const [isImageLoading, setImageIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [imageSrc, setImageSrc] = useState(propertie.image_url)
    const [propertyData, setPropertyData] = useState([])

    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
        
   }

    useEffect(() => {
        const loadPropertys = async () => {
            try {
              const response = await fetch(`${process.env.BASE_API_URL}property`,{
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${getCookie('token')}`
                    },
                })
         
              if (!response.ok) {
                throw new Error('Failed to submit the data. Please try again.')
              }
         
              // Handle response if necessary
            const pdata = await response.json()
            if(pdata){
                setPropertyData(pdata.data)
                setPropertie(dataProp.data);
                let newpd = pdata.data
                const updatedOptions = [];
                {newpd && newpd.map((row) => (
                    updatedOptions[row.id] = row.property_name
                )
                )}
                setOptions([...options, ...updatedOptions]);
            }
            } catch (error) {
              // Capture the error message to display to the user
              console.error(error)
            }
        }
        loadPropertys();
    }, [])
    
    const makeRequest = async (e) => {
        e.preventDefault();
        // console.log(form);
        setErrors(null);
        setIsLoding(true);
        var formData = new FormData(e.target);
        formData.append('_method','PUT');
        await axios.post(`${process.env.BASE_API_URL}property/${propertie.id}`, formData).then(response => {
            // console.log(response.data.data);
            setIsLoding(false);
            onClose(true);
            loadPropertys();
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
        event.preventDefault()
        setImageIsLoading(true)
        setError(null) // Clear previous errors when a new request starts
        setImageSrc(null);
        try {
          const formData = new FormData()
          formData.append('image',event.target.files[0]);
          const response = await fetch(`${process.env.BASE_API_URL}image`, {
            method: 'POST',
            body: formData,
          })
     
          if (!response.ok) {
            throw new Error('Failed to submit the data. Please try again.')
          }
     
          // Handle response if necessary
          const data = await response.json()
        //   console.log(data.image_url)
          setImageSrc(data.image_url)
          setImageId(data.id);
          setForm({...form, ['image_id']: data.id});
          // ...
        } catch (error) {
          // Capture the error message to display to the user
          setError(error.message)
          console.error(error)
        } finally {
            setError(null)
            setImageIsLoading(false)
        }
    }


    return (

        <div className="w-full">
            <form action="#" method="POST" className="mx-auto mt-6" onSubmit={makeRequest}>
                <div className="w-full">
                    <div className="w-full my-2 pb-6" >
                        <Label label="Property Type" required="required" />

                        <div className="mt-2.5">
                            <select name="property_type" value={propertyType} className="w-full bg-gray-200 border border-gray-200 text-[#c13e27] text-lg py-3 px-4 pr-8 mb-3 rounded"  onChange={e => {handleForm('property_type',e.target.value);setPropertyType(e.target.value)}} >
                                {options2 && options2.map((option1,index1) => (
                                    <option key={index1} value={option1}>
                                    {option1}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {renderFieldError('property_type')}
                    </div>
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="col-span-2 my-2 pb-6" >
                            <Label label="Property Name" required="required" />

                            <div className="mt-2.5">
                                <Input name="property_name" id="property_name" value={propertyName} onChange={e => {handleForm('property_name',e.target.value);setPropertyName(e.target.value)}} />
                            </div>
                            {renderFieldError('property_name')}
                        </div>
                    </div>
                    <div className="w-half my-2 pb-6" >
                        <Label label="Street Address" required="required" />

                        <div className="mt-2.5">
                            <Input name="address" id="address" value={address} onChange={e => {handleForm('address',e.target.value);setAddress(e.target.value)}} />
                        </div>
                        {renderFieldError('address')}
                    </div>
                    <div className="w-half my-2 pb-6" >
                        <Label label="Address Line 2"  />

                        <div className="mt-2.5">
                            <Input name="address_2" id="address2" value={address2} onChange={e => {handleForm('address_2',e.target.value);setAddress2(e.target.value)}} />
                        </div>
                        {renderFieldError('address_2')}
                    </div>
                    <div className="grid grid-cols-3 gap-x-4">
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="City" required="required" />

                            <div className="mt-2.5">
                                <Input name="city" id="city" value={city} onChange={e => {handleForm('city',e.target.value);setCity(e.target.value)}} />
                            </div>
                            {renderFieldError('city')}
                        </div>
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="State" required="required" />

                            <div className="mt-2.5">
                                <Input name="state" id="state" value={state} onChange={e => {handleForm('state',e.target.value);setState(e.target.value)}} />
                            </div>
                            {renderFieldError('state')}
                        </div>
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Zip Code" required="required" />

                            <div className="mt-2.5">
                                <Input name="zip_code" id="zip_code" value={zipCode} onChange={e => {handleForm('zip_code',e.target.value);setZipCode(e.target.value)}} />
                            </div>
                            {renderFieldError('zip_code')}
                        </div>
                    </div>
                    <div className="w-half my-2 pb-6" >
                        <Label label="Have Photos?"  />
                        <div className="grid grid-cols-2 gap-x-4">
                        <div className="col-span-2 mt-2.5">
                            <Input type="hidden" name="image_id" id="image_id" value={image_id}  />
                            <Input type="file" name="image" id="image" style={{width:'80%',float:'left'}}  onChange={onImageUpload} />
                            {isImageLoading ? <div style={{width:'20%',float:'left'}}><FontAwesomeIcon icon={faSpinner} spin /></div> : ''}
                            {imageSrc &&
                                <img src={imageSrc} style={{width:'20%',float:'left',height:'54px'}} className="pl-5" />
                            }
                        </div>
                        <div className="col-span-2 mt-2">
                        {renderFieldError('image_id')}
                        {error && <div className="text-[#c13e27] text-sm font-normal">{error}</div>}
                        </div>
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
    );
};

export default EditForm;