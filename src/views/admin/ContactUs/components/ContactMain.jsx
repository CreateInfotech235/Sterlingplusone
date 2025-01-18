import { useState, useEffect } from "react";
import axios from "axios";

const ContactMain = () => {
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [messageForm, setMessageForm] = useState({
    name: "",
    email: "", 
    subject: "",
    message: ""
  });

  const fetchContactData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://sterlingplusone-backend-1.onrender.com/web/contectus");
      setContactData(response.data);
    } catch (err) {
      setError("Failed to fetch contact data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContactData();
  }, []);

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("https://sterlingplusone-backend-1.onrender.com/web/sendmessage", messageForm);
      alert("Message sent successfully!");

      setShowModal(false);
      setMessageForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (err) {
      alert(err.response.data.message);
      setError("Failed to send message");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleMessageInputChange = (e) => {
    const { name, value } = e.target;
    setMessageForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`https://sterlingplusone-backend-1.onrender.com/web/contectus/${id}`);
      alert("Message deleted successfully!");
      fetchContactData();
    } catch (err) {
      setError("Failed to delete message");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen p-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8 animate-pulse">
          {/* Title Skeleton */}
          <div className="h-8 bg-gray-200 rounded-lg w-3/4 mx-auto"></div>
          
          {/* Form Fields Skeleton */}
          <div className="space-y-6">
            <div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-12 bg-gray-200 rounded-lg"></div>
            </div>
            
            <div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-12 bg-gray-200 rounded-lg"></div>
            </div>

            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded w-1/3"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded-lg"></div>
                </div>
                <div>
                  <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>

            <div className="h-12 bg-gray-200 rounded-lg w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 border-b pb-4">Contact Messages</h2>
        {error && <div className="text-red-500 text-center mb-6 p-4 bg-red-50 rounded-lg">{error}</div>}

        <div className="space-y-6">
          {contactData.map((contact) => (
            <div key={contact._id} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{contact.contectUs.name}</h3>
                  <p className="text-gray-600">Email: {contact.contectUs.email}</p>
                  <p className="text-gray-600">Contact: {contact.contectUs.contact}</p>
                  <p className="mt-4 text-gray-700">{contact.contectUs.message}</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => { setShowModal(true); setMessageForm({ email: contact.contectUs.email, subject: contact.contectUs.subject }) }}
                    className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
                  >
                    Reply
                  </button>
                  <button
                    onClick={() => handleDelete(contact._id)}
                    className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Message</h2>
              <form onSubmit={handleMessageSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={messageForm.name}
                    onChange={handleMessageInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={messageForm.email}
                    onChange={handleMessageInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={messageForm.subject}
                    onChange={handleMessageInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={messageForm.message}
                    onChange={handleMessageInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    required
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 text-gray-700 border rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactMain;
