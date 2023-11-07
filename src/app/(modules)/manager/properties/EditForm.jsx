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


const EditForm = ({user,onClose,id}) => {
    // console.log(user.data)
    
    const [options, setOptions] = useState(['Register New Property']);
    const options2 = ['Multi Family','Commercial Property','Residential Property'];
    const [isLoding, setIsLoding] = useState(false);
    const [firstName, setFirstName] = useState(user.data.first_name);
    const [lastName, setLastName] = useState(user.data.last_name);
    const [propertyLocation, setPropertyLocation] = useState(0);
    const [propertyType, setPropertyType] = useState(options2[0]);
    const [propertyName, setPropertyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [address, setAddress] = useState(user.data.address);
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState(user.data.city);
    const [state, setState] = useState(user.data.state);
    const [zipCode, setZipCode] = useState(user.data.postal_code);
    const [mobile, setMobile] = useState(user.data.mobile);
    const [projectType, setProjectType] = useState('');
    const [projectName, setProjectName] = useState('');
    const [projectDetails, setProjectDetails] = useState('');
    const [image_id, setImageId] = useState('');
    const { errors,setErrors, renderFieldError} = useForm();
    const [form, setForm] = useState({property_id:propertyLocation,property_type:propertyType});
    const [isImageLoading, setImageIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [imageSrc, setImageSrc] = useState(null)
    const [propertyData, setPropertyData] = useState([])

    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
        
   }
    
   const handlePropartyLocation = async (e) => {
        handleForm('property_id',e.target.value); 
        setPropertyLocation(e.target.value)
        
        const response2 = await fetch(`${process.env.BASE_API_URL}property/${e.target.value}`,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getCookie('token')}`
            },
        })
 
        if (!response2.ok) {
            throw new Error('Failed to submit the data. Please try again.')
        }
        
        // Handle response if necessary
        var dataProp = await response2.json()
        var singleProparty= dataProp.data;
        // console.log(singleProparty)
        if(singleProparty){
            setPropertyName(singleProparty.property_name)
            setPropertyType(singleProparty.property_type)
            setZipCode(singleProparty.zip_code)
            setState(singleProparty.state)
            setCity(singleProparty.city)
            setAddress(singleProparty.address)
            setAddress2(singleProparty.address_2)
        }
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
        formData.append('vendor_id',vendor_id);
        await axios.post(`${process.env.BASE_API_URL}property`, formData).then(response => {
            // console.log(response.data.data);
            setIsLoding(false);
            onClose(true)
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
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="First Name" required="required" />

                            <div className="mt-2.5">
                                <Input name="first_name" id="first_name" value={firstName}  onChange={e => {handleForm('first_name',e.target.value);
                                setFirstName(e.target.value)}} />
                            </div>
                            {renderFieldError('first_name')}
                        </div>
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Last Name" required="required" />

                            <div className="mt-2.5">
                                <Input name="last_name" id="last_name" value={lastName} onChange={e => {handleForm('last_name',e.target.value);setLastName(e.target.value)}} />
                            </div>
                            {renderFieldError('last_name')}
                        </div>
                    </div>
                    <div className="w-full my-2 pb-6" >
                        <Label label="Property Location" required="required" />

                        <div className="mt-2.5">
                            <select name="property_id" value={propertyLocation} className="w-full bg-gray-200 border border-gray-200 text-[#c13e27] text-lg py-3 px-4 pr-8 mb-3 rounded"  onChange={handlePropartyLocation} >
                                {options && options.map((option,index) => (
                                    <option key={index} value={index}>
                                    {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {renderFieldError('property_id')}
                    </div>
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
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Property Name" required="required" />

                            <div className="mt-2.5">
                                <Input name="property_name" id="property_name" value={propertyName} onChange={e => {handleForm('property_name',e.target.value);setPropertyName(e.target.value)}} />
                            </div>
                            {renderFieldError('property_name')}
                        </div>
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Job Title" required="required" />

                            <div className="mt-2.5">
                                <Input name="job_title" id="job_title" value={jobTitle} onChange={e => {handleForm('job_title',e.target.value);setJobTitle(e.target.value)}} />
                            </div>
                            {renderFieldError('job_title')}
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
                        <Label label="Phone Number" required="required" />

                        <div className="mt-2.5">
                            <Input name="phone" id="phone" value={mobile} onChange={e => {handleForm('phone',e.target.value);setMobile(e.target.value)}} />
                        </div>
                        {renderFieldError('phone')}
                    </div>
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Project type" required="required" />

                            <div className="mt-2.5">
                                <Input name="project_type" id="project_type" value={projectType} onChange={e => {handleForm('project_type',e.target.value);setProjectType(e.target.value)}} />
                            </div>
                            {renderFieldError('project_type')}
                        </div>
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Project Name" required="required" />

                            <div className="mt-2.5">
                                <Input name="project_name" id="project_name" value={projectName} onChange={e => {handleForm('project_name',e.target.value);setProjectName(e.target.value)}} />
                            </div>
                            {renderFieldError('project_name')}
                        </div>
                    </div>
                    <div className="w-half my-2 pb-6" >
                        <Label label="Project Details"  />

                        <div className="mt-2.5">
                            <TextArea name="project_detail" id="project_detail" value={projectDetails} onChange={e => {handleForm('project_detail',e.target.value);setProjectDetails(e.target.value)}} rows="7" />
                        </div>
                        {renderFieldError('project_detail')}
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