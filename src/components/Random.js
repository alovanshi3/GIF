import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


//const API_KEY = process.env.GIF;
const API_KEY = 'kJ42ythOe3B4PXTj3fFM000gXny6Aiz3';

const Random = () => {

   //      const[gif,setGif] = useState('');
   //      const[loading, setLoading] = useState(false);
       
   // async  function fetchData(){
   //      setLoading(true);
   //      const url =   `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
   //      const {data} = await axios.get(url);
   //      const imageSource = data.data.images.downsized_large.url;
   //      console.log(imageSource);
   //      setGif(imageSource);
   //      setLoading(false);
   //   }
     
     

   //   useEffect(()=>{
   //      fetchData();
   //   },[]);

      //   function clickHandler(){
      //       fetchData();
      //   }
   
       const{gif,loading,fetchData} = useGif();

  return (
    <div className='w-1/2  bg-green-500 rounded-lg items-center justify-evenly flex flex-col border mb-[10px]
     border-black  '>
       
        <h1 className="text-xl font-bold mb-[10px] mt-[15px]">
        <u>A RANDOM GIF</u></h1>
         
         {
            loading?(<Spinner/>):(<img src={gif} width='450' height={200}/>)
         }

        <button onClick={()=>fetchData()}
         className="w-10/12 bg-white font-semibold opacity-90 text-lg py-2 rounded-lg mt-[20px] mb-[20px]">
         GENERATE</button>

    </div>
  )
} 

export default Random