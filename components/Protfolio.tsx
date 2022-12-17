import React from 'react';
import Image from "next/image";

const Protfolio = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-16 text-center">
            <h1 className="font-bold text-2xl p-4">Travel Photos</h1>
            <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
                <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
                    <Image
                        src="https://images.unsplash.com/photo-1671137513104-89166b4242f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                        alt="/" width="700" height="451" className="object-cover" style={{height: 451}}/>
                </div>
                <div className="w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1670775011370-797873f9fb67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                        alt="/" width="215" height="217" className="object-cover" style={{height: 217}}/>
                </div>
                <div className="w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1671134227301-13b554657433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                        alt="/" width="215" height="217" className="object-cover" style={{height: 217}}/>
                </div>


                <div className="w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1671004387803-cb315094ad31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                        alt="/" width="215" height="217" className="object-cover" style={{height: 217}}/>
                </div>
                <div className="w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1671209733388-ee0bdc544390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                        alt="/" width="215" height="217" className="object-cover" style={{height: 217}}/>
                </div>
            </div>
        </div>
    );
};

export default Protfolio;