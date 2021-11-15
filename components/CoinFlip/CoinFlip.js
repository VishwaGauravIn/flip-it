import { useState } from "react"
import LoaderBlock from "./LoaderBlock"

export default function CoinFlip(params) {
    let salutations = ["Sir, ","Boss, ","Dear, ","My Friend, ","Hey Dude, ","Hey Folk, ","Master, "]
    const[isLoaderVisible,setIsLoaderVisible] = useState(false)
    const[resultText,setResultText] = useState('Flip to See')
    function flipcoin(){
        let randomnum = Math.floor(Math.random()*2)
        if(randomnum === 1){
            document.getElementById('main-image').src = '/cointail.png'
        }else{
            document.getElementById('main-image').src = '/coinhead.png'
        }
        setIsLoaderVisible(true)
        setResultText('Flippin...')
        setTimeout(() => {
            setIsLoaderVisible(false)
            if(randomnum === 1){
                setResultText(salutations[Math.floor(Math.random()*7)] +'It is Tails!')
            }else{
                setResultText(salutations[Math.floor(Math.random()*7)] +'It is Heads!')
            }
        }, 2000);
    }
    return(
        <>
        <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-80 h-80 lg:w-96 lg:h-96 transparent border-4 dark:border-red-400 border-gray-800 rounded-3xl m-4 lg:m-10 shadow-xl">
            <img src="/cointail.png" id="main-image" alt="" className="w-48 h-48 m-4 lg:m-10 rounded-lg animate-pulse"/>
            <button className=" p-2 rounded-3xl border-4 border-gray-800 dark:border-red-400 text-2xl text-gray-800 dark:text-red-400 hover:text-white hover:bg-gray-800 dark:hover:bg-red-400 dark:hover:text-white transform hover:scale-95 transition-transform duration-200 ease-in-out px-4 shadow-md" onClick={flipcoin}>Flip</button>
           {isLoaderVisible ? <LoaderBlock/> : null}
        </div>
        <p className="text-2xl text-gray-800 dark:text-red-400 opacity-80">{resultText}</p>
        </div></>
    )
};
