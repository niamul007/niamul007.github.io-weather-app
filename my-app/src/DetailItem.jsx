const DetailItem = ({ label, value, icon }) => (
    <div className="flex items-center space-x-2 p-2 bg-white/10 rounded-lg shadow-inner">
        {icon}
        <span className="font-medium">{label}:</span>
        <span className="font-bold ml-auto">{value}</span>
    </div>
);
export default DetailItem;