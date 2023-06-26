import React from 'react'

const Home = () => {

    return (
        <div className='px-[2rem]'>
            {/*  Hero Section */}
            <section id="hero">
                {/*  Flex Container */}
                <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
                    {/*  Left Item */}
                    <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                            Bring everyone together to make hiring easier
                        </h1>
                        <p className="max-w-sm text-center text-gray-400 md:text-left">
                            “JobRecruit makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <a className="p-3 px-6 pt-2 bg-darkPurple hover:bg-lightPurple rounded-[15px] outline outline-1 outline-white text-white font-semibold hover:text-darkPurple text-center hover:scale-105 duration-300">Get Started</a>
                        </div>
                    </div>
                    {/*  Image */}
                    <div className="md:w-1/2  hover:scale-105 duration-300">
                        <img src="src/assets/img/illustration-intro.svg" alt="" />
                    </div>
                </div>
            </section>

            {/*  Features Section */}
            <section id="features">
                {/* Flex Container */}
                <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                    {/* What's different */}
                    <div className="flex flex-col space-y-12 md:w-1/2">
                        <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                            What's different about Manage?
                        </h2>
                        <p className="max-w-sm text-center text-gray-400 md:text-left">
                            “JobRecruit provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
                        </p>
                    </div>

                    {/* Numbered List */}
                    <div className="flex flex-col space-y-8 md:w-1/2">
                        {/* List Item 1 */}
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            {/* Heading */}
                            <div className="rounded-l-full">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-darkPurple">
                                        01
                                    </div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                                        Track company-wide progress
                                    </h3>
                                </div>
                            </div>

                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">
                                    Track company-wide progress
                                </h3>
                                <p className="text-gray-400">
                                    See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.
                                </p>
                            </div>
                        </div>

                        {/* List Item 2 */}
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            {/* Heading */}
                            <div className="rounded-l-full">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-darkPurple">
                                        02
                                    </div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                                        Advanced built-in reports
                                    </h3>
                                </div>
                            </div>

                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">
                                    Advanced built-in reports
                                </h3>
                                <p className="text-gray-400">
                                    Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
                                </p>
                            </div>
                        </div>


                        {/* List Item 3 */}
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            {/* Heading */}
                            <div className="rounded-l-full">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-darkPurple">
                                        03
                                    </div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                                        Everything you need in one place
                                    </h3>
                                </div>
                            </div>

                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">
                                    Everything you need in one place
                                </h3>
                                <p className="text-gray-400">
                                    Stop jumping from one service to another to communicate, store files, track tasks and share documents. “JobRecruit offers an all-in-one team productivity solution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Testimonials */}
            <section id="testimonials">
                {/* Container to heading and testimonial blocks */}
                <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                    {/* Heading */}
                    <h2 className="text-4xl font-bold text-center">
                        What's Different About “JobRecruit?
                    </h2>
                    {/* Testimonials conatinter */}
                    <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                        {/* Testimonial 1 */}
                        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:w-1/3 hover:scale-105 duration-300">
                            <img src="src/assets/img/avatar-anisha.png" className="w-16 -mt-14" alt="" />
                            <h5 className="text-lg font-bold">Anisha Li</h5>
                            <p className="text-sm text-gray-400">
                                “JobRecruit has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”
                            </p>
                        </div>

                        {/*  Testimonial 2 */}
                        <div className="hidden flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:flex md:w-1/3  hover:scale-105 duration-300">
                            <img src="src/assets/img/avatar-ali.png" className="w-16 -mt-14" alt="" />
                            <h5 className="text-lg font-bold">Ali Bravo</h5>
                            <p className="text-sm text-gray-400">
                                “We have been able to cancel so many other subscriptions since using “JobRecruit. There is no more cross-channel confusion and everyone is much more focused.”
                            </p>
                        </div>

                        {/*  Testimonial 3 */}
                        <div className="hidden flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:flex md:w-1/3  hover:scale-105 duration-300">
                            <img src="src/assets/img/avatar-richard.png" className="w-16 -mt-14" alt="" />
                            <h5 className="text-lg font-bold">Richard Watts</h5>
                            <p className="text-sm text-gray-400">
                                “JobRecruit has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  CTA Section */}
            <section id="cta" className="">
                {/*  Flex Container */}
                <div className="container bg-gray-400 mb-4 rounded-[20px] flex flex-col items-center justify-between  px-6 py-24 mt-10 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
                    {/*  HEading */}
                    <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
                        Ready to switch your career?
                    </h2>
                    {/*  Button */}
                    <a href="#" className="p-3 px-6 pt-2 bg-darkPurple hover:bg-lightPurple rounded-[15px] outline outline-1 outline-white text-white font-semibold hover:text-darkPurple text-center hover:scale-105 duration-300">Get Started</a>
                </div>
            </section>

        </div>
    )
}

export default Home;
