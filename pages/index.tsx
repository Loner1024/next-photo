import Head from 'next/head'
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import {sliderData} from "../components/SliderData";
import Instagram from "../components/Instagram";


export default function Home() {
    return (
        <>
            <Head>
                <title>Photography Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Hero heading='Capture Photography' message='I capture in nature and keep them alive.'/>
            <Slider sliders={sliderData}/>
            <Instagram/>
        </>
    )
}
