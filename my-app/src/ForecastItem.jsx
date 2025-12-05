const ForecastItem = ({ data, unit }) => {
    const { day, description, tempMax, tempMin, icon } = data;
    const unitSymbol = `°${unit}`;

    // Styling using Tailwind CSS classes
    return (
        <div className="flex flex-col items-center p-3 m-1 bg-white/10 rounded-xl shadow-lg transition duration-300 hover:bg-white/20 min-w-[80px] flex-grow basis-0">
            <p className="font-semibold text-sm">{day}</p>
            <img 
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
                alt={description} 
                className="w-12 h-12"
            />
            <p className="text-xs capitalize text-center mb-1 h-8 overflow-hidden">{description}</p>
            <p className="text-sm font-bold">H: {Math.round(tempMax)}{unitSymbol}</p>
            <p className="text-xs opacity-80">L: {Math.round(tempMin)}{unitSymbol}</p>
        </div>
    );
};

export default ForecastItem;