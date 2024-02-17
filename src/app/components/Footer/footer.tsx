'use client';

import Image from 'next/image';
import './footer.css'

export default function Footer() {
    return (
        <div className='flex w-full flex flex-col sm:flex-row items-center justify-between p-2 px-5 text-slate-500 dark:text-slate-400 bg-white dark:bg-black font-mono'>
            <div className='text-sm'>
                <div>
                    Copyright &copy; {new Date().getFullYear()} Jayaraman Venkatesan
                </div>
                <div>
                    All rights reserved
                </div>
            </div>

            <div className='p-4 flex items-center'>
                <a href='https://www.linkedin.com/in/jayaraman-venkatesan/' target="_blank" className='px-2'>
                    <Image
                        className="hidden dark:block"
                        src={"images/linkedin.svg"}
                        alt="LinkedIn"
                        width={40}
                        height={40}
                    />
                    <Image
                        className="dark:hidden"
                        src={"images/dark-linkedin.svg"}
                        alt="LinkedIn"
                        width={40}
                        height={40}
                    />
                </a>

                <a href='https://github.com/jayaraman-venkatesan' target="_blank" className='px-2'>

                    <Image
                        className="hidden dark:block"
                        src={"images/github.svg"}
                        alt="Github"
                        width={40}
                        height={40}
                    />
                    <Image
                        className="dark:hidden"
                        src={"images/dark-github.svg"}
                        alt="Github"
                        width={40}
                        height={40}
                    />
                </a>

                <a href="mailto:venkatesan.j@northeastern.edu" target="_blank" className='px-2'>
                    <Image
                        className="hidden dark:block"
                        src={"images/email.svg"}
                        alt="Email"
                        width={40}
                        height={40}
                    />
                    <Image
                        className="dark:hidden"
                        src={"images/dark-email.svg"}
                        alt="Email"
                        width={40}
                        height={40}
                    />
                </a>
            </div>
        </div>
    )
}