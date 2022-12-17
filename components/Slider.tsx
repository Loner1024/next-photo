import React from 'react';
import {SliderData} from "./SliderData";
import Image from "next/image";


const Slider = ({sliders}: { sliders: SliderData[] }) => {
    return (
        <div id="gallery">
            <h1>Gallery</h1>
            {sliders.map((slider: SliderData, index: number) => {
                return (
                    <Image key={index} src={slider.image} alt="/" width="1440" height="600"
                           style={{objectFit: "cover"}}/>
                )
            })}
        </div>
    );
};

export default Slider;