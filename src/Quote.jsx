const quotes = [
    {
      text: "Food is not just fuel, it's information. It talks to your DNA and tells it what to do.",
      author: "Dr. Mark Hyman",
    },
    {
      text: "Let food be thy medicine and medicine be thy food.",
      author: "Hippocrates",
    },
    {
      text: "You don’t have to cook fancy or complicated masterpieces—just good food from fresh ingredients.",
      author: "Julia Child",
    },
    {
      text: "Good food is the foundation of genuine happiness.",
      author: "Auguste Escoffier",
    },
    {
      text: "Food brings us together, and that's what it's all about.",
      author: "Anonymous",
    },
    {
      text: "There is no sincerer love than the love of food.",
      author: "George Bernard Shaw",
    },
    {
      text: "Food is our common ground, a universal experience.",
      author: "James Beard",
    },
    {
      text: "Eat food, not much, mostly plants.",
      author: "Michael Pollan",
    },
    {
      text: "Cooking is like love. It should be entered into with abandon or not at all.",
      author: "Harriet Van Horne",
    },
    {
      text: "A recipe has no soul. You, as the cook, must bring soul to the recipe.",
      author: "Thomas Keller",
    },
    {
      text: "The only thing I like better than talking about food is eating.",
      author: "John Walters",
    },
    {
      text: "The secret of good food is in the freshness of the ingredients.",
      author: "Anonymous",
    },
  ];
  
  const colors = [
    "bg-red-100",
    "bg-yellow-100",
    "bg-green-100",
    "bg-blue-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-indigo-100",
    "bg-teal-100",
    "bg-gray-200",
    "bg-orange-100",
    "bg-lime-100",
    "bg-rose-100",
  ];
  
  const Quote = () => {
    return (
      <div className="p-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-blue-600 text-center mb-6">Food Quotes</h2>
        <div className="space-y-4">
          {quotes.map((quote, index) => (
            <div key={index} className={`p-4 rounded-lg shadow-md ${colors[index % colors.length]}`}>
              <p className="text-lg italic">{quote.text}</p>
              <p className="mt-2 text-right text-blue-600">— {quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Quote;
  
  