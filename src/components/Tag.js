import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


//const API_KEY = process.env.GIF;
const API_KEY = 'kJ42ythOe3B4PXTj3fFM000gXny6Aiz3';

const Tag = () => {

   //      const[gif,setGif] = useState('');
   //      const[loading, setLoading] = useState(false);
       
   // async  function fetchData(){
   //      setLoading(true);
   //      const url =   `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
   //      const {data} = await axios.get(url);
   //      setLoading(false);
   //      const imageSource = data.data.images.downsized_large.url;
   //      console.log(imageSource);
   //      setGif(imageSource);
        
   //   }
     
     const[tag,setTag] = useState('');
     function changeHandler(event){
        setTag(event.target.value);
     }

   //   useEffect(()=>{
   //      fetchData();
   //   },[]);

        function clickHandler(){
            fetchData(tag);
        }

          const{gif,loading,fetchData} = useGif(tag);

  return (
    <div className='w-1/2  bg-blue-500 rounded-lg items-center justify-evenly flex flex-col border border-black  '>
       
        <h1 className="text-xl font-bold mt-[15px] uppercase mb-[10px]">
        <u> RANDOM {tag} GIF</u></h1>
         
         {
            loading?(<Spinner/>):(<img src={gif} width='450' height={200}/>)
         }

          <input
            className='w-10/12 bg-white font-semibold opacity-90 text-lg py-2 rounded-lg mt-[5px] mb-[4px] outline-none '
           onChange={changeHandler}
            value={tag}
           />

        <button onClick={clickHandler}
         className="w-10/12 bg-white font-semibold opacity-90 text-lg py-2 rounded-lg mt-[2px] mb-[20px]">
         GENERATE</button>

    </div>
  )
} 

export default Tag