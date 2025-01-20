import React, { useContext, useState } from "react";
import { styles } from "./styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  FormHelperText,
} from "@mui/material";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { login, register } from "@/utils/API.services";
import { GlobalContext } from "@/context/GlobalContext";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(GlobalContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const initialValuesForRegister = {
    name: "",
    secondName: "",
    email: "",
    phone: "",
    password: "",
    reEnterPassword: "",
    pinCode: "",
    address: "",
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleMouseUpPassword = (event) => event.preventDefault();

  // const handleSubmit = async (values, { setSubmitting, setTouched }) => {
  //   setLoading(true);

  //   // Mark all fields as touched to trigger validation
  //   setTouched({
  //     name: true,
  //     email: true,
  //     phone: true,
  //     password: true,
  //   });

  //   const payload = {
  //     email: values.email,
  //     password: values.password,

  //     phone: values.phone,
  //     name: values.name,
  //   };
  //   console.log(payload);

  //   // let user = await register(payload);
  //   // if (user && Object.keys(user?.data).length !== 0) {
  //   //   localStorage.setItem("User", JSON.stringify(user?.data));
  //   //   setUser(user?.data);
  //   //   navigate("/home");
  //   // }
  //   setLoading(false);
  //   setSubmitting(false);
  // };

  const handleSubmitForRegiter = async (values) => {
    // let { reEnterPassword, ...a } = values;
    console.log('values', values);
    setLoading(true);
    let res = await register(values);
if(res.statusCode===200){
    localStorage.setItem('token', JSON.stringify(res?.token));
    
    localStorage.setItem('User', JSON.stringify(res?.data));
    setUser(res?.data)
  navigate("/home")
}
    // if (user && Object.keys(user?.data).length !== 0) {
    //   console.log('user?.data', user?.data);

    //   dispatch(userAction.setUser(user?.data));
    //   localStorage.setItem('User', JSON.stringify(user?.data));
    //   router.push('/');
    // } else {
    //   setErrorMsg(user?.message);
    //   console.log('user', user, user?.message);
    // }
    // if (user && user.statusCode != 200) {
    //   setErrorMsg(user?.message);
    // }
    // setLoading(false);
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Animation for Login text (top to bottom)
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1 }, // Adding delay of 1 second
    },
  };

  // Framer Motion animation variants
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const containerVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%", // Original width
      transition: {
        duration: 1, // Time for animation
        ease: "easeInOut",
      },
    },
  };
  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <styles.outerContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "flex",
          background: "white",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <styles.leftContainer>
          <styles.image src="road.png" alt="img" />
        </styles.leftContainer>

        <styles.rightContainer>
          {/* Login Text Animation */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <Typography variant="h4">Sign Up</Typography>
          </motion.div>

          {/* Formik Form */}
          <Formik
            initialValues={initialValuesForRegister}
            validationSchema={validationSchema}
            onSubmit={handleSubmitForRegiter}
          >
            <styles.formEle>
              {/* Name Input with Animation */}
              <styles.emailAnimation
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 1 }}
              >
                <styles.inputField
                  id="name"
                  placeholder="Enter Name"
                  name="name"
                    />{" "}
                <ErrorMessage
                  className="text-red-500 text-sm"
                  name="name"
                  component="div"
                />{" "}
              </styles.emailAnimation>

              {/* Phone Input with Animation */}
              <styles.emailAnimation
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 1 }}
              >
                <styles.inputField
                  id="phone"
                  placeholder="Enter Phone"
                  name="phone"
                />
                <ErrorMessage
                  className="text-red-500 text-sm"
                  name="phone"
                  component="div"
                />
               </styles.emailAnimation>

              {/* Email Input with Animation */}
              <styles.emailAnimation
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 1 }}
              >
                <styles.inputField
                  id="email"
                  placeholder="Enter Email"
                  name="email"
                />
             <ErrorMessage
                  className="text-red-500 text-sm"
                  name="email"
                  component="div"
                />  </styles.emailAnimation>

              {/* Password Input with Animation */}
              <styles.emailAnimation
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 1 }}
              >
                <styles.inputField
                  id="Password"
                  placeholder="Enter Password"
                  name="password"
                />
                <ErrorMessage
                  className="text-red-500 text-sm"
                  name="password"
                  component="div"
                />
               </styles.emailAnimation>

              {/* Button with Delayed Animation */}
              <styles.buttonAnimation
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.5, delay: 1.5 }} // Appears after 1 second
              >
                <Button
                  type="submit"
                  // disabled={isSubmitting}
                
                >
                  {!loading ? "Register" : "Registering..."}
                </Button>
                <Typography>
                  Do you have an account?{" "}
                  <u
                    className="cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </u>
                </Typography>
              </styles.buttonAnimation>
            </styles.formEle>
          </Formik>
        </styles.rightContainer>
      </motion.div>
    </styles.outerContainer>
  );
};

export default Register;
