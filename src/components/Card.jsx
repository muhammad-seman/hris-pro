const Card = ({ 
  children, 
  title, 
  className = '',
  padding = 'p-6' 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-200 ${padding} ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default Card;