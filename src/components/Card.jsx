
import { useState } from 'react';

const Card = ({ card, handleChoice, flipped, matched ,disabled}) => {

    const transition = "-translate-x-full transition duration-1000 ease-out ";


    const handleClick = () => {
        if (!disabled)
        {
            handleChoice(card);
        }
           
    }

    return (
        <div className={`relative ${card.matched ? "blue-glassmorphism-success" : ""} blue-glassmorphism m-4  mf:ml-10 flex flex-1 ${matched && "animate-bounce "}
       
        mf:max-w-[170px]
        mf:max-h-[170px]
        sm:max-w-[150px]
        sm:max-h-[150px]
        max-w-[200px]
        max-h-[150px]
        flex-col p-2 rounded-md  overflow-hidden`} >

            <div className=" 
          flex flex-1
       front
      mf:max-w-[200px]
      mf:max-h-[200px]
      sm:max-w-[150px]
      sm:max-h-[150px]
      max-w-[100px]
      max-h-[100px]
      flex-col rounded-md  overflow-hidden"
            >
                <div className="  flex flex-col items-center w-full m1-3 overflow-hidden">

                    <img
                        src={card.src ? card.src : 'https://copper2.wpengine.com/wp-content/uploads/2021/05/Ethernew-01.jpg'}
                        alt="nature"
                        className="w-full h-56 2xl:h-96 rounded-md shadow-lg object-cover "
                    />

                </div>
            </div>
            <div className={`  absolute  flex flex-1 ${flipped ? transition : ""}
      
     
       mf:max-w-[170px]
       mf:max-h-[170px]
       sm:max-w-[150px]
       sm:max-h-[150px]
       max-w-[100px]
       max-h-[100px]
      flex-col  rounded-md  overflow-hidden`}
            >
                <div className=" flip-card-inner flex flex-col items-center w-full m1-3 overflow-hidden">

                    <img
                        src={'https://copper2.wpengine.com/wp-content/uploads/2021/05/Ethernew-01.jpg'}
                        onClick={!flipped && handleClick}
                        alt="nature"
                        className="w-full h-56 2xl:h-96 rounded-md shadow-lg object-cover "
                    />

                </div>
            </div>

        </div>
    );
};

export default Card;