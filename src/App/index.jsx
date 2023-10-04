import { useEffect, useState } from 'react'
import './App.css'



export default function App() {
  const [advice, setAdvice] = useState ({});
  const [slipId, setSlipId] = useState (1);

    useEffect(() => {
      fetch ("https://api.adviceslip.com/advice")
      .then (response => response.json())
      .then (data => {
        setAdvice(data.slip);
        setSlipId(data.slip.id);
      });
    }, []);

    const handleButtonClick = () => {
      fetch ("https://api.adviceslip.com/advice")
    .then (response => response.json())
    .then (data => {
      setAdvice(data.slip);
      setSlipId(data.slip.id);
    });
    }
    return (
      <main className='bg-dark w-screen h-screen flex items-center justify-center conten
      t-center '>
      <div className='bg-grey flex flex-col  justify-center items-center text-center rounded-xl   text-skyBlue md:w-[555px] md:h-[330px] w-[344px] h-[425px]'>
        <h1 className="text-[14px] font-bold text-neon  md:pb-[12px]">
          A  D  V  I  C  E  #  {slipId}
        </h1>
        
        <div className='text-[28px]  md:w-[520px] md:h-[180px] flex text-center justify-center items-center md:px-[10px] w-[320px] h-[286px] mx-8 '>
          <p>“{advice.advice}”</p>
        </div>
    
        <div className='md:hidden'>
          <img src="pattern-divider-mobile.svg" alt="" />
        </div>
    
        <div className='hidden md:block '>
          <img src="pattern-divider-desktop.svg" alt="" />
        </div>
      </div>
    
      <button onClick={handleButtonClick} className='absolute bottom-[90px] bg-neon rounded-full flex items-center h-[65px] w-[65px] justify-center md:bottom-[255px] hover:shadow-[0px_0px_40px_0px_#52ffa8]'>
        <img src="icon-dice.svg" alt="" />
      </button>
    </main>
    
)
}