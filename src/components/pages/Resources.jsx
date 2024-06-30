import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../Footer';
import PageContainer from '../ui-elements/PageContainer';
import { ResourcesImage } from '../../media/icons';
import SectionSubtitle from '../ui-elements/SectionSubtitle';
import FooterNew from '../FooterNew';

const Resources = () => {
    return (
        <>
           <section>
                <PageContainer className='text-darkGray dark:bg-black pb-32 '>
                    <SectionSubtitle subtitle="Resources" className="sm:my-10" />
                    <div className='flex sm:flex-col flex-row items-center justify-between'>
                    
                        {/* Image Container */}
                        <div className='w-3/6 flex justify-center xs:mb-4 md:mb-0
                                        sm:w-4/6 sm:h-fit sm:pb-3'
                        >
                            <ResourcesImage className='sm:h-1/2' />
                        </div>
                        
                        {/* Text Container */}
                        <div className='w-3/6 flex items-center pl-10
                                        sm:w-full sm:pl-0'>
                            <div className='stext-left dark:text-white leading-loose font-light sm:text-md'>
                                <ul className="list-disc list-inside">
                                <li className="mb-2">
                                        <Link to="https://www.emdr.com/research-overview/" target="_blank"
                                              className='hover:border-rounded hover:bg-main hover:text-white hover:px-3'
                                        >
                                            https://www.emdr.com
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="https://www.emdr.com/theory/" target="_blank"
                                        c     lassName='hover:border-rounded hover:bg-main hover:text-white hover:px-3'
                                        >
                                            https://www.emdr.com/theory/   
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="https://www.emdr.com/frequent-questions/" target="_blank">
                                            https://www.emdr.com/frequent-questions/
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="https://www.emdr.com/what-is-emdr-therapy-layperson/" target="_blank"
                                        c     lassName='hover:border-rounded hover:bg-main hover:text-white hover:px-3'
                                        >
                                            https://www.emdr.com/what-is-emdr-therapy   
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="https://my.clevelandclinic.org/health/treatments/22641-emdr-therapy" target="_blank">
                                            https://my.clevelandclinic.org
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="https://positivepsychology.com/emdr-therapy/" target="_blank">
                                            https://positivepsychology.com
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='w-full grid grid-cols-3 gap-4 items-center justify-center
                                    sm:grid-cols-1 md:grid-cols-2 '>
                        <div className="p-4">
                            <iframe width="100%" height="315"
                                    src="https://www.youtube.com/embed/hKrfH43srg8?si=xKgRsYXmkf0bWmQs"// Replace this with your YouTube video URL
                                    title="How EMDR works?"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className='border border-white rounded-lg shadow-lg p-3'
                            ></iframe>
                        </div>
                        <div className="p-4">
                            <iframe width="100%" height="315" 
                                    src="https://www.youtube.com/embed/bIJZQAr9nQo?si=w3IhswI_hwtIFpjd" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerpolicy="strict-origin-when-cross-origin" 
                                    allowfullscreen
                                    className='border border-white rounded-lg shadow-lg p-3 h-[300px]'
                            >
                            </iframe>
                        </div>
                        <div className="p-4">
                            <iframe width="100%" height="315" 
                                    src="https://www.youtube.com/embed/Pkfln-ZtWeY?si=7XSC0h3VLnuObl2j"
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerpolicy="strict-origin-when-cross-origin" 
                                    allowfullscreen
                                    className='border border-white rounded-lg shadow-lg p-3'
                            >
                            </iframe>
                        </div>
                    </div>
                </PageContainer>
            </section>
            <FooterNew />
        </>
    )
}

export default Resources
