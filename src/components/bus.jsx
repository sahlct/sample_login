import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Bus() {
    const [showModal, setShowModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [buses, setBuses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        busName: "",
        busNumber: "",
        busColor: "",
        busType: "",
        ownerName: "",
        ownerPhone: "",
        assistentPhone: "",
    });
    const [selectedBus, setSelectedBus] = useState(null);

    const accessToken = localStorage.getItem("accessToken");

    // Fetch bus list
    useEffect(() => {
        fetchBuses();
    }, []);

    const fetchBuses = async () => {
        try {
            const response = await axios.get(
                "https://kerala-bus.onrender.com/api/owner/get-bus/",
                {
                    headers: { Authorization: `${accessToken}` },
                }
            );
            setBuses(response.data.buses);
        } catch {
            setError("Failed to fetch buses.");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await axios.post(
                "https://kerala-bus.onrender.com/api/owner/add-bus",
                formData,
                {
                    headers: {
                        Authorization: `${accessToken}`,
                    },
                }
            );

            toast.success(response.data.message);

            // Fetch updated bus list after adding a new bus
            fetchBuses();

            // Close modal
            setShowModal(false);

            // Clear form data
            setFormData({
                busName: "",
                busNumber: "",
                busColor: "",
                busType: "",
                ownerName: "",
                ownerPhone: "",
                assistentPhone: "",
            });

        } catch (err) {
            setError(err.response?.data?.message || "Failed to add bus. Please try again.");
            toast.error(err.response?.data?.message || "Failed to add bus. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleRowClick = async (busId) => {
        console.log("busid",busId )
        try {
            const response = await axios.get(
                `https://kerala-bus.onrender.com/api/owner/get-bus/${busId}`,
                {
                    headers: { Authorization: `${accessToken}` },
                }
            );
            setSelectedBus(response.data.bus);
            setShowDetailModal(true);
        } catch (err) {
            setError("Failed to fetch bus details.");
            toast.error(err);
        }
    };

    return (
        <div className="p-6 relative">
            {error && <p className="text-red-500 text-center">{error}</p>}
            {loading && <p className="text-red-500 text-center">Loading...</p>}

            {/* Add Bus Button */}
            <div className="flex justify-end mb-4">
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Add Bus
                </button>
            </div>

            {/* Bus List Table - Show only if buses exist */}
            {buses.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 shadow-md">
                        <thead className="bg-gray-200">
                            <tr>
                                {["Bus Name", "Bus Number", "Bus Color", "Bus Type", "Owner Name", "Owner Phone", "Assistant Phone"].map((header, index) => (
                                    <th key={index} className="py-2 px-4 border-b text-left text-gray-700">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {buses.map((bus, index) => (
                                <tr key={index} className="hover:bg-gray-100 cursor-pointer" onClick={() => handleRowClick(bus.busId)}>
                                    <td className="py-2 px-4 border-b">{bus.busName}</td>
                                    <td className="py-2 px-4 border-b">{bus.busNumber}</td>
                                    <td className="py-2 px-4 border-b">{bus.busColor}</td>
                                    <td className="py-2 px-4 border-b">{bus.busType}</td>
                                    <td className="py-2 px-4 border-b">{bus.ownerName}</td>
                                    <td className="py-2 px-4 border-b">{bus.ownerMobile}</td>
                                    <td className="py-2 px-4 border-b">{bus.assistendPhone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-4">
                    {error ? "Failed to load buses. Please try again." : "No buses available."}
                </p>
            )}

            {/* Add Bus Modal */}
            {showModal && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-10 bg-white p-6 rounded-lg shadow-lg w-full max-w-md animate-slideIn z-50">
                    <h2 className="text-xl font-semibold mb-4">Add Bus</h2>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        {[
                            { name: "busName", label: "Bus Name" },
                            { name: "busNumber", label: "Bus Number" },
                            { name: "busColor", label: "Bus Color" },
                            { name: "busType", label: "Bus Type" },
                            { name: "ownerName", label: "Owner Name" },
                            { name: "ownerPhone", label: "Owner Phone" },
                            { name: "assistentPhone", label: "Assistant Phone" },
                        ].map((field) => (
                            <div key={field.name}>
                                <label className="block text-start text-sm font-medium text-gray-600">
                                    {field.label}
                                </label>
                                <input
                                    type="text"
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        ))}
                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                            >
                                Add Bus
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Bus Detail Modal */}
            {showDetailModal && selectedBus && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-10 bg-white p-6 rounded-lg shadow-lg w-full max-w-md animate-slideIn z-50">
                    <h2 className="text-xl font-semibold mb-4">Bus Details</h2>
                    <div className="space-y-3 text-start ps-10">
                        <div >
                            <label className="block text-sm font-medium text-gray-600">Bus Name</label>
                            <p className="mt-1">{selectedBus.busName}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Bus Number</label>
                            <p className="mt-1">{selectedBus.busNumber}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Bus Color</label>
                            <p className="mt-1">{selectedBus.busColor}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Bus Type</label>
                            <p className="mt-1">{selectedBus.busType}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Owner Name</label>
                            <p className="mt-1">{selectedBus.ownerName}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Owner Phone</label>
                            <p className="mt-1">{selectedBus.ownerMobile}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Assistant Phone</label>
                            <p className="mt-1">{selectedBus.assistendPhone}</p>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={() => setShowDetailModal(false)}
                                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Animation */}
            <style>
                {`
                    @keyframes slideIn {
                        from { opacity: 0; transform: translateY(-20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-slideIn {
                        animation: slideIn 0.3s ease-out;
                    }
                `}
            </style>
        </div>
    );
}