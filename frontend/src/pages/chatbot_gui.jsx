import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Agricultural knowledge base
  const agriculturalKnowledge = {
    "crops": "Common crops include wheat, rice, corn, soybeans, and cotton. The best crop for your farm depends on your soil type, climate, and market demand.",
    "soil": "Healthy soil should be well-draining and rich in organic matter. Regular soil testing can help determine nutrient levels and pH balance.",
    "fertilizer": "Organic fertilizers include compost and manure, while synthetic options provide specific nutrient ratios. The right choice depends on your crops and soil conditions.",
    "pest control": "Integrated Pest Management (IPM) combines biological, cultural, and chemical methods for effective pest control while minimizing environmental impact.",
    "irrigation": "Efficient irrigation methods include drip irrigation and sprinkler systems. Water needs vary by crop, soil type, and climate conditions.",
    "weather": "Weather significantly impacts farming decisions. Monitor local forecasts and consider using protective measures like row covers during extreme conditions.",
    "organic farming": "Organic farming avoids synthetic inputs, relying instead on natural processes and materials. Certification requirements vary by region.",
    "crop rotation": "Crop rotation helps maintain soil fertility and reduce pest problems. A typical rotation might include legumes, grains, and root crops.",
    "hello": "Hello! How can I assist with your agricultural questions today?",
    "hi": "Hi there! What farming topic would you like to discuss?",
    "thanks": "You're welcome! Feel free to ask if you have more questions.",
    "thank you": "Happy to help! Is there anything else you'd like to know about farming?",
    "default": "I'm not sure about that specific agricultural topic. Could you ask about crops, soil, fertilizer, pest control, irrigation, weather, organic farming, or crop rotation?"
  };

  // Generate response based on user input
  const generateResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    // Check for specific keywords
    for (const [keyword, response] of Object.entries(agriculturalKnowledge)) {
      if (lowerInput.includes(keyword)) {
        return response;
      }
    }
    
    return agriculturalKnowledge.default;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate response based on agricultural knowledge
      const reply = generateResponse(input);
      const botMessage = { role: 'assistant', content: reply };
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error('Error:', err);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, something went wrong.' }]);
    } finally {
      setLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // Quick questions for users
  const quickQuestions = [
    "What crops grow best in my region?",
    "How to improve soil quality?",
    "Organic pest control methods",
    "Water-saving irrigation techniques"
  ];

  const handleQuickQuestion = (question) => {
    setInput(question);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-green-50 rounded-xl shadow-lg border border-green-200">
      <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">🌾 Ask AgriBot</h2>

      <div className="h-80 overflow-y-auto bg-white rounded-lg border border-gray-300 p-4 mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-3 p-3 rounded-lg max-w-[80%] ${
              msg.role === 'user'
                ? 'bg-green-100 text-right ml-auto'
                : 'bg-gray-100 text-left'
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && (
          <div className="p-3 rounded-lg bg-gray-100 text-left animate-pulse">
            Thinking...
          </div>
        )}
      </div>

      {/* Quick Questions Section */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">Quick questions:</p>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm hover:bg-green-300 transition"
              onClick={() => handleQuickQuestion(question)}
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about crops, diseases, weather..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:bg-green-400"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;