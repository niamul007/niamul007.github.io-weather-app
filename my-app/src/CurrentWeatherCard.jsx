import DetailItem from './DetailItem.jsx';
import { MapPin, Sunset, Sunrise, Droplet, Wind, Loader, Zap } from 'lucide-react';
import React from 'react'; // Ensure React is imported

const CurrentWeatherCard = ({ data, unit, onGenerateSuggestion, aiLoading, suggestion }) => {
    const {
        location,
        description,
        temp,
        feelsLike,
        humidity,
        windSpeed,
        icon,
        dt,
        sunrise, 
        sunset,  
    } = data;
    
    const unitSymbol = `°${unit}`;

    // Helper to format UNIX timestamps to local time string
    const formatTime = (timestamp) => 
        new Date(timestamp * 1000).toLocaleTimeString('en-US', {
            hour: '2-digit', 
            minute: '2-digit'
        });

    const formattedTime = formatTime(dt);

    return (
        <div className="current-weather-card p-6 sm:p-8 bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl transition duration-500">
            <div className="card-header border-b pb-4 mb-4 border-white/30">
                <div className="flex items-center justify-between">
                    <h2 className="city-name text-3xl sm:text-4xl font-extrabold flex items-center">
                        {/* MapPin color changed to neutral gray for balance */}
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-gray-300"/>{location}
                    </h2>
                </div>
                <p className="date-time text-lg opacity-80 mt-1">Today, {formattedTime}</p>
            </div>
            
            <div className="main-info flex flex-col sm:flex-row items-center justify-around mb-6">
                <div className="temp-icon flex items-center mb-4 sm:mb-0">
                    <img 
                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
                        alt={description} 
                        className="w-24 h-24"
                    />
                    <span className="current-temp text-7xl font-light ml-2">
                        {Math.round(temp)}{unitSymbol} 
                    </span>
                </div>
                <p className="description text-xl sm:text-2xl font-semibold capitalize text-shadow-md">{description}</p>
            </div>

            {/* DETAILS GRID: Wide layout with unique colors assigned */}
            <div className="details grid grid-cols-2 md:grid-cols-4 gap-4 text-sm sm:text-lg">
                
                {/* 1. Feels Like: Red for heat/intensity */}
                <DetailItem 
                    label="FEELS LIKE" 
                    value={`${Math.round(feelsLike)}${unitSymbol}`} 
                    icon={<Zap className="w-6 h-6"/>} 
                    iconColor="text-amber-400"
                />
                
                {/* 2. Humidity: Blue for water/moisture */}
                <DetailItem 
                    label="HUMIDITY" 
                    value={`${humidity}%`} 
                    icon={<Droplet className="w-6 h-6"/>} 
                    iconColor="text-amber-400"
                />
                
                {/* 3. Wind Speed: Gray/Neutral for air movement */}
                <DetailItem 
                    label="WIND SPEED" 
                    value={`${Math.round(windSpeed)} m/s`} 
                    icon={<Wind className="w-6 h-6"/>} 
                    iconColor="text-amber-400"
                />
                
                {/* 4. Sunrise: Orange for the rising sun */}
                <DetailItem 
                    label="SUNRISE" 
                    value={formatTime(sunrise)} 
                    icon={<Sunrise className="w-6 h-6"/>} 
                    iconColor="text-amber-400"
                />
                
                {/* 5. Sunset: Purple for dusk/evening */}
                <DetailItem 
                    label="SUNSET" 
                    value={formatTime(sunset)} 
                    icon={<Sunset className="w-6 h-6"/>} 
                    iconColor="text-amber-400"
                />

                {/* Placeholder to fill the 2x3 or 2x4 grid cleanly */}
                <div className="hidden md:flex justify-center items-center">
                    <p className="text-gray-400 italic text-sm">More details soon...</p>
                </div>
                
            </div>

            {/* AI Suggestion Feature - Amber/Orange Button */}
            <div className="mt-6 pt-4 border-t border-white/30">
                <button 
                    onClick={onGenerateSuggestion}
                    disabled={aiLoading}
                    // Amber/Orange Gradient
                    className="w-full p-3 text-white font-bold rounded-xl shadow-xl transition duration-200 flex items-center justify-center text-lg cursor-pointer
                               bg-gradient-to-r from-amber-600 to-orange-800 hover:from-amber-500 hover:to-orange-700 disabled:from-gray-500 disabled:to-gray-600"
                >
                    {aiLoading ? (
                        <><Loader className="w-5 h-5 animate-spin mr-2 text-white"/> Generating Tip...</>
                    ) : (
                        <><Zap className="w-5 h-5 mr-2 text-white"/> Get Today's Activity Suggestion</>
                    )}
                </button>

                {suggestion && (
                    // Amber/Orange harmonizing AI box
                    <div className="mt-4 p-4 bg-yellow-900/50 rounded-lg shadow-inner border border-amber-600/50">
                        <p className="text-base italic leading-relaxed">{suggestion}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CurrentWeatherCard;