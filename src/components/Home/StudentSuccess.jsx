import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import styles from "@/styles/home.module.css";
import { Play } from "lucide-react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingText from "../Common/headingText";

import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { AspectRatio } from "../ui/aspect-ratio";

const StudentSuccess = () => {
  const [videoLink, setVideoLink] = useState("");
  const swiperContainerStyle = {
    width: "100%",
    height: "380px",
    marginTop: "40px",
  };
  const videoLinkLists = [
    {
      video:
        "https://www.youtube.com/embed/LW37AQikbtE?si=VtKcmJX4h-nfR2Mk&amp&autoplay=1",
      thumb:
        "https://i.postimg.cc/9MWM8wLB/Digital-Marketing-Students-Openion-thumbnail.jpg",
    },
    {
      video:
        "https://www.youtube.com/embed/oxbeaeSIAjo?si=fx57zTaGguB4ed5G&amp&autoplay=1",
      thumb: "https://i.postimg.cc/dQ57fnPZ/Flutter-Jisan.jpg",
    },
    {
      video:
        "https://www.youtube.com/embed/3bxMCZIaNxo?si=W3pgCUvNdJ7x-qKd&amp&autoplay=1",
      thumb: "https://i.postimg.cc/gJWKJsNH/Students-Success-Story-Part-03.jpg",
    },
  ];
  return (
    <div className="container my-24">
      <HeadingText title={"Success Story"} />
      <Dialog>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            689: {
              slidesPerView: 2,
            },
          }}
          navigation
          style={swiperContainerStyle}
        >
          {videoLinkLists.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <div className="w-full h-full">
                  <img
                    src={item.thumb}
                    alt=""
                    className="w-full h-full rounded-md"
                  />
                </div>

                <div
                  onClick={() => setVideoLink(item.video)}
                  className="absolute top-0 left-0 h-full w-full  flex justify-center items-center cursor-pointer"
                >
                  <div className={`${styles.playBtn}`}>
                    <DialogTrigger>
                      <Play />
                    </DialogTrigger>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <DialogContent>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <iframe
              src={videoLink}
              title="YouTube video player"
              allow="autoplay;"
              className="rounded-md w-full h-full"
            ></iframe>
          </AspectRatio>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StudentSuccess;
