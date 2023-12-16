import { Button } from 'primereact/button';
import Loading from "@/app/loadingScreen"
import { useEffect } from "react";
import { useState } from 'react';
import { getCookie } from 'cookies-next';
import { toast } from 'react-toastify'; 
import axios from 'axios'; 


const AssignStatusButton = ({ bid,setVendorsData ,vendorsData}) => {
   
  const [isLoading, setLoading] = useState(false)
  const [oStatus, setOStatus] = useState()
  const [statusOption, setStatusOption] = useState(['Issue','Not Issue'])
  // console.log(bid.bid.status)
  const allResult = async () => {
    try {
      const response2 = await fetch(`${process.env.BASE_API_URL}bid-vendor/${bid.id}`,{
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
      var newData = dataProp.data;
      // console.log(newData);
      const updatedRows = newData.map(item => ({
        'bid':item?.bid,
        'bid_status':item?.is_bid_status,
        'id':item?.bid_id,
        'name':item.vendor.name,
        'email':item.vendor.email,
        'mobile':item.vendor.mobile,
        'vendor_id':item?.vendor_id,
        'manager_id':item?.manager_id,
        'favorite':item.is_favourite,
        'bid_assgin_vendor':item.is_bid_assgin,
      }));
      setVendorsData(updatedRows);
      
      // console.error(requestsQuotes)
    } catch (error) {
      // Capture the error message to display to the user
      console.error(error)
    }
  }
  

  const handleStatusChange = async (currentStatus) => {
    // setChangeStatus(currentStatus) 
    const data = {
      'bid_id': bid.id,
      'manager_id': bid.manager_id,
      'vendor_id': bid.vendor_id
    }; 
    axios.defaults.headers.common['Authorization'] = `Bearer ${getCookie('token')}`;
    const response = await axios.post(`${process.env.BASE_API_URL}bid-assgin-vendor`, data).then(response => {
        const result = response.data; 
        setOStatus(currentStatus);
        allResult();
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
             
    })
  };
  

  
  return (
<> 
      <select name="company_id" className="w-full bg-gray-100 border border-gray-100 text-sm py-3 px-4 pr-8 rounded"
        value={bid.bid_assgin_vendor?.id?0:1} onChange={(e) => {
          handleStatusChange(e.target.value);
          // console.log(e.target.value)
         }} disabled={bid?.bid?.status==1?true:false}
      > 
        {statusOption?.map((option, index) => (
          <option key={index} value={index}>
            {option}
          </option>
        ))}
      </select> 
    </>
  );
}

export default AssignStatusButton;