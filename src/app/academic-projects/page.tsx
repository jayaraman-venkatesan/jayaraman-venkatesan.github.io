import React from "react";
import Image from "next/image";
import { workData } from "../data/projects";
import './page.css'

export default function AcademicProjects() {

    return (
        <main className="flex flex-col items-start p-5 sm:py-5 sm:px-10 w-full">
            <div className="z-10 max-w-5xl w-full text-sm">
                <div className="flex items-center text-3xl font-bold pb-5 lg:py-5 text-slate-700 dark:text-white">
                    <div className="mr-5">
                        Academic Projects
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
            <div className="sm:p-5 flex flex-wrap">
                {
                    workData.map(({ heading, summary, learnMoreLinks = [] }, index_w) => (
                        <div key={index_w} className="w-5/12 p-5 text-justify border-2 border-solid border-gray-200 dark:border-gray-700 rounded-lg bg-slate-200 dark:bg-slate-800 m-6">
                            <div className="font-bold text-lg py-2">{heading}</div>
                            <div className="">{summary}</div>
                            <div className="flex">
                                {learnMoreLinks.map(({ title, link }, index) => <div key={index}>
                                    <a key={index} href={link} target="_blank" className='mt-4 mr-2 flex font-bold rounded p-2 border-2 border-solid border-primary text-primary dark:border-primary-dark'>
                                        {title + ' '} <img src="images/link.svg" height={20} width={20} className="px-1"></img>
                                    </a>
                                </div>)}
                            </div>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}