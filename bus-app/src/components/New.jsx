import React, { useState } from "react";
import { Search, MapPin, Navigation, ArrowRight, Loader2 } from "lucide-react";

export default function VillageFinder() {
  const [fromQuery, setFromQuery] = useState("");
  const [toQuery, setToQuery] = useState("");
  const [fromResults, setFromResults] = useState([]);
  const [toResults, setToResults] = useState([]);
  const [fromVillage, setFromVillage] = useState(null);
  const [toVillage, setToVillage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const fetchResults = async (query, type) => {
    try {
      setError(null);
      setLoading(true);

      const res = await fetch(`http://localhost:3000/api/search?q=${query}`);
      if (!res.ok) throw new Error("Failed to fetch results");

      const data = await res.json();

      if (type === "from") setFromResults(data);
      else setToResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectVillage = (village, type) => {
    if (type === "from") {
      setFromVillage(village);
      setFromQuery(village.name);
      setFromResults([]);
    } else {
      setToVillage(village);
      setToQuery(village.name);
      setToResults([]);
    }
    setActiveField(null);
  };

  const handleInputFocus = (type) => {
    setActiveField(type);
  };

  const handleInputChange = (value, type) => {
    if (type === "from") {
      setFromQuery(value);
      setFromVillage(null);
    } else {
      setToQuery(value);
      setToVillage(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <Navigation className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Village Route Finder
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover routes between villages with our intelligent search system
          </p>
        </div>

        {/* Main Form Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 relative">
              {/* From Field */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="inline w-4 h-4 mr-2 text-green-500" />
                  From Village
                </label>
                <div className="relative">
                  <div
                    className={`relative transition-all duration-300 ${
                      activeField === "from" ? "scale-105" : ""
                    }`}
                  >
                    <input
                      type="text"
                      placeholder="Enter departure village..."
                      value={fromQuery}
                      onChange={(e) => handleInputChange(e.target.value, "from")}
                      onFocus={() => handleInputFocus("from")}
                      className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:ring-0 text-gray-800 font-medium bg-white/50 backdrop-blur-sm ${
                        activeField === "from"
                          ? "border-green-400 shadow-lg shadow-green-100"
                          : fromVillage
                          ? "border-green-300 bg-green-50/50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    />
                    <Search
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                        activeField === "from"
                          ? "text-green-500"
                          : "text-gray-400"
                      }`}
                    />
                    {fromQuery.trim() && (
                      <button
                        onClick={() => fetchResults(fromQuery, "from")}
                        disabled={loading}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 font-medium text-sm"
                      >
                        {loading ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          "Search"
                        )}
                      </button>
                    )}
                  </div>

                  {/* From Results Dropdown */}
                  {fromResults.length > 0 && (
                    <div className="absolute z-10 w-full mt-2 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 max-h-60 overflow-y-auto">
                      {fromResults.map((village, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleSelectVillage(village, "from")}
                          className="p-4 hover:bg-green-50 cursor-pointer transition-all duration-200 first:rounded-t-2xl last:rounded-b-2xl border-b border-gray-100 last:border-b-0 group"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                            <div>
                              <p className="font-semibold text-gray-800">
                                {village.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {village.district}, {village.state}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Arrow Connector */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full shadow-lg">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* To Field */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="inline w-4 h-4 mr-2 text-red-500" />
                  To Village
                </label>
                <div className="relative">
                  <div
                    className={`relative transition-all duration-300 ${
                      activeField === "to" ? "scale-105" : ""
                    }`}
                  >
                    <input
                      type="text"
                      placeholder="Enter destination village..."
                      value={toQuery}
                      onChange={(e) => handleInputChange(e.target.value, "to")}
                      onFocus={() => handleInputFocus("to")}
                      className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:ring-0 text-gray-800 font-medium bg-white/50 backdrop-blur-sm ${
                        activeField === "to"
                          ? "border-red-400 shadow-lg shadow-red-100"
                          : toVillage
                          ? "border-red-300 bg-red-50/50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    />
                    <Search
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                        activeField === "to" ? "text-red-500" : "text-gray-400"
                      }`}
                    />
                    {toQuery.trim() && (
                      <button
                        onClick={() => fetchResults(toQuery, "to")}
                        disabled={loading}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 font-medium text-sm"
                      >
                        {loading ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          "Search"
                        )}
                      </button>
                    )}
                  </div>

                  {/* To Results Dropdown */}
                  {toResults.length > 0 && (
                    <div className="absolute z-10 w-full mt-2 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 max-h-60 overflow-y-auto">
                      {toResults.map((village, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleSelectVillage(village, "to")}
                          className="p-4 hover:bg-red-50 cursor-pointer transition-all duration-200 first:rounded-t-2xl last:rounded-b-2xl border-b border-gray-100 last:border-b-0 group"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-red-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                            <div>
                              <p className="font-semibold text-gray-800">
                                {village.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {village.district}, {village.state}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-2xl">
                <p className="text-red-600 font-medium text-center">{error}</p>
              </div>
            )}
          </div>

          {/* Route Result Card */}
          {fromVillage && toVillage && (
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl shadow-2xl p-8 text-white transform animate-in slide-in-from-bottom-8 duration-700">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <Navigation className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Route Selected</h3>
                <p className="text-indigo-100">Your journey details are ready</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 items-center">
                {/* From Village */}
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <MapPin className="w-8 h-8 mx-auto mb-3 text-green-300" />
                    <h4 className="font-bold text-lg mb-1">From</h4>
                    <p className="text-xl font-semibold">
                      {fromVillage.name}
                    </p>
                    <p className="text-indigo-200">
                      {fromVillage.district}, {fromVillage.state}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="bg-white/20 p-4 rounded-full">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                </div>


                {/* To Village */}
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <MapPin className="w-8 h-8 mx-auto mb-3 text-red-300" />
                    <h4 className="font-bold text-lg mb-1">To</h4>
                    <p className="text-xl font-semibold">
                      {toVillage.name}
                    </p>
                    <p className="text-indigo-200">
                      {toVillage.district}, {toVillage.state}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
