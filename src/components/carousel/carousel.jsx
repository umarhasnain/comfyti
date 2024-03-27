import React, { useState } from 'react';

function RadioButtonExample() {
    // State variable to hold the selected radio button value
    const [selectedOption, setSelectedOption] = useState('');

    // Function to handle radio button change
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='flex gap-2 flex-wrap'>
            <div> <label class="group relative w-24 h-10 gap-2 mt-4 mb-4 flex items-center justify-center rounded-xl border py-1 px-1 text-lr bg-white-200 font-medium uppercase hover:bg-orange-400 focus:outline-none sm:flex-1 sm:py-5 cursor-pointer bg-orange text-orange-900 shadow-sm">
                <input
                    type="radio"
                    value="S / M"
                    checked={selectedOption === 'S / M'}
                    onChange={handleOptionChange}
                />
                S / M
            </label></div>
            <div><label class="group relative w-24 h-10 gap-2 mt-4 mb-4 flex items-center justify-center rounded-xl border py-1 px-1 text-lr bg-white-200 font-medium uppercase hover:bg-orange-400 focus:outline-none sm:flex-1 sm:py-5 cursor-pointer bg-orange text-orange-900 shadow-sm">
                <input
                    type="radio"
                    value="L"
                    checked={selectedOption === 'L'}
                    onChange={handleOptionChange}
                />
                L
            </label>
            </div>
            <div>
                <label class="group relative w-24 h-10 gap-2 mt-4 mb-4 flex items-center justify-center rounded-xl border py-1 px-1 text-lr bg-white-200 font-medium uppercase hover:bg-orange-400 focus:outline-none sm:flex-1 sm:py-5 cursor-pointer bg-orange text-orange-900 shadow-sm">
                    <input

                        type="radio"
                        value="XL"
                        checked={selectedOption === 'XL'}
                        onChange={handleOptionChange}
                    />
                    Xl
                </label>
            </div>

            {/* Display the selected option */}
            {/* <p>Selected Option: {selectedOption}</p> */}
        </div>
    );
}

export default RadioButtonExample;