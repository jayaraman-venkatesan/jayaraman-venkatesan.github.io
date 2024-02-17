import React from "react";
import TimeLine from "../components/Timeline/timeline";
import Image from "next/image";
import { educationData } from "../data/education";

export default function Education() {
    return (
        <main className="flex flex-col items-start p-5 sm:py-5 sm:px-10 w-full">
            <div className="z-10 max-w-5xl w-full text-sm">
                <div className="flex items-center text-3xl font-bold pb-5 lg:py-5 text-slate-700 dark:text-white">
                    <div className="mr-5">
                        Academic Voyage
                    </div>
                    <Image
                        width={50}
                        height={50}
                        src={"images/graduation-cap-indigo.svg"}
                        alt='Education'
                        className='dark:hidden'
                    />
                    <Image
                        width={50}
                        height={50}
                        src={"images/graduation-cap.svg"}
                        alt='Education'
                        className='hidden dark:flex'
                    />
                </div>
            </div>
            <div className="sm:p-5">
                <TimeLine data={educationData} />
            </div>
        </main>
    )
}