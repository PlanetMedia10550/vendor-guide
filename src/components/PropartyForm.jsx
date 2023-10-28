"use client";
import Label from "@/components/Front/UI/Label";
import Input from "@/components/Front/UI/Input";
import Submit from "@/components/Front/UI/Submit";
import TableCheckbox from "@/components/Front/Company/TableCheckbox";
import Link from "next/link";
import { useEffect, useState } from 'react';
import SelectDropdown from "./Front/UI/SelectDropdown";
import TextArea from "./Front/UI/TextArea";
import axios from "axios";
import {useForm} from "@/hooks/useForm";

const PropartyForm = ({user}) => {
    const options = ['Register New Property'];
    const options2 = ['Multi Family','Commercial Property','Residential Property'];
    const [isLoding, setIsLoding] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [propertyLocation, setPropertyLocation] = useState(options[0]);
    const [propertyType, setPropertyType] = useState(options2[0]);
    const [propertyName, setPropertyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [mobile, setMobile] = useState('');
    const [projectType, setProjectType] = useState('');
    const [projectName, setProjectName] = useState('');
    const [projectDetails, setProjectDetails] = useState('');
    const [image_id, setImageId] = useState('');
    const { errors,setErrors, renderFieldError} = useForm();
    const [form, setForm] = useState({});

    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
   }


    // const handlePropertyLocation = (selectedOption) => {
    //     // console.log(`Selected option: ${selectedOption}`);
    //     setPropertyLocation(selectedOption);
    //     handleForm('property_location',propertyLocation)
    // };
    // const handlePropertyType = (selectedOption) => {
    //     console.log(`Selected option: ${selectedOption}`);
    //     setPropertyType(selectedOption);
        
    // };
    // setPropertyLocation(options[0]);
    // setPropertyType(options2[0]);
    // console.log(propertyType);
    // useEffect(() => {
    //     setPropertyLocation(options[0]);
    //     setPropertyType(options2[0]);
    //     console.log(propertyLocation);
    // }, [])
    const makeRequest = async (e) => {
        e.preventDefault();
        // handleForm('property_location',propertyLocation);
        // handleForm('property_type',propertyType);
        // setForm({...form, ['property_location']: propertyLocation});
        // setForm({...form, ['property_type']: propertyType});
        console.log(form);
        setErrors(null);
        setIsLoding(true);
        await axios.post(`${process.env.BASE_API_URL}property`, form).then(response => {
            // console.log(response.data.data);
            setIsLoding(false);
        }).catch(error => {
            setIsLoding(false);
            // console.log(error);
            // if(error.response.su){

            // }
            if(error?.response?.data?.errors) {
                setErrors(error.response.data.errors);
            }
        });

    };

    return (

        <div className="w-full">
            <form action="#" method="POST" className="mx-auto mt-6" onSubmit={makeRequest}>
                <div className="w-full">
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="First Name" required="required" />

                            <div className="mt-2.5">
                                <Input name="first_name" id="first_name"  onChange={e => handleForm('first_name',e.target.value)} />
                            </div>
                            {renderFieldError('first_name')}
                        </div>
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Last Name" required="required" />

                            <div className="mt-2.5">
                                <Input name="last_name" id="last_name" onChange={e => handleForm('last_name',e.target.value)} />
                            </div>
                            {renderFieldError('last_name')}
                        </div>
                    </div>
                    <div className="w-full my-2 pb-6" >
                        <Label label="Property Location" required="required" />

                        <div className="mt-2.5">
                            <SelectDropdown options={options} onSelect={setPropertyLocation} />
                        </div>
                        {renderFieldError('property_location')}
                    </div>
                    <div className="w-full my-2 pb-6" >
                        <Label label="Property Type" required="required" />

                        <div className="mt-2.5">
                            <SelectDropdown options={options2} onSelect={setPropertyType} />
                        </div>
                        {renderFieldError('property_type')}
                    </div>
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Property Name" required="required" />

                            <div className="mt-2.5">
                                <Input name="property_name" id="property_name" onChange={e => handleForm('property_name',e.target.value)} />
                            </div>
                            {renderFieldError('property_name')}
                        </div>
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Job Title" required="required" />

                            <div className="mt-2.5">
                                <Input name="job_title" id="job_title" onChange={e => handleForm('job_title',e.target.value)} />
                            </div>
                            {renderFieldError('job_title')}
                        </div>
                    </div>
                    <div className="w-half my-2 pb-6" >
                        <Label label="Street Address" required="required" />

                        <div className="mt-2.5">
                            <Input name="address" id="address"  onChange={e => handleForm('address',e.target.value)} />
                        </div>
                        {renderFieldError('address')}
                    </div>
                    <div className="w-half my-2 pb-6" >
                        <Label label="Address Line 2"  />

                        <div className="mt-2.5">
                            <Input name="address2" id="address2"  onChange={e => handleForm('address_2',e.target.value)} />
                        </div>
                        {renderFieldError('address_2')}
                    </div>
                    <div className="grid grid-cols-3 gap-x-4">
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="City" required="required" />

                            <div className="mt-2.5">
                                <Input name="city" id="city"  onChange={e => handleForm('city',e.target.value)} />
                            </div>
                            {renderFieldError('city')}
                        </div>
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="State" required="required" />

                            <div className="mt-2.5">
                                <Input name="state" id="state"  onChange={e => handleForm('state',e.target.value)} />
                            </div>
                            {renderFieldError('state')}
                        </div>
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Zip Code" required="required" />

                            <div className="mt-2.5">
                                <Input name="zip_code" id="zip_code"  onChange={e => handleForm('zip_code',e.target.value)} />
                            </div>
                            {renderFieldError('zip_code')}
                        </div>
                    </div>
                    <div className="w-half my-2 pb-6" >
                        <Label label="Phone Number" required="required" />

                        <div className="mt-2.5">
                            <Input name="mobile" id="mobile"  onChange={e => handleForm('phone',e.target.value)} />
                        </div>
                        {renderFieldError('phone')}
                    </div>
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Project type" required="required" />

                            <div className="mt-2.5">
                                <Input name="project_type" id="project_type"  onChange={e => handleForm('project_type',e.target.value)} />
                            </div>
                            {renderFieldError('project_type')}
                        </div>
                        <div className="col-span-1 my-2 pb-6" >
                            <Label label="Project Name" required="required" />

                            <div className="mt-2.5">
                                <Input name="project_name" id="project_name"  onChange={e => handleForm('project_name',e.target.value)} />
                            </div>
                            {renderFieldError('project_name')}
                        </div>
                    </div>
                    <div className="w-half my-2 pb-6" >
                        <Label label="Project Details"  />

                        <div className="mt-2.5">
                            <TextArea name="project_detail" id="project_detail"  onChange={e => handleForm('project_detail',e.target.value)} rows="7" />
                        </div>
                        {renderFieldError('project_detail')}
                    </div>
                    <div className="w-half my-2 pb-6" >
                        <Label label="Have Photos?"  />

                        <div className="mt-2.5">
                            <Input type="file" name="image_id" id="image_id" value={image_id} onChange={e => setImageId(e.target.value)} />
                        </div>
                        {renderFieldError('image_id')}
                    </div>
                    <div className="my-4">

                        <Submit button="Submit" is_loding={isLoding} disabled={isLoding} />
                    </div>
                </div>
                <div className="mt-2 mb-8" >

                </div>
            </form>
        </div>
    );
};

export default PropartyForm;