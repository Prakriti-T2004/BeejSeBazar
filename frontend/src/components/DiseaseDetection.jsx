import React, { useState } from 'react';

const PlantDiseaseDetector = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Disease database with detection and treatment information
  const diseaseDatabase = {
    "tomato_early_blight": {
      name: "Tomato Early Blight",
      confidence: "92%",
      description: "A common fungal disease that affects tomato plants, causing dark spots with concentric rings on leaves.",
      treatment: "Remove infected leaves, apply copper-based fungicide, improve air circulation, and avoid overhead watering.",
      prevention: "Rotate crops, use disease-resistant varieties, and ensure proper spacing between plants."
    },
    "tomato_late_blight": {
      name: "Tomato Late Blight",
      confidence: "88%",
      description: "A serious fungal disease that can destroy entire tomato crops, characterized by water-soaked lesions that turn brown.",
      treatment: "Apply fungicides containing chlorothalonil or mancozeb, remove and destroy infected plants.",
      prevention: "Use resistant varieties, avoid overhead irrigation, and ensure good air circulation."
    },
    "potato_early_blight": {
      name: "Potato Early Blight",
      confidence: "85%",
      description: "A common disease affecting potato plants, causing dark, target-like spots on leaves.",
      treatment: "Apply fungicides, remove infected leaves, and practice crop rotation.",
      prevention: "Use certified disease-free seed potatoes and maintain proper plant spacing."
    },
    "apple_scab": {
      name: "Apple Scab",
      confidence: "90%",
      description: "A fungal disease that affects apple trees, causing olive-green to black spots on leaves and fruit.",
      treatment: "Apply fungicides during bud break and continue as needed throughout the season.",
      prevention: "Plant resistant varieties, rake and destroy fallen leaves in autumn."
    },
    "grape_powdery_mildew": {
      name: "Grape Powdery Mildew",
      confidence: "87%",
      description: "A fungal disease that creates white powdery spots on leaves and fruit of grapevines.",
      treatment: "Apply sulfur or other fungicides, ensure good air circulation around plants.",
      prevention: "Prune properly to improve air flow, avoid excessive nitrogen fertilization."
    },
    "healthy_plant": {
      name: "Healthy Plant",
      confidence: "95%",
      description: "No signs of disease detected. The plant appears to be in good health.",
      treatment: "Continue with current care practices. Monitor regularly for any changes.",
      prevention: "Maintain proper watering, fertilization, and pest management practices."
    },
    "unknown": {
      name: "Unknown Condition",
      confidence: "N/A",
      description: "We couldn't identify a specific disease from this image. The image might be unclear or show a condition not in our database.",
      treatment: "Please consult with a local agricultural expert for proper diagnosis.",
      prevention: "Maintain plant health through proper watering, fertilization, and monitoring."
    }
  };

  const handleCapture = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.createElement('video');
        video.srcObject = stream;
        video.autoplay = true;
        video.className = 'hidden';
        document.body.appendChild(video);

        video.onloadedmetadata = () => {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageDataURL = canvas.toDataURL('image/jpeg');

          setImage(imageDataURL);
          stream.getTracks().forEach(track => track.stop());
          document.body.removeChild(video);

          // Analyze the captured image
          analyzeImage(imageDataURL);
        };
      } catch (err) {
        console.error("Error accessing camera: ", err);
        alert("Could not access the camera. Please grant permission.");
      }
    } else {
      alert("getUserMedia not supported on this browser!");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        analyzeImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        analyzeImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please drop a valid image file.");
    }
  };

  // Simulate image analysis based on filename or random selection
  const analyzeImage = (imageData) => {
    setLoading(true);
    setResult(null);
    
    // Simulate processing delay
    setTimeout(() => {
      let detectedDisease = "unknown";
      
      // In a real application, this would be replaced with actual image analysis
      // For demonstration, we'll base detection on a simple pattern
      if (imageData.includes('tomato')) {
        detectedDisease = Math.random() > 0.5 ? "tomato_early_blight" : "tomato_late_blight";
      } else if (imageData.includes('potato')) {
        detectedDisease = "potato_early_blight";
      } else if (imageData.includes('apple')) {
        detectedDisease = "apple_scab";
      } else if (imageData.includes('grape')) {
        detectedDisease = "grape_powdery_mildew";
      } else if (imageData.includes('healthy')) {
        detectedDisease = "healthy_plant";
      } else {
        // Random selection for demo purposes
        const diseases = Object.keys(diseaseDatabase);
        const randomIndex = Math.floor(Math.random() * (diseases.length - 2)) + 1; // Skip "unknown"
        detectedDisease = diseases[randomIndex];
      }
      
      setResult(diseaseDatabase[detectedDisease]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="h-fit p-6 bg-gradient-to-br from-green-300 via-green-500 to-green-700 font-sans">
      <div className="w-[1080px] container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section - Upload and Preview */}
          <div className="lg:w-1/2 bg-white bg-opacity-95 p-6 md:p-10 rounded-3xl shadow-2xl text-center min-h-[600px]">
            <h1 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4 tracking-tight">
              🌿 Plant Disease Detector
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Upload or capture a plant image to detect possible diseases and get treatment recommendations.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
              <button
                onClick={handleCapture}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-transform duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <span className="mr-2">📸</span> Take a Photo
              </button>
              <label
                htmlFor="file-upload"
                className="flex-1 bg-white border-2 border-green-600 text-green-600 font-bold py-3 px-6 rounded-xl cursor-pointer transition-transform duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <span className="mr-2">📂</span> Choose a File
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            <div
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className="border-2 border-dashed border-green-400 text-green-700 p-8 rounded-xl mb-8 transition-colors duration-300 hover:border-green-600 bg-green-50"
            >
              <p className="font-medium">Or drag and drop an image here</p>
              <p className="text-sm text-gray-600 mt-2">Supported formats: JPG, PNG, WebP</p>
            </div>

            {loading && (
              <div className="my-8 p-6 bg-green-100 rounded-xl">
                <div className="flex flex-col items-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mb-4"></div>
                  <p className="text-green-800 font-medium">Analyzing image for diseases...</p>
                </div>
              </div>
            )}

            {image && !loading && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-green-700 mb-4 border-b-2 border-green-500 pb-2">
                  🌱 Image Preview
                </h2>
                <div className="flex justify-center">
                  <img
                    src={image}
                    alt="Selected plant"
                    className="max-h-[400px] object-contain rounded-xl shadow-xl"
                  />
                </div>
              </div>
            )}

            {!image && !loading && (
              <div className="mt-10 p-6 bg-gray-100 rounded-xl text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">How to get the best results:</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Take a clear, well-lit photo of the affected plant part</li>
                  <li>Focus on leaves showing symptoms like spots, discoloration, or abnormalities</li>
                  <li>Include a healthy part of the plant for comparison if possible</li>
                  <li>For best accuracy, take multiple photos from different angles</li>
                </ul>
              </div>
            )}
          </div>
          {/* End of Left Section */}

          {/* Right Section - Results */}
          {result && (
            <div className="lg:w-1/2">
              <div className="bg-white bg-opacity-95 p-6 rounded-xl shadow-2xl sticky top-6">
                <h2 className="text-2xl font-bold text-green-700 mb-4 border-b-2 border-green-500 pb-2">
                  🧪 Detection Result
                </h2>
                
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Disease Information</h3>
                    <p className="mb-1"><span className="font-bold">Name:</span> {result.name}</p>
                    <p className="mb-1"><span className="font-bold">Confidence:</span> {result.confidence}</p>
                    <p className="mb-3"><span className="font-bold">Description:</span> {result.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Treatment & Prevention</h3>
                    <div className="bg-yellow-50 p-4 rounded-lg mb-3">
                      <h4 className="font-medium text-yellow-800 mb-1">Recommended Treatment:</h4>
                      <p className="text-sm">{result.treatment}</p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-1">Prevention Tips:</h4>
                      <p className="text-sm">{result.prevention}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <button
                    onClick={() => {
                      setImage(null);
                      setResult(null);
                    }}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                  >
                    Analyze Another Image
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlantDiseaseDetector;