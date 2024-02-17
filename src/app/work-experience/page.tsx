import React from "react";
import Image from "next/image";
import Timeline from "../components/Timeline/timeline";
import { workData } from "../data/experience";

export default function WorkExperience() {

    return (
        <main className="flex flex-col items-start p-5 sm:py-5 sm:px-10 w-full">
            <div className="z-10 max-w-5xl w-full text-sm">
                <div className="flex items-center text-3xl font-bold pb-5 lg:py-5 text-slate-700 dark:text-white">
                    <div className="mr-5">
                        Professional Odyssey
                    </div>
                    <Image
                        width={35}
                        height={35}
                        src={"images/work-indigo.svg"}
                        alt='Work'
                        className='dark:hidden'
                    />
                    <Image
                        width={35}
                        height={35}
                        src={"images/work.svg"}
                        alt='Work'
                        className='hidden dark:flex'
                    />
                </div>
            </div>
            <div className="sm:p-5">
                <Timeline data={workData} />
            </div>
        </main>
    )
}