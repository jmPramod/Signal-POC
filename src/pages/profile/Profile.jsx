import React, { useContext, useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { GlobalContext } from '@/context/GlobalContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { profileUpdate } from '@/utils/API.services';
import { toast, Toaster } from 'sonner';

const Profile = () => {
  const { user, setUser } = useContext(GlobalContext);

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [initialValues, setInitialValues] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  useEffect(() => {
    if (user) {
      setInitialValues({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        password: '',
      });
    }
  }, [user]);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Phone must be 10 digits')
      .required('Phone is required'),
    password: Yup.string()
     });

  // const handleSubmit = (values) => {
  //   const updatedUser = {
  //     ...user,
  //     ...values,
  //     images: {
  //       imageUrl: selectedImage ? previewImage : user?.images?.imageUrl,
  //     },
  //   };
  //   setUser(updatedUser);
  //   alert('Profile updated successfully!');
  // };

  
  const handleSubmit = async (values) => {
    console.log(values);
    
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      // formData.append('password', values.password);
      console.log(formData);
      // Append the image file if a new one is selected
      if (selectedImage) {
        formData.append('file', selectedImage);
      }
  console.log(formData);
  for (const [key, value] of formData.entries()) {
    console.log(`1.${key}:`, value);
  }
      // Send formData to the API
      const response = await profileUpdate(formData, user._id);
  if(response.statusCode===200){
    localStorage.setItem("User", JSON.stringify(response?.data));
    setUser(response?.data);
    toast("User Updated Successfully.", {
      style: {
        backgroundColor: "green",
        color: "white",
      },
    });
        
  }
       } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred while updating the profile. Please try again later.');
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center mt-[40px]">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Update Profile</h2>

        <div className="flex items-center justify-center mb-6">
          <label htmlFor="fileInput" className="cursor-pointer relative">
            <img
              src={
                previewImage
                  ? previewImage
                  : user && user.images?.imageUrl
              }
              alt="Profile avatar"
              className="rounded-full w-24 h-24 object-cover shadow-md"
            />
            <EditIcon className="absolute bottom-0 right-0 text-blue-500 bg-white rounded-full p-1 shadow-md" />
            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={handleImageUpload}
              accept="image/*"
            />
          </label>
        </div>

        {user && (
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                    Name
                  </label>
                  <Field
                    name="name"
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage name="name" component="div" className="text-sm text-red-500" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage name="email" component="div" className="text-sm text-red-500" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                    Phone
                  </label>
                  <Field
                    name="phone"
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage name="phone" component="div" className="text-sm text-red-500" />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage name="password" component="div" className="text-sm text-red-500" />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Updating...' : 'Update Profile'}
                </button>
              </Form>
            )}
          </Formik>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default Profile;
