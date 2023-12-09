'use client';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Fragment,useRef } from 'react';
import { getCookie } from 'cookies-next';
import axios from '@/lib/axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import Submit from '@/components/Front/UI/Submit';
import { useAuth } from '@/context/UserContext';
import LoadingComponents from '@/components/LoadingComponents';



export default function page({params}) {
    const bidId = params.id[0];
    const bidReceiverId = params.id[1];
    const {user}  = useAuth();
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [bidName,setBidName] = useState('');
    const [message,setMessage] = useState('');
    const [textBox,setTextBox] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        if (messagesEndRef) {
            messagesEndRef.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }

    }

    useEffect(()=>{
        async function getMessages() {
            axios.defaults.headers.common['Authorization'] = `Bearer ${getCookie('token')}`;
            await axios.get(`bid-message-list/${bidId}/${bidReceiverId}`).then(response => {
                var messages = response.data;
                if(messages.status==true){
                    var newMessagesData = messages?.data?.list?.map((v) => ({
                        sender: v.sender_id,
                        receiver: v.receiver_id,
                        receiver_name: v.receiver?.name,
                        sender_name: v.sender?.name,
                        message: v.message,
                        time: v.time,
                        isload:false
                    }));
                    setTextBox(newMessagesData);
                    setBidName(messages?.data?.bid?.project_name)
                    setIsPageLoading(false)
                }
            }).catch(error => {
                var errors = error?.response?.data?.data;
            });
        
        };

        getMessages()
    },[])

    useEffect(() => {
        scrollToBottom()
    }, []);

    async function formAction(e) {
        e.preventDefault();
        setIsLoading(true);
        setTextBox((prevTextBox) => [...prevTextBox, { 
            sender:user.user_id,
            receiver:bidReceiverId,
            receiver_name: '',
            sender_name: user.name,
            message: message,
            time: new Date().toLocaleTimeString("en-US",{
                hour: "2-digit",
                minute: "2-digit",
              }),
            isload:true
         }]);
        scrollToBottom();
        var formData = new FormData(e.target);
        formData.append('bid_id',bidId);
        formData.append('receiver_id',bidReceiverId);
        await axios.post(`${process.env.BASE_API_URL}bid-message`, formData).then(response => {
            var messages = response.data;
            setIsLoading(false);
            setMessage('');
        }).catch(error => {
            setIsLoading(false);
            if(error?.response?.data?.errors) {
                setErrors(error.response.data.errors);
            }
        });
    }



    return (
        <section className='py-14 bg-[#F6F7F8]'>
            
            <div className={[styles.container, styles.clearfix].join(' ')} >
                <div className={[styles.chat,'border','rounded'].join(' ')}>
                    <div className={[styles['chat-header'],styles.clearfix].join(' ')}>
                        <div className={[styles['chat-with']]}>
                            <div className={[styles['chat-about']]}>
                            {bidName}
                            </div>
                        </div>
                    </div>
                

                    <div className={[styles['chat-history']]} ref={messagesEndRef}>
                    { isPageLoading ? 
                        <div className="flex justify-center items-center h-full">
                            <LoadingComponents />
                        </div> :
                        <ul >
                            {textBox && textBox?.map((chat,i) => (
                                <Fragment key={i} >
                                    { chat.isLoad==true ? 
                                        <li>
                                            <div className="w-full text-right mb-5 pr-5">
                                                <span className={styles['loader-40']}></span>
                                            </div>
                                        </li> : 
                                        chat.receiver==bidReceiverId && (
                                        <li  className={[styles['clearfix']]}>
                                            <div className="w-full text-right mb-5">
                                                <span className="text-gray-400" >{chat.time}</span> &nbsp; &nbsp;
                                                <span > {chat.receiver==bidReceiverId ? chat.sender_name : chat.receiver_name} {styles.me && <FontAwesomeIcon icon={faCircle} className={[styles.me].join(' ')} />}</span> 

                                            </div>
                                            <div className={[styles.message, styles['other-message'], styles['float-right']].join(' ')}>
                                                {chat.message}
                                            </div>
                                            
                                        </li>
                                    )}
                                    
                                    
                                    {chat.sender==bidReceiverId && (
                                    <li>
                                        <div className="w-full text-left mb-5">
                                            <span >{chat.receiver==bidReceiverId ? chat.receiver_name : chat.sender_name} <FontAwesomeIcon icon={faCircle} className={[styles.online].join(' ')} /> 
                                            </span>
                                            <span className="text-gray-400 ml-2">{chat.time}</span>
                                            
                                        </div>
                                        <div className={[styles.message, styles['my-message']].join(' ')}>
                                            {chat.message}
                                        </div>
                                        
                                    </li>
                                    )}
                                </Fragment>
                            ))}
                        </ul>
                        }
                    </div>

                    <div className={[styles['chat-message'],styles['clearfix'],'border-t'].join(' ') }>
                        <form action="" method='POST' onSubmit={formAction}>
                        
                        <textarea name="message" value={message} onChange={(e)=>setMessage(e.target.value)} className="bg-gray-100" id={[styles['message-to-send']]} placeholder="Type your message" rows="3" disabled={isPageLoading?isPageLoading:isLoading}></textarea>
                        <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                        <i className="fa fa-file-image-o"></i>
                        <Submit button="Submit" is_loding={isLoading} disabled={isPageLoading?isPageLoading:isLoading} />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};