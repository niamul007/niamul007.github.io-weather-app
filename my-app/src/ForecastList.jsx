// ForecastList.jsx (Wide Container Layout)

import React from 'react';
import ForecastItem from './ForecastItem.jsx';

const ForecastList = ({ forecast, unit }) => {
    if (!forecast || forecast.length === 0) {
        return null;
    }

    return (
        <div 
            // Removed blur/bg, now focusing on padding, margins, and layout clarity
            className="mt-8 mx-auto"
        >
            <h3 className="text-2xl font-bold mb-4 border-b pb-2 border-white/30 text-center sm:text-left">5-Day Forecast</h3>
            
            {/* The parent container for the items.
            We use flex-wrap to ensure it handles smaller screens cleanly, 
            and justify-center to look good when there aren't enough items to fill the row.
            */}
            <div 
                className="
                    flex flex-wrap 
                    justify-center md:justify-between /* Distributes space nicely on larger screens */
                    gap-4 /* Adds consistent space between items */
                    -m-1 /* Compensates for the negative margin/padding added by the flex items */
                "
            >
                {forecast.map((item, index) => (
                    // The key is essential for React list performance!
                    <ForecastItem key={index} data={item} unit={unit} />
                ))}
            </div>
        </div>
    );
};
export default ForecastList;