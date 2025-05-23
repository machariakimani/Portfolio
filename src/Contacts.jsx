import X from './assets/X.jpg';
import Phone from './assets/Phone.jpg';
import Mail from './assets/Mail.jpg';
import Git from './assets/Git.jpg'
import Instagram from './assets/Instagram.jpg'
import React, {useEffect,useState} from 'react';
import "./Animations.css";



function Contacts(){

    const [isFirstVisible, setIsFirstVisible] = useState(false);
    

    useEffect(() => {
        const handleScroll = () => {
            const firstDiv = document.getElementById('Contacts');
            const firstRect = firstDiv.getBoundingClientRect();
            
            if (firstRect.top <= window.innerHeight) {
                setIsFirstVisible(true);
            }
           
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(


        <div id='Contacts'   className={` transform transition-transform duration-1000 ${isFirstVisible ? 'translate-y-0' : 'translate-y-full'
        } h-full flex flex-col scroll-mt-16 bg-[url(./assets/conts.jpg)] bg-no-repeat bg-cover dark:bg-black p-10`}  >
                <div className='mb-6  '>
                        <p className="text-center text-2xl underline underline-offset-8 "> Contacts</p>
                </div>

               

                <div className='grid lg:grid-cols-2   gap-4 px-20 mt-4'>

                <div id='ChatBox'  className='h-[500px] rounded-2xl backdrop-blur-[3px] border-[2px] border-solid border-gray-400 flex flex-col px-5 py-5 gap-y-2'>
                            <p className='text-center text-xl underline-offset-8 underline'>Send direct Email</p>

                            <div className='flex flex-col  px-2 mb-4'>
                                <label className=' mb-2'>Name</label>
                                <input placeholder='enter your name' className='border-[1px] border-gray-400 rounded-md py-2 px-2 outline-none'/>
                            </div>


                            <div className='flex flex-col  mb-4 px-2 '>
                                <label className=' mb-2'>enter your email address</label>
                                <input  className='border-[1px] border-gray-400 rounded-md py-2 px-2 outline-none ' placeholder='eg. example@gmail.com'/>
                            </div>

                            <div className='flex flex-col mb-4 px-2 '>
                                <label className=' mb-2'>Massage Content</label>
                                <textarea  className='border-[1px] border-gray-400 rounded-md py-2 px-2 outline-none h-24' />
                            </div>

                                    <div className='justify-center flex '>
                                    <button  className='bg-blue-700  text-white   rounded-md hover:bg-blue-500 px-6 py-2'>Send</button>
                                    </div>
                              
                </div>

                    <div id='Info' className='h-full pl-28'>
                        <p className='text-center text-2xl'>Contact info</p>

                        <div className='   '>
                        <div className='flex items-center gap-3 px-4 py-3'>
                            <img src={Phone} className='h-10 rounded-full'/>
                           <p>+245742310701 / +254763416572</p>
                        </div>

                        <div className='flex items-center gap-3 px-4 py-3'>
                            <img src={Mail} className='h-10 rounded-full'/>
                           <a>devmacharia7@gmail.com</a>
                        </div>

                        <div className='flex items-center gap-3  px-4 py-3'>
                            <img src={X} className='h-10 rounded-full'/>
                           <a href=' https://x.com/john17253_john?s=08 ' target='blank' >@john17253_john</a>
                        </div>

                        <div className='flex items-center gap-3  px-4 py-3'>
                            <img src={Instagram} className='h-10 rounded-full'/>
                           <a href="https://www.instagram.com/__johntey?igsh=Zm51YXV3cjExdDk1 " target='blank' > @John_isDev</a>
                        </div>

                        <div className='flex items-center gap-3  px-4 py-3'>
                            <img src={Git} className='h-10 rounded-full'/>
                           <a href='https://github.com/machariakimani' target='blank' >@machariakimani</a>
                        </div>
                        </div>
                        
                        


                    </div>
                    
                </div>
        </div>
    );
}

export default Contacts