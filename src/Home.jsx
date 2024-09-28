const Home = () => {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-800">Delicious Food Awaits!</h1>
        
        <img 
          src="https://www.shutterstock.com/image-photo/picture-big-happy-family-making-260nw-1378345295.jpg" 
          alt="Happy Family Eating" 
          className="w-full h-96 object-cover mb-6" 
        />
        
        <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-lg mx-auto">
          <h2 className="text-xl font-semibold text-blue-800">Family Feast</h2>
          <p className="text-gray-600">{"Share the joy of food with loved ones!"}</p>
        </div>
      </div>
    );
  };
  
  export default Home;
  
  