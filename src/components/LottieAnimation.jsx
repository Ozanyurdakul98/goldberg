'use client'
 import { Player } from '@lottiefiles/react-lottie-player';
import cookIndexAnimation from "@/images/cookIndexAnimation.json";

 

export function LottieAnimation( ) {
 
 
  return (
       <Player
            autoplay
            loop
            src={cookIndexAnimation}
      style={{ height: '100%', width: '100%' }}
      className='h-96'
          /> 
   )
}
