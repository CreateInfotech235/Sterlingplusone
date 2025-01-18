import axios from "axios";
import { useState, useEffect } from "react";

const Admindata = () => {
    const [adminData, setAdminData] = useState({
        name: "",
        email: "",
        password: "",
        oldPassword: ""
    });

    const [nodemailerData, setNodemailerData] = useState({
        nodemailerEmail: "",
        nodemailerPassword: ""
    });
console.log("admin data");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showNodemailerPassword, setShowNodemailerPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                setLoading(true);
                const response = await axios.get("https://sterlingplusone-backend-1.onrender.com/admin/getAdmin");
                const { data } = response;
                if (data.status === "Success") {
                    setAdminData({
                        name: data.admin.name || "",
                        email: data.admin.email || "",
                        password: "",
                        oldPassword: ""
                    });
                    setNodemailerData({
                        nodemailerEmail: data.admin.nodemailerEmail || "",
                        nodemailerPassword: data.admin.nodemailerPassword || ""
                    });
                }
            } catch (err) {
                setError("Failed to fetch admin data");
                console.error(err);
            } finally {
                setLoading(false);
                setIsLoading(false);
            }
        };

        fetchAdminData();
    }, []);

    const handleAdminSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("https://sterlingplusone-backend-1.onrender.com/admin/updateAdmin", {
                name: adminData.name,
                email: adminData.email,
                password: adminData.password,
                oldPassword: adminData.oldPassword
            });

            const { data } = response;
            if (data.status === "Success") {
                alert("Admin details updated successfully!");
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError("Failed to update admin data");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleNodemailerSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const nodemailerResponse = await axios.post("https://sterlingplusone-backend-1.onrender.com/admin/updateNodemailer", {
                nodemailerEmail: nodemailerData.nodemailerEmail,
                nodemailerPassword: nodemailerData.nodemailerPassword
            });

            const nodemailerResponseData = nodemailerResponse.data;
            if (nodemailerResponseData.status === "Success") {
                alert("Nodemailer settings updated successfully!");
            }
        } catch (err) {
            setError("Failed to update nodemailer settings");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleAdminChange = (e) => {
        setAdminData({
            ...adminData,
            [e.target.name]: e.target.value
        });
    };

    const handleNodemailerChange = (e) => {
        setNodemailerData({
            ...nodemailerData,
            [e.target.name]: e.target.value
        });
    };

    if (isLoading) {
        return (
            <div className="container mx-auto p-6 max-w-4xl">
                <div className="animate-pulse space-y-6">
                    <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                        <div className="space-y-3">
                            <div className="h-4 bg-gray-200 rounded w-1/6"></div>
                            <div className="h-10 bg-gray-200 rounded"></div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-4 bg-gray-200 rounded w-1/6"></div>
                            <div className="h-10 bg-gray-200 rounded"></div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-4 bg-gray-200 rounded w-1/6"></div>
                            <div className="h-10 bg-gray-200 rounded"></div>
                        </div>
                        <div className="h-12 bg-gray-200 rounded"></div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                        <div className="space-y-3">
                            <div className="h-4 bg-gray-200 rounded w-1/6"></div>
                            <div className="h-10 bg-gray-200 rounded"></div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-4 bg-gray-200 rounded w-1/6"></div>
                            <div className="h-10 bg-gray-200 rounded"></div>
                        </div>
                        <div className="h-12 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-6">Admin Settings</h2>
            {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

            <div className="space-y-6">
                <form onSubmit={handleAdminSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
                    <h3 className="text-2xl font-semibold">General Settings</h3>
                    <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={adminData.name}
                            onChange={handleAdminChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={adminData.email}
                            onChange={handleAdminChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Old Password</label>
                        <div className="relative">
                            <input
                                type={showOldPassword ? "text" : "password"}
                                name="oldPassword"
                                value={adminData.oldPassword}
                                onChange={handleAdminChange}
                                placeholder="Enter current password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowOldPassword(!showOldPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
                            >
                                {showOldPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">New Password</label>
                        <div className="relative">
                            <input
                                type={showNewPassword ? "text" : "password"}
                                name="password"
                                value={adminData.password}
                                onChange={handleAdminChange}
                                placeholder="Enter new password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
                            >
                                {showNewPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
                    >
                        {loading ? "Saving Admin Data..." : "Save Admin Changes"}
                    </button>
                </form>

                <form onSubmit={handleNodemailerSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
                    <h3 className="text-2xl font-semibold">Nodemailer Settings</h3>
                    <div>
                        <label className="block text-sm font-medium mb-2">Nodemailer Email</label>
                        <input
                            type="email"
                            name="nodemailerEmail"
                            value={nodemailerData.nodemailerEmail}
                            onChange={handleNodemailerChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Nodemailer Password</label>
                        <div className="relative">
                            <input
                                type={showNodemailerPassword ? "text" : "password"}
                                name="nodemailerPassword"
                                value={nodemailerData.nodemailerPassword}
                                onChange={handleNodemailerChange}
                                placeholder="Enter nodemailer password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowNodemailerPassword(!showNodemailerPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
                            >
                                {showNodemailerPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
                    >
                        {loading ? "Saving Nodemailer..." : "Save Nodemailer Settings"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Admindata;
