import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputField from "../../components_admin/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";

export default function SignIn() {
  // Validation schema with Yup
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  // Handle form submission
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const response = await fetch("https://sterlingplusone-backend-1.onrender.com/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Sign-in successful:", data);
        localStorage.setItem("token", data.token);
        navigate("/admin/default");
        // Redirect or handle success
      } else {
        console.error("Sign-in failed:", response.statusText);
        alert("Sign-in failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during sign-in.");
    }
  };

  return (
    <div  className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-center">
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white text-center">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600 text-center">
          Enter your email and password to sign in!
        </p>
       
        {/* Formik form */}
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, errors, touched }) => (
            <Form>
              {/* Email */}
              <div className="relative">
                {/* <label
                  for="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email*
                </label> */}
                <Field
                  variant="auth"
                  extra="mb-3"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="mail@simmmple.com"
                  className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* <!-- Password Input Field --> */}
              <div className="relative">
                {/* <label
                  for="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password*
                </label> */}
                <Field
                  variant="auth"
                  extra="mb-3"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Min. 8 characters"
                  className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium bg-black text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              >
                Sign In
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
