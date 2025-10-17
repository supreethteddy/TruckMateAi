import React, { useState } from "react";

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All Trucks");
  const [activeTab, setActiveTab] = useState("home");
  const [trackingActiveTab, setTrackingActiveTab] = useState('live');
  
  // Search screen states
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTruckType, setSelectedTruckType] = useState('');
  const [capacityRange, setCapacityRange] = useState([1, 50]);
  const [priceRange, setPriceRange] = useState([1000, 10000]);
  const [searchRadius, setSearchRadius] = useState(10);
  const [sortBy, setSortBy] = useState('distance');
  const [mapView, setMapView] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Profile screen states
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);
  
  // Voice features state
  const [isListening, setIsListening] = useState(false);
  const [voiceText, setVoiceText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('hi'); // Hindi by default
  const [voiceBookingMode, setVoiceBookingMode] = useState(false);
  
  // AI features state
  const [aiMatchingEnabled, setAiMatchingEnabled] = useState(true);
  const [showAiInsights, setShowAiInsights] = useState(false);
  const [cargoDetails, setCargoDetails] = useState({
    weight: '',
    dimensions: '',
    type: '',
    fragile: false,
    temperature: 'normal'
  });

  // Voice recognition functions
  const startVoiceRecognition = () => {
    setIsListening(true);
    // Simulate voice recognition for demo
    setTimeout(() => {
      const sampleVoiceText = selectedLanguage === 'hi' 
        ? 'मुझे मुंबई से दिल्ली के लिए ट्रक चाहिए'
        : 'I need a truck from Mumbai to Delhi';
      setVoiceText(sampleVoiceText);
      setIsListening(false);
    }, 2000);
  };

  const stopVoiceRecognition = () => {
    setIsListening(false);
  };

  const languages = [
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'bn', name: 'বাংলা', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' }
  ];

  const filters = ["All Trucks", "Containers", "Mini", "Refrigerated"];

  const truckRecommendations = [
    {
      id: 1,
      name: "Tata 407",
      price: "₹2,500",
      rating: 4.8,
      capacity: "3.5 Tons",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop&crop=center",
    },
    {
      id: 2,
      name: "Ashok Leyland",
      price: "₹4,200",
      rating: 4.6,
      capacity: "7 Tons",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop&crop=center",
    },
  ];

  const searchResults = [
    {
      id: 1,
      from: "Mumbai",
      to: "Delhi",
      distance: "1,414 km",
      estimatedTime: "24-26 hours",
      price: "₹15,000",
      truckType: "Container Truck",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&crop=center",
    },
    {
      id: 2,
      from: "Mumbai",
      to: "Bangalore",
      distance: "984 km",
      estimatedTime: "16-18 hours",
      price: "₹12,500",
      truckType: "Mini Truck",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=250&fit=crop&crop=center",
    },
    {
      id: 3,
      from: "Mumbai",
      to: "Pune",
      distance: "148 km",
      estimatedTime: "3-4 hours",
      price: "₹3,200",
      truckType: "Refrigerated",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center",
    },
  ];

  // Bookings screen state
  const [bookingsActiveTab, setBookingsActiveTab] = useState('active');

  const activeBookings = [
    {
      id: 'TRK001',
      truckType: 'Container',
      status: 'In Transit',
      driver: {
        name: 'Rajesh Kumar',
        rating: 4.8,
        phone: '+91 98765 43210',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
      },
      pickup: 'Mumbai Central',
      delivery: 'Delhi NCR',
      estimatedArrival: '2h 45m',
      progress: 65,
      bookingDate: '15 Oct 2025',
      truckImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&crop=center'
    },
    {
      id: 'TRK002',
      truckType: 'Mini',
      status: 'Pickup Scheduled',
      driver: {
        name: 'Amit Sharma',
        rating: 4.6,
        phone: '+91 87654 32109',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
      },
      pickup: 'Pune Station',
      delivery: 'Mumbai Airport',
      estimatedArrival: '45m',
      progress: 25,
      bookingDate: '17 Oct 2025',
      truckImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=250&fit=crop&crop=center'
    },
    {
      id: 'TRK003',
      truckType: 'Refrigerated',
      status: 'Loading',
      driver: {
        name: 'Vikram Singh',
        rating: 4.9,
        phone: '+91 76543 21098',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face'
      },
      pickup: 'Chennai Port',
      delivery: 'Bangalore Market',
      estimatedArrival: '6h 20m',
      progress: 10,
      bookingDate: '17 Oct 2025',
      truckImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center'
    }
  ];

  const completedBookings = [
    {
      id: 'TRK004',
      truckType: 'Flatbed',
      status: 'Delivered',
      driver: {
        name: 'Suresh Patel',
        rating: 4.7,
        phone: '+91 65432 10987'
      },
      pickup: 'Kolkata Docks',
      delivery: 'Bhubaneswar Industrial',
      completedDate: '12 Oct 2025',
      deliveryTime: '8h 30m'
    },
    {
      id: 'TRK005',
      truckType: 'Container',
      status: 'Delivered',
      driver: {
        name: 'Ramesh Gupta',
        rating: 4.5,
        phone: '+91 54321 09876'
      },
      pickup: 'Hyderabad Hub',
      delivery: 'Vijayawada Center',
      completedDate: '10 Oct 2025',
      deliveryTime: '4h 15m'
    }
  ];

  const cancelledBookings = [
    {
      id: 'TRK006',
      truckType: 'Mini',
      status: 'Cancelled',
      pickup: 'Jaipur Station',
      delivery: 'Udaipur Market',
      cancelledDate: '8 Oct 2025',
      reason: 'Customer Request'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Transit':
        return 'bg-blue-100 text-blue-800';
      case 'Pickup Scheduled':
        return 'bg-yellow-100 text-yellow-800';
      case 'Loading':
        return 'bg-orange-100 text-orange-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTruckIcon = (type: string) => {
    switch (type) {
      case 'Container':
        return 'fas fa-shipping-fast';
      case 'Mini':
        return 'fas fa-truck';
      case 'Refrigerated':
        return 'fas fa-snowflake';
      case 'Flatbed':
        return 'fas fa-truck-loading';
      default:
        return 'fas fa-truck';
    }
  };

  const renderHomeScreen = () => (
    <div className="pt-16 pb-24 px-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-map-marker-alt text-yellow-500 text-sm"></i>
              <span className="text-gray-600 text-sm">Mumbai</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer">
            <i className="fas fa-bell text-gray-600"></i>
          </button>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </div>
      </div>

      {/* Greeting */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Hello Rajesh!</h1>
        <p className="text-gray-600 text-lg">Start your logistics journey today.</p>
      </div>

      {/* Enhanced Search Bar with Voice */}
      <div className="relative mb-8">
        <div className="bg-gray-50 rounded-3xl px-6 py-5 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4">
            <i className="fas fa-search text-gray-400 text-lg"></i>
            <div className="flex-1">
              <input
                type="text"
                placeholder={selectedLanguage === 'hi' ? 'कौन सा ट्रक?' : 'Which truck?'}
                value={voiceText || searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-gray-700 text-lg font-medium border-none outline-none bg-transparent placeholder-gray-500"
              />
              <p className="text-gray-500 text-sm mt-1">
                {selectedLanguage === 'hi' ? 'कहीं भी • कभी भी' : 'Anywhere • Anytime'}
              </p>
            </div>
            <button 
              onClick={isListening ? stopVoiceRecognition : startVoiceRecognition}
              className={`w-10 h-10 rounded-2xl flex items-center justify-center cursor-pointer transition-all ${
                isListening 
                  ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                  : 'bg-yellow-500 hover:bg-yellow-600'
              }`}
            >
              <i className={`fas ${isListening ? 'fa-stop' : 'fa-microphone'} text-white text-sm`}></i>
            </button>
          </div>
        </div>
        
        {/* Voice Status Display */}
        {isListening && (
          <div className="mt-4 flex items-center justify-center space-x-2 text-yellow-600">
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
            <span className="text-lg font-medium">
              {selectedLanguage === 'hi' ? 'सुन रहे हैं...' : 'Listening...'}
            </span>
          </div>
        )}
        
        {/* Voice Text Display */}
        {voiceText && (
          <div className="mt-4 p-4 bg-yellow-50 rounded-2xl border border-yellow-200">
            <div className="flex items-center space-x-2 mb-2">
              <i className="fas fa-volume-up text-yellow-600"></i>
              <span className="text-sm font-medium text-yellow-800">
                {selectedLanguage === 'hi' ? 'आपने कहा:' : 'You said:'}
              </span>
            </div>
            <p className="text-gray-800 text-lg">{voiceText}</p>
          </div>
        )}
      </div>

      {/* Filter Buttons */}
      <div className="flex space-x-3 mb-8 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-all ${
              activeFilter === filter
                ? "bg-yellow-500 text-black shadow-md"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Featured Truck Card */}
      <div className="mb-6">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-8 relative overflow-hidden shadow-lg">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-black mb-2">
                Tata 407
              </h3>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl font-bold text-black">
                  ₹2,500
                </span>
                <span className="text-black text-lg">/ trip</span>
                <div className="flex items-center space-x-1">
                  <i className="fas fa-star text-black text-sm"></i>
                  <span className="text-black text-lg font-medium">
                    4.8
                  </span>
                </div>
              </div>
              <p className="text-black text-lg mb-6">
                Capacity: 3.5 Tons
              </p>
            </div>
            <button className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all">
              <i className="fas fa-heart text-white text-lg"></i>
            </button>
          </div>
          
          <div className="relative">
            <div className="w-full h-56 rounded-2xl overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop&crop=center"
                alt="Tata 407"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-black text-yellow-500 px-8 py-4 rounded-2xl font-semibold text-lg cursor-pointer hover:bg-gray-800 transition-all shadow-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Other Truck Cards */}
      <div className="space-y-4">
        {truckRecommendations.slice(1).map((truck) => (
          <div
            key={truck.id}
            className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black mb-2">
                  {truck.name}
                </h3>
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-xl font-bold text-black">
                    {truck.price}
                  </span>
                  <span className="text-gray-600 text-lg">/ trip</span>
                  <div className="flex items-center space-x-1">
                    <i className="fas fa-star text-yellow-500 text-sm"></i>
                    <span className="text-gray-600 text-lg font-medium">
                      {truck.rating}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-lg mb-4">
                  Capacity: {truck.capacity}
                </p>
              </div>
              <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all">
                <i className="fas fa-heart text-gray-400"></i>
              </button>
            </div>
            <div className="w-full h-40 rounded-2xl overflow-hidden">
              <img
                src={truck.image}
                alt={truck.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        ))}

        {/* Mahindra Bolero Card */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-black mb-2">
                Mahindra Bolero
              </h3>
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-xl font-bold text-black">₹1,800</span>
                <span className="text-gray-600 text-lg">/ trip</span>
                <div className="flex items-center space-x-1">
                  <i className="fas fa-star text-yellow-500 text-sm"></i>
                  <span className="text-gray-600 text-lg font-medium">4.5</span>
                </div>
              </div>
              <p className="text-gray-600 text-lg mb-4">Capacity: 1.5 Tons</p>
            </div>
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all">
              <i className="fas fa-heart text-gray-400"></i>
            </button>
          </div>
          <div className="w-full h-40 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop&crop=center"
              alt="Mahindra Bolero"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* AI Demand Forecasting Dashboard */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-black">AI Demand Forecast</h2>
            <button className="text-yellow-600 text-sm font-medium cursor-pointer hover:text-yellow-700 transition-all">
              View All Routes
            </button>
          </div>
          
          <div className="space-y-4">
            {demandForecast.map((forecast, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      forecast.demandLevel === 'High' ? 'bg-green-500' :
                      forecast.demandLevel === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                    <h3 className="text-lg font-bold text-black">{forecast.route}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Demand Score</p>
                    <p className="text-lg font-bold text-blue-600">{forecast.demandScore}%</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-600 mb-1">Price Trend</p>
                    <p className={`text-sm font-bold ${
                      forecast.priceTrend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {forecast.priceTrend}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-600 mb-1">Best Time</p>
                    <p className="text-sm font-bold text-gray-800">{forecast.bestTime}</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-3 mb-3">
                  <p className="text-xs text-blue-600 mb-1">Earnings Potential</p>
                  <p className="text-sm font-bold text-blue-800">{forecast.earningsPotential}</p>
                </div>
                
                <div className="bg-yellow-50 rounded-xl p-3">
                  <p className="text-xs text-yellow-600 mb-1">Market Insight</p>
                  <p className="text-sm text-yellow-800">{forecast.marketInsight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const truckTypes = [
    { id: 'container', name: 'Container', icon: 'fas fa-shipping-fast' },
    { id: 'mini', name: 'Mini', icon: 'fas fa-truck' },
    { id: 'refrigerated', name: 'Refrigerated', icon: 'fas fa-snowflake' },
    { id: 'flatbed', name: 'Flatbed', icon: 'fas fa-truck-loading' },
    { id: 'tanker', name: 'Tanker', icon: 'fas fa-oil-can' }
  ];

  const recentSearches = [
    'Mumbai to Delhi',
    'Container Truck',
    'Refrigerated Transport',
    'Mini Truck Pune',
    'Flatbed Bangalore'
  ];

  const popularDestinations = [
    { from: 'Mumbai', to: 'Delhi', price: '₹8,500 - ₹12,000' },
    { from: 'Chennai', to: 'Bangalore', price: '₹3,200 - ₹4,800' },
    { from: 'Pune', to: 'Hyderabad', price: '₹5,500 - ₹7,200' },
    { from: 'Kolkata', to: 'Bhubaneswar', price: '₹2,800 - ₹3,500' }
  ];

  const nearestTrucks = [
    {
      id: 1,
      type: 'Container',
      capacity: '10 Tons',
      distance: '2.3 km',
      eta: '8 mins',
      rating: 4.8,
      driver: 'Suresh Kumar',
      price: '₹4,200',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=250&fit=crop&crop=center'
    },
    {
      id: 2,
      type: 'Mini',
      capacity: '3.5 Tons',
      distance: '1.8 km',
      eta: '5 mins',
      rating: 4.6,
      driver: 'Ramesh Patel',
      price: '₹2,500',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center'
    },
    {
      id: 3,
      type: 'Refrigerated',
      capacity: '7 Tons',
      distance: '3.1 km',
      eta: '12 mins',
      rating: 4.9,
      driver: 'Vikram Singh',
      price: '₹6,800',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=250&fit=crop&crop=center'
    }
  ];

  const suggestedRoutes = [
    { from: 'Mumbai', to: 'Delhi', distance: '1,424 km', price: '₹8,500 - ₹12,000', duration: '22-26 hrs' },
    { from: 'Chennai', to: 'Bangalore', distance: '346 km', price: '₹3,200 - ₹4,800', duration: '6-8 hrs' },
    { from: 'Pune', to: 'Hyderabad', distance: '559 km', price: '₹5,500 - ₹7,200', duration: '9-11 hrs' },
    { from: 'Kolkata', to: 'Bhubaneswar', distance: '442 km', price: '₹2,800 - ₹3,500', duration: '7-9 hrs' }
  ];

  // AI-Powered Matching & Optimization Data
  const aiOptimizedRoutes = [
    {
      id: 1,
      from: 'Mumbai',
      to: 'Delhi',
      distance: '1,424 km',
      duration: '22-26 hrs',
      basePrice: '₹10,000',
      aiOptimizedPrice: '₹9,200',
      fuelCost: '₹3,500',
      tollCost: '₹1,200',
      totalCost: '₹13,900',
      savings: '₹800',
      aiScore: 95,
      compatibility: 'Perfect Match',
      truckRecommendation: 'Container Truck - Tata 407',
      reasons: ['Optimal fuel efficiency', 'Low toll route', 'High demand period']
    },
    {
      id: 2,
      from: 'Chennai',
      to: 'Bangalore',
      distance: '346 km',
      duration: '6-8 hrs',
      basePrice: '₹4,000',
      aiOptimizedPrice: '₹3,600',
      fuelCost: '₹1,200',
      tollCost: '₹400',
      totalCost: '₹5,200',
      savings: '₹400',
      aiScore: 88,
      compatibility: 'Good Match',
      truckRecommendation: 'Mini Truck - Mahindra Bolero',
      reasons: ['Short distance optimization', 'Peak time pricing', 'Fuel efficient route']
    }
  ];

  // AI Demand Forecasting Data
  const demandForecast = [
    {
      route: 'Mumbai → Delhi',
      demandLevel: 'High',
      demandScore: 92,
      priceTrend: '+15%',
      earningsPotential: '₹12,000 - ₹15,000',
      bestTime: '6:00 AM - 8:00 AM',
      marketInsight: 'Peak demand due to festival season'
    },
    {
      route: 'Chennai → Bangalore',
      demandLevel: 'Medium',
      demandScore: 75,
      priceTrend: '+8%',
      earningsPotential: '₹4,500 - ₹6,000',
      bestTime: '2:00 PM - 4:00 PM',
      marketInsight: 'Steady demand from IT sector'
    },
    {
      route: 'Pune → Hyderabad',
      demandLevel: 'Low',
      demandScore: 45,
      priceTrend: '-5%',
      earningsPotential: '₹3,000 - ₹4,500',
      bestTime: '10:00 AM - 12:00 PM',
      marketInsight: 'Off-peak season, consider alternative routes'
    }
  ];

  // Live Tracking Data
  const liveTrackingData = {
    bookingId: 'TRK001',
    status: 'In Transit',
    progress: 65,
    eta: '2h 45m',
    currentLocation: 'Pune, Maharashtra',
    nextStop: 'Nashik, Maharashtra',
    driver: {
      name: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
    },
    route: {
      from: 'Mumbai Central',
      to: 'Delhi NCR',
      distance: '1,414 km',
      totalDuration: '24-26 hours'
    },
    truck: {
      type: 'Container Truck',
      number: 'MH-01-AB-1234',
      capacity: '10 Tons',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=250&fit=crop&crop=center'
    },
    timeline: [
      { time: '10:30 AM', location: 'Mumbai Central', status: 'Picked Up', completed: true },
      { time: '12:15 PM', location: 'Thane', status: 'In Transit', completed: true },
      { time: '2:45 PM', location: 'Pune', status: 'Current Location', completed: true },
      { time: '4:30 PM', location: 'Nashik', status: 'Next Stop', completed: false },
      { time: '8:00 PM', location: 'Aurangabad', status: 'Scheduled', completed: false },
      { time: '11:30 PM', location: 'Jalna', status: 'Scheduled', completed: false }
    ]
  };

  const renderSearchScreen = () => (
    <div className="pt-16 pb-24">
      {/* Header */}
      <div className="fixed top-12 left-0 right-0 bg-white z-40 px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setActiveTab("home")}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer"
          >
            <i className="fas fa-arrow-left text-gray-600"></i>
          </button>
          <h1 className="text-lg font-bold text-black">Search Trucks</h1>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer"
          >
            <i className="fas fa-sliders-h text-white text-sm"></i>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16">
        {/* Enhanced Search Bar with Voice */}
        <div className="px-6 mb-6">
          <div className="bg-white rounded-2xl px-4 py-4 shadow-sm border border-gray-100 flex items-center space-x-3">
            <i className="fas fa-search text-gray-400"></i>
            <input
              type="text"
              value={voiceText || searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={selectedLanguage === 'hi' ? 'ट्रक, रूट, गंतव्य खोजें...' : 'Search trucks, routes, destinations...'}
              className="flex-1 text-gray-700 text-sm border-none outline-none bg-transparent"
            />
            <button 
              onClick={isListening ? stopVoiceRecognition : startVoiceRecognition}
              className={`w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-all ${
                isListening 
                  ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                  : 'bg-gray-100 hover:bg-yellow-100'
              }`}
            >
              <i className={`fas ${isListening ? 'fa-stop' : 'fa-microphone'} text-xs ${
                isListening ? 'text-white' : 'text-gray-600'
              }`}></i>
            </button>
          </div>
          
          {/* Language Selector */}
          <div className="mt-3 flex items-center space-x-2 overflow-x-auto">
            <span className="text-xs text-gray-500 whitespace-nowrap">
              {selectedLanguage === 'hi' ? 'भाषा:' : 'Language:'}
            </span>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all ${
                  selectedLanguage === lang.code
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {lang.flag} {lang.name}
              </button>
            ))}
          </div>
          
          {/* Voice Status */}
          {isListening && (
            <div className="mt-3 flex items-center justify-center space-x-2 text-yellow-600">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                {selectedLanguage === 'hi' ? 'सुन रहे हैं...' : 'Listening...'}
              </span>
            </div>
          )}
          
          {/* Voice Text Display */}
          {voiceText && (
            <div className="mt-3 p-3 bg-yellow-50 rounded-xl border border-yellow-200">
              <div className="flex items-center space-x-2 mb-2">
                <i className="fas fa-volume-up text-yellow-600"></i>
                <span className="text-sm font-medium text-yellow-800">
                  {selectedLanguage === 'hi' ? 'आपने कहा:' : 'You said:'}
                </span>
              </div>
              <p className="text-gray-800">{voiceText}</p>
            </div>
          )}
        </div>

        {/* Map Section */}
        <div className="px-6 mb-6">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="flex border-b border-gray-100">
              <button
                onClick={() => setMapView(true)}
                className={`flex-1 py-3 text-sm font-medium cursor-pointer ${mapView ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-600'}`}
              >
                <i className="fas fa-map mr-2"></i>Map View
              </button>
              <button
                onClick={() => setMapView(false)}
                className={`flex-1 py-3 text-sm font-medium cursor-pointer ${!mapView ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-600'}`}
              >
                <i className="fas fa-list mr-2"></i>List View
              </button>
            </div>
            <div className="h-80 bg-gray-100 relative overflow-hidden rounded-2xl">
              <img
                src="https://res.cloudinary.com/dij4v6vtx/image/upload/v1760701761/Screenshot_2025-10-17_at_5.18.34_PM_ep8xis.png"
                alt="Interactive Map"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-all">
                  <i className="fas fa-plus text-gray-700 text-sm"></i>
                </button>
                <button className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-all">
                  <i className="fas fa-minus text-gray-700 text-sm"></i>
                </button>
                <button className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-all">
                  <i className="fas fa-location-arrow text-gray-700 text-sm"></i>
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-white px-4 py-3 rounded-xl shadow-lg">
                <span className="text-base font-semibold text-gray-800">127 trucks found</span>
              </div>
              <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-map-marker-alt text-yellow-500"></i>
                  <span className="text-sm font-medium text-gray-700">Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nearest Trucks */}
        <div className="mb-6">
          <div className="px-6 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold text-black">Nearest Trucks</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-yellow-500 text-white text-xs rounded-full cursor-pointer">1km</button>
                <button className="px-3 py-1 bg-gray-200 text-gray-600 text-xs rounded-full cursor-pointer">5km</button>
                <button className="px-3 py-1 bg-gray-200 text-gray-600 text-xs rounded-full cursor-pointer">10km</button>
              </div>
            </div>
          </div>
          <div className="px-6 overflow-x-auto">
            <div className="flex space-x-4" style={{ width: 'max-content' }}>
              {nearestTrucks.map((truck) => (
                <div key={truck.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 w-72">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-black text-sm">{truck.type}</h3>
                      <p className="text-gray-600 text-xs">{truck.capacity}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <i className="fas fa-star text-yellow-500 text-xs"></i>
                      <span className="text-xs font-medium text-gray-700">{truck.rating}</span>
                    </div>
                  </div>
                  <div className="h-20 mb-3 rounded-lg overflow-hidden">
                    <img
                      src={truck.image}
                      alt={truck.type}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <p className="text-xs text-gray-600">{truck.distance} • {truck.eta}</p>
                      <p className="text-xs text-gray-600">{truck.driver}</p>
                    </div>
                    <span className="font-bold text-black text-sm">{truck.price}</span>
                  </div>
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-xl text-sm font-medium cursor-pointer !rounded-button">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Searches */}
        <div className="px-6 mb-6">
          <h2 className="text-lg font-bold text-black mb-3">Recent Searches</h2>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((search, index) => (
              <button
                key={index}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-gray-200 cursor-pointer"
              >
                <i className="fas fa-clock text-gray-400 text-xs"></i>
                <span className="text-sm text-gray-700">{search}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="px-6 mb-6">
          <h2 className="text-lg font-bold text-black mb-3">Popular Destinations</h2>
          <div className="space-y-3">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-map-marker-alt text-yellow-500"></i>
                    <div>
                      <p className="font-medium text-black text-sm">{destination.from} → {destination.to}</p>
                      <p className="text-gray-600 text-xs">{destination.price}</p>
                    </div>
                  </div>
                  <i className="fas fa-arrow-right text-gray-400"></i>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="px-6 mb-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-black mb-4">Advanced Filters</h2>
              
              {/* Truck Type */}
              <div className="mb-6">
                <h3 className="font-medium text-black mb-3">Truck Type</h3>
                <div className="flex flex-wrap gap-2">
                  {truckTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedTruckType(selectedTruckType === type.id ? '' : type.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm cursor-pointer !rounded-button ${
                        selectedTruckType === type.id
                          ? 'bg-yellow-500 text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      <i className={`${type.icon} text-xs`}></i>
                      <span>{type.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Capacity Range */}
              <div className="mb-6">
                <h3 className="font-medium text-black mb-3">Capacity Range</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">{capacityRange[0]} Tons</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full relative">
                    <div className="absolute h-2 bg-yellow-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <span className="text-sm text-gray-600">{capacityRange[1]} Tons</span>
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium text-black mb-3">Price Range</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">₹{priceRange[0]}</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full relative">
                    <div className="absolute h-2 bg-yellow-500 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <span className="text-sm text-gray-600">₹{priceRange[1]}</span>
                </div>
              </div>

              {/* Location Selection */}
              <div className="mb-6">
                <h3 className="font-medium text-black mb-3">Location</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-circle text-green-500 text-xs"></i>
                    <input
                      type="text"
                      placeholder="From location"
                      className="flex-1 bg-gray-100 px-4 py-3 rounded-xl text-sm border-none outline-none"
                    />
                    <button className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer">
                      <i className="fas fa-location-arrow text-gray-600 text-xs"></i>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer">
                      <i className="fas fa-exchange-alt text-gray-600 text-xs"></i>
                    </button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-circle text-red-500 text-xs"></i>
                    <input
                      type="text"
                      placeholder="To location"
                      className="flex-1 bg-gray-100 px-4 py-3 rounded-xl text-sm border-none outline-none"
                    />
                    <button className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer">
                      <i className="fas fa-location-arrow text-gray-600 text-xs"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Availability Dates */}
              <div className="mb-6">
                <h3 className="font-medium text-black mb-3">Availability</h3>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded-xl text-sm cursor-pointer !rounded-button">Today</button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm cursor-pointer !rounded-button">Tomorrow</button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm cursor-pointer !rounded-button">Next 7 days</button>
                </div>
              </div>

              {/* Sorting Options */}
              <div className="mb-4">
                <h3 className="font-medium text-black mb-3">Sort By</h3>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-100 px-4 py-3 rounded-xl text-sm border-none outline-none appearance-none cursor-pointer"
                  >
                    <option value="distance">Distance</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                    <option value="capacity">Capacity</option>
                  </select>
                  <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-xs pointer-events-none"></i>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Suggested Routes */}
        <div className="px-6 mb-6">
          <h2 className="text-lg font-bold text-black mb-3">Suggested Routes</h2>
          <div className="space-y-3">
            {suggestedRoutes.map((route, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-truck text-yellow-500 text-sm"></i>
                    <span className="font-medium text-black text-sm">{route.from} → {route.to}</span>
                  </div>
                  <span className="text-xs text-gray-600">{route.distance}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{route.price}</span>
                  <span className="text-xs text-gray-500">{route.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI-Powered Insights */}
        {aiMatchingEnabled && (
          <div className="px-6 mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 shadow-sm border border-blue-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-brain text-blue-600 text-lg"></i>
                  <h3 className="text-lg font-bold text-blue-800">AI-Powered Insights</h3>
                </div>
                <button
                  onClick={() => setShowAiInsights(!showAiInsights)}
                  className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-all"
                >
                  <i className={`fas fa-chevron-${showAiInsights ? 'up' : 'down'} text-blue-600 text-sm`}></i>
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <i className="fas fa-rupee-sign text-green-600"></i>
                  </div>
                  <p className="text-xs text-gray-600">Avg Savings</p>
                  <p className="text-sm font-bold text-green-600">₹600</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <i className="fas fa-route text-blue-600"></i>
                  </div>
                  <p className="text-xs text-gray-600">Route Opt.</p>
                  <p className="text-sm font-bold text-blue-600">95%</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <i className="fas fa-chart-line text-purple-600"></i>
                  </div>
                  <p className="text-xs text-gray-600">Demand</p>
                  <p className="text-sm font-bold text-purple-600">High</p>
                </div>
              </div>

              {showAiInsights && (
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-blue-100">
                    <h4 className="font-semibold text-gray-800 mb-2">🎯 Smart Matching</h4>
                    <p className="text-sm text-gray-600">AI found 3 trucks matching your cargo requirements with 95% compatibility score.</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-green-100">
                    <h4 className="font-semibold text-gray-800 mb-2">💰 Cost Optimization</h4>
                    <p className="text-sm text-gray-600">Route optimization can save ₹800 on fuel and toll costs for Mumbai-Delhi route.</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-purple-100">
                    <h4 className="font-semibold text-gray-800 mb-2">📈 Demand Forecast</h4>
                    <p className="text-sm text-gray-600">High demand expected tomorrow morning (6-8 AM) with 15% price increase.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Search Results Preview */}
        <div className="px-6 mb-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-black">127 trucks found</span>
              <button className="text-yellow-600 text-sm font-medium cursor-pointer">Show on Map</button>
            </div>
            <button className="w-full bg-yellow-500 text-white py-3 rounded-xl font-medium cursor-pointer !rounded-button">
              View Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBookingsScreen = () => (
    <div className="pt-16 pb-24">
      {/* Header */}
      <div className="fixed top-12 left-0 right-0 bg-white z-40 px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setActiveTab("home")}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer"
          >
            <i className="fas fa-arrow-left text-gray-600"></i>
          </button>
          <h1 className="text-lg font-bold text-black">My Bookings</h1>
          <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer">
            <i className="fas fa-filter text-gray-600"></i>
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="fixed top-24 left-0 right-0 bg-white z-30 px-6 py-4 border-b border-gray-100">
        <div className="flex space-x-1 bg-gray-100 rounded-xl p-1">
          <button
            onClick={() => setBookingsActiveTab('active')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium cursor-pointer transition-all ${
              bookingsActiveTab === 'active'
                ? 'bg-yellow-500 text-white shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setBookingsActiveTab('completed')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium cursor-pointer transition-all ${
              bookingsActiveTab === 'completed'
                ? 'bg-yellow-500 text-white shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setBookingsActiveTab('cancelled')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium cursor-pointer transition-all ${
              bookingsActiveTab === 'cancelled'
                ? 'bg-yellow-500 text-white shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Cancelled
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-28">
        {/* Active Bookings */}
        {bookingsActiveTab === 'active' && (
          <div className="px-6 space-y-4">
            {activeBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 cursor-pointer">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <i className={`${getTruckIcon(booking.truckType)} text-yellow-600`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-black text-sm">{booking.truckType}</h3>
                      <p className="text-gray-600 text-xs">#{booking.id}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </div>

                {/* Truck Image */}
                <div className="h-24 mb-4 rounded-xl overflow-hidden">
                  <img
                    src={booking.truckImage}
                    alt={booking.truckType}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Driver Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={booking.driver.image}
                      alt={booking.driver.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-black text-sm">{booking.driver.name}</p>
                    <div className="flex items-center space-x-1">
                      <i className="fas fa-star text-yellow-500 text-xs"></i>
                      <span className="text-xs text-gray-600">{booking.driver.rating}</span>
                    </div>
                  </div>
                  <button className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center cursor-pointer">
                    <i className="fas fa-phone text-green-600 text-sm"></i>
                  </button>
                </div>

                {/* Route */}
                <div className="mb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <i className="fas fa-circle text-green-500 text-xs"></i>
                    <span className="text-sm text-gray-700">{booking.pickup}</span>
                  </div>
                  <div className="ml-2 border-l-2 border-dashed border-gray-300 h-4"></div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-circle text-red-500 text-xs"></i>
                    <span className="text-sm text-gray-700">{booking.delivery}</span>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-600">Progress</span>
                    <span className="text-xs font-medium text-gray-700">{booking.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full transition-all"
                      style={{ width: `${booking.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* ETA */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-clock text-gray-400 text-sm"></i>
                    <span className="text-sm text-gray-600">ETA: {booking.estimatedArrival}</span>
                  </div>
                  <span className="text-xs text-gray-500">{booking.bookingDate}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setActiveTab("track")}
                    className="flex-1 bg-yellow-500 text-white py-3 rounded-xl text-sm font-medium cursor-pointer !rounded-button"
                  >
                    Track Live
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl text-sm font-medium cursor-pointer !rounded-button">
                    Contact Driver
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Completed Bookings */}
        {bookingsActiveTab === 'completed' && (
          <div className="px-6 space-y-4">
            {completedBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <i className={`${getTruckIcon(booking.truckType)} text-green-600`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-black text-sm">{booking.truckType}</h3>
                      <p className="text-gray-600 text-xs">#{booking.id}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <i className="fas fa-circle text-green-500 text-xs"></i>
                    <span className="text-sm text-gray-700">{booking.pickup}</span>
                  </div>
                  <div className="ml-2 border-l-2 border-dashed border-gray-300 h-4"></div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-circle text-red-500 text-xs"></i>
                    <span className="text-sm text-gray-700">{booking.delivery}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700">{booking.driver.name}</p>
                    <div className="flex items-center space-x-1">
                      <i className="fas fa-star text-yellow-500 text-xs"></i>
                      <span className="text-xs text-gray-600">{booking.driver.rating}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600">Completed on</p>
                    <p className="text-sm font-medium text-gray-700">{booking.completedDate}</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl text-sm font-medium cursor-pointer !rounded-button">
                    View Details
                  </button>
                  <button className="flex-1 bg-yellow-500 text-white py-3 rounded-xl text-sm font-medium cursor-pointer !rounded-button">
                    Book Again
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Cancelled Bookings */}
        {bookingsActiveTab === 'cancelled' && (
          <div className="px-6 space-y-4">
            {cancelledBookings.length > 0 ? (
              cancelledBookings.map((booking) => (
                <div key={booking.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <i className={`${getTruckIcon(booking.truckType)} text-red-600`}></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-black text-sm">{booking.truckType}</h3>
                        <p className="text-gray-600 text-xs">#{booking.id}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <i className="fas fa-circle text-green-500 text-xs"></i>
                      <span className="text-sm text-gray-700">{booking.pickup}</span>
                    </div>
                    <div className="ml-2 border-l-2 border-dashed border-gray-300 h-4"></div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-circle text-red-500 text-xs"></i>
                      <span className="text-sm text-gray-700">{booking.delivery}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-gray-600">Cancelled on</p>
                      <p className="text-sm font-medium text-gray-700">{booking.cancelledDate}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-600">Reason</p>
                      <p className="text-sm font-medium text-gray-700">{booking.reason}</p>
                    </div>
                  </div>
                  <button className="w-full bg-yellow-500 text-white py-3 rounded-xl text-sm font-medium cursor-pointer !rounded-button">
                    Book Similar Trip
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clipboard-list text-gray-400 text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">No Cancelled Bookings</h3>
                <p className="text-gray-600 text-sm mb-6">You haven&apos;t cancelled any bookings yet</p>
                <button className="bg-yellow-500 text-white px-6 py-3 rounded-xl text-sm font-medium cursor-pointer !rounded-button">
                  Book a Truck
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  const renderProfileScreen = () => (
    <div className="pt-16 pb-24">
      {/* Header */}
      <div className="fixed top-12 left-0 right-0 bg-white z-40 px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setActiveTab("home")}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer"
          >
            <i className="fas fa-arrow-left text-gray-600"></i>
          </button>
          <h1 className="text-lg font-bold text-black">Profile</h1>
          <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer">
            <i className="fas fa-cog text-gray-600"></i>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-12 px-6">
        {/* Profile Information */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-black mb-1">Arjun Mehta</h2>
              <p className="text-gray-600 text-sm mb-1">+91 98765 43210</p>
              <p className="text-gray-600 text-sm">arjun.mehta@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-black mb-4 px-2">Account Settings</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-user-edit text-yellow-600"></i>
                </div>
                <span className="text-black font-medium">Edit Profile</span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-cog text-yellow-600"></i>
                </div>
                <span className="text-black font-medium">Account Settings</span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-shield-alt text-yellow-600"></i>
                </div>
                <span className="text-black font-medium">Privacy Settings</span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-bell text-yellow-600"></i>
                </div>
                <span className="text-black font-medium">Notifications</span>
              </div>
              <button
                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${
                  notificationsEnabled ? 'bg-yellow-500' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    notificationsEnabled ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                ></div>
              </button>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-globe text-yellow-600"></i>
                </div>
                <span className="text-black font-medium">Language</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 text-sm">English</span>
                <i className="fas fa-chevron-right text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Payment & Billing */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-black mb-4 px-2">Payment & Billing</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-credit-card text-yellow-600"></i>
                </div>
                <span className="text-black font-medium">Payment Methods</span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-receipt text-yellow-600"></i>
                </div>
                <span className="text-black font-medium">Billing History</span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-money-bill-wave text-yellow-600"></i>
                </div>
                <span className="text-black font-medium">Refunds & Credits</span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </div>
          </div>
        </div>

        {/* Booking History Summary */}
        <div className="bg-yellow-50 rounded-2xl p-6 shadow-sm border border-yellow-100 mb-6">
          <h3 className="text-lg font-bold text-black mb-4">Booking Summary</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-black mb-1">47</div>
              <div className="text-xs text-gray-600">Total Bookings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black mb-1">43</div>
              <div className="text-xs text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black mb-1">3</div>
              <div className="text-xs text-gray-600">Active</div>
            </div>
          </div>
        </div>

        {/* Ratings and Reviews */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-black">Your Rating</h3>
            <button className="text-yellow-600 text-sm font-medium cursor-pointer">View All</button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <i className="fas fa-star text-yellow-500 text-2xl"></i>
              <span className="text-2xl font-bold text-black">4.8</span>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Based on 28 reviews</p>
              <div className="flex items-center space-x-1 mt-1">
                <i className="fas fa-star text-yellow-500 text-xs"></i>
                <i className="fas fa-star text-yellow-500 text-xs"></i>
                <i className="fas fa-star text-yellow-500 text-xs"></i>
                <i className="fas fa-star text-yellow-500 text-xs"></i>
                <i className="fas fa-star text-yellow-500 text-xs"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Help and Support */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-black mb-4 px-2">Help & Support</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-question-circle text-yellow-600"></i>
                </div>
                <span className="text-black font-medium">Help Center</span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-headset text-yellow-600"></i>
                </div>
                <span className="text-black font-medium">Contact Support</span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="fab fa-whatsapp text-green-600"></i>
                </div>
                <div>
                  <span className="text-black font-medium">WhatsApp Support</span>
                  <p className="text-gray-500 text-xs">Chat with our team</p>
                </div>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-microphone text-blue-600"></i>
                </div>
                <div>
                  <span className="text-black font-medium">Voice Support</span>
                  <p className="text-gray-500 text-xs">Speak in Hindi/Regional</p>
                </div>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-flag text-yellow-600"></i>
                </div>
                <span className="text-black font-medium">Report an Issue</span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-file-alt text-yellow-600"></i>
                </div>
                <span className="text-black font-medium">Terms & Privacy</span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-8">
          <button className="w-full bg-white border border-red-200 text-red-600 py-4 rounded-2xl text-sm font-medium cursor-pointer !rounded-button">
            <i className="fas fa-sign-out-alt mr-2"></i>
            Logout
          </button>
        </div>
      </div>
    </div>
  );

  const renderTrackLiveScreen = () => (
    <div className="pt-16 pb-24">
      {/* Header */}
      <div className="fixed top-12 left-0 right-0 bg-white z-40 px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setActiveTab("bookings")}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer"
          >
            <i className="fas fa-arrow-left text-gray-600"></i>
          </button>
          <h1 className="text-lg font-bold text-black">Track Live</h1>
          <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer">
            <i className="fas fa-share text-gray-600"></i>
          </button>
        </div>
      </div>

      <div className="px-6 pt-6">
        {/* Progress Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-lg font-bold text-black">{liveTrackingData.status}</span>
            </div>
            <span className="text-sm text-gray-600">Booking #{liveTrackingData.bookingId}</span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-yellow-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${liveTrackingData.progress}%` }}
            ></div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <i className="fas fa-clock text-gray-600"></i>
              <span className="text-gray-600">ETA: {liveTrackingData.eta}</span>
            </div>
            <span className="text-gray-600">15 Oct 2025</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="flex-1 bg-yellow-500 text-white py-4 rounded-xl font-medium hover:bg-yellow-600 transition-all">
            <i className="fas fa-map-marker-alt mr-2"></i>
            Track Live
          </button>
          <button className="flex-1 bg-gray-100 text-gray-600 py-4 rounded-xl font-medium hover:bg-gray-200 transition-all">
            <i className="fas fa-phone mr-2"></i>
            Contact Driver
          </button>
        </div>

        {/* Current Location */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="text-lg font-bold text-black mb-4">Current Location</h3>
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <i className="fas fa-map-marker-alt text-green-600"></i>
            </div>
            <div>
              <p className="font-semibold text-black">{liveTrackingData.currentLocation}</p>
              <p className="text-sm text-gray-600">Last updated: 2:45 PM</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="fas fa-flag text-blue-600"></i>
            </div>
            <div>
              <p className="font-semibold text-black">Next: {liveTrackingData.nextStop}</p>
              <p className="text-sm text-gray-600">ETA: 1h 45m</p>
            </div>
          </div>
        </div>

        {/* Driver Info */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="text-lg font-bold text-black mb-4">Driver Information</h3>
          <div className="flex items-center space-x-4">
            <img
              src={liveTrackingData.driver.image}
              alt={liveTrackingData.driver.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4 className="font-bold text-black">{liveTrackingData.driver.name}</h4>
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center space-x-1">
                  <i className="fas fa-star text-yellow-500 text-sm"></i>
                  <span className="text-sm text-gray-600">{liveTrackingData.driver.rating}</span>
                </div>
                <span className="text-sm text-gray-600">•</span>
                <span className="text-sm text-gray-600">{liveTrackingData.driver.phone}</span>
              </div>
              <p className="text-sm text-gray-600">5+ years experience</p>
            </div>
            <button className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-200 transition-all">
              <i className="fas fa-phone text-green-600"></i>
            </button>
          </div>
        </div>

        {/* Route Details */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="text-lg font-bold text-black mb-4">Route Details</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-play text-green-600 text-sm"></i>
                </div>
                <div>
                  <p className="font-semibold text-black">{liveTrackingData.route.from}</p>
                  <p className="text-sm text-gray-600">Pickup Location</p>
                </div>
              </div>
              <span className="text-sm text-gray-600">10:30 AM</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-stop text-red-600 text-sm"></i>
                </div>
                <div>
                  <p className="font-semibold text-black">{liveTrackingData.route.to}</p>
                  <p className="text-sm text-gray-600">Delivery Location</p>
                </div>
              </div>
              <span className="text-sm text-gray-600">Tomorrow 8:00 AM</span>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Distance</p>
                  <p className="font-bold text-black">{liveTrackingData.route.distance}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-bold text-black">{liveTrackingData.route.totalDuration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-black mb-4">Journey Timeline</h3>
          <div className="space-y-4">
            {liveTrackingData.timeline.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  item.completed ? 'bg-green-500' : 
                  item.status === 'Current Location' ? 'bg-yellow-500' : 'bg-gray-300'
                }`}>
                  {item.completed ? (
                    <i className="fas fa-check text-white text-sm"></i>
                  ) : item.status === 'Current Location' ? (
                    <i className="fas fa-map-marker-alt text-white text-sm"></i>
                  ) : (
                    <i className="fas fa-clock text-white text-sm"></i>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-black">{item.location}</p>
                    <span className="text-sm text-gray-600">{item.time}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentScreen = () => {
    switch (activeTab) {
      case "home":
        return renderHomeScreen();
      case "search":
        return renderSearchScreen();
      case "bookings":
        return renderBookingsScreen();
      case "profile":
        return renderProfileScreen();
      case "track":
        return renderTrackLiveScreen();
      default:
        return renderHomeScreen();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Status Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white z-50 px-6 py-3 flex justify-between items-center text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center space-x-1">
          <i className="fas fa-signal text-black"></i>
          <i className="fas fa-wifi text-black"></i>
          <i className="fas fa-battery-full text-black"></i>
        </div>
      </div>

      {/* Main Content */}
      {renderCurrentScreen()}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black mx-6 mb-6 rounded-3xl px-6 py-4">
        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={() => setActiveTab("home")}
            className="flex flex-col items-center justify-center space-y-1 cursor-pointer"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activeTab === "home" ? "bg-yellow-500" : "bg-white"
              }`}
            >
              <i
                className={`fas fa-home ${activeTab === "home" ? "text-black" : "text-black"}`}
              ></i>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("search")}
            className="flex flex-col items-center justify-center space-y-1 cursor-pointer"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activeTab === "search" ? "bg-yellow-500" : "bg-white"
              }`}
            >
              <i
                className={`fas fa-search ${activeTab === "search" ? "text-black" : "text-black"}`}
              ></i>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("bookings")}
            className="flex flex-col items-center justify-center space-y-1 cursor-pointer"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activeTab === "bookings" ? "bg-yellow-500" : "bg-white"
              }`}
            >
              <i
                className={`fas fa-clipboard-list ${activeTab === "bookings" ? "text-black" : "text-black"}`}
              ></i>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className="flex flex-col items-center justify-center space-y-1 cursor-pointer"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activeTab === "profile" ? "bg-yellow-500" : "bg-white"
              }`}
            >
              <i
                className={`fas fa-user ${activeTab === "profile" ? "text-black" : "text-black"}`}
              ></i>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

