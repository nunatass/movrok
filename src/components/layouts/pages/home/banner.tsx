"use client"

import { CheckCircleIcon } from "@heroicons/react/24/solid"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Banner = () => {


  return (
    <div className="h-full lg:h-[600px] rounded-lg xl:rounded-xl lg:relative pb-2 overflow-hidden">
      <div className="relative w-full aspect-square xl:aspect-auto overflow-hidden rounded-t-lg xl:rounded-t-xl">
        <video
          src="https://res.cloudinary.com/dcxo7cldm/video/upload/v1761215126/6_reasons_new_banner_fg8onr.mp4"
          loop
          preload="auto"
          poster="https://framerusercontent.com/images/2JfZcB4QyXmUHnxvF1jMH4H6Sg.jpg?width=1920&height=1080"
          playsInline
          autoPlay
          muted
          controls={false}
          webkit-playsinline="true"
          x-webkit-airplay="deny"
          disablePictureInPicture
          disableRemotePlayback
          className="w-full h-full object-cover aspect-square xl:aspect-auto"
          style={{ 
            objectPosition: '50% 50%',
            WebkitMaskImage: '-webkit-radial-gradient(white, black)'
          }}
        />
      </div>
      <div className="bg-[#363439]  rounded-b-lg xl:rounded-b-xl flex flex-col text-white p-6 gap-6  sm:px-12 md:py-8 md:px-[calc(100%/6)] lg:px-0 lg:bg-transparent lg:absolute lg:bottom-14 lg:left-14 lg:w-2/5 xl:w-2/6">
        <div className="flex flex-col gap-4 xl:gap-8">
          <div></div>
          <div className="text-2xl md:text-3xl font-bold text-center xl:text-left">6 Reasons to Take Mitopure® for Longevity</div>
          <ul className="list-disc list-inside flex flex-col gap-1.5">
              {["Supports cellular energy, muscle strength & cellular renewal*", "Backed by 15+ years of research & gold-standard clinical trials", "Benefits start in 4 months & build over time"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm lg:text-lg lg:items-center"><CheckCircleIcon className="w-4 h-4" />{item}</li>
              ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 xl:gap-4">
            <div className="flex items-center justify-between border-t py-2.5 border-white/10 lg:border-white/20">
              <div className="flex items-center gap-2 lg:text-lg text-sm">
                <Image src="/assets/images/movrok-prod.jpg" alt="Mitopure Logo" width={50} height={50}  className="rounded md:h-12 md:w-8 w-6 h-8 object-cover"/>
                <span className="">Movrok</span>
              </div>

              <div className="lg:text-lg text-sm">123$</div>
            </div>
            <Button className="w-full bg-white text-black hover:bg-transparent hover:text-white lg:h-12 h-10" variant="outline" size="lg" >Buy Now</Button>
          </div>
      </div>
    </div>
  )
}