import React from 'react';

function Hero() {
    return (
        <section className="bg-grid-50 flex items-center flex-col">
            <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-prose text-center">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Effortless Budgeting Starts with Finly
                        <strong className="text-indigo-600"> Gain Financial Clarity </strong>
                    </h1>

                    <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                        Finly turns budgeting from a chore into a breeze. Take control of your spending with intuitive tools designed for clarity so you can save smarter, stress less, and stay effortlessly on track.
                    </p>

                    <div className="mt-4 flex justify-center sm:mt-6">
                        <img 
                            src="/F2.jpg" 
                            alt="Finly" 
                            className="max-w-xs sm:max-w-sm md:max-w-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
