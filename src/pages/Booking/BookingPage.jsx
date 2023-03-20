
import { Main} from "../../components";
import { useFormik } from "formik";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import "./BookingPage.css";
import { submitAPI} from "../../utilities";
import { useState,useEffect } from "react";
import { useAlertContext } from "../../context/AlertProvider";
import { Button } from '../../components';


const phoneRegEx =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const BookingPage = () => {
  // const location = useLocation();
  const [response,setResponse] = useState(false)
  const { onOpen } = useAlertContext();

  const options = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "7" },
    { value: "8" },
    { value: "9" },
    { value: "10" },
  ];

  var someDate = new Date();
  var numberOfDaysToAdd = 1;
  var date = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
  var availableDate = new Date(date).toISOString().split("T")[0];


  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      bookingDate: availableDate,
      bookingTime: "7:00PM",
      mobile: "",
      guests: 2,
    },
    onSubmit: (values) => {
      const res = submitAPI(values)
      if (res) {
        setResponse(!response)
      }
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      bookingDate: Yup.string().notRequired("Required"),
      bookingTime: Yup.string().notRequired("Required"),
      mobile: Yup.string()
        .matches(phoneRegEx, "Phone number is not valid")
        .required("Required"),
      guests: Yup.string().required("Required"),
    }),
  });


  const disabledDate = () => {
    let today = someDate
    let dd = today.getDate()
    let mm =  ("0" + (today.getMonth() + 1)).slice(-2);
    let yyyy = today.getFullYear()
    return yyyy+'-'+mm+'-'+dd
  }

  useEffect(() => {
    if (response) {
      onOpen('success', 'Your boooking is confirmed.');
        formik.resetForm();
    }
  }, [response]);

  return (
    <Main>
      <Box justifyItems="center" w="auto">
        <VStack w="100%" p={5} alignItems="center">
          <Heading as="h2" id="contactme-section" noOfLines={1}>
            Reservation
          </Heading>
          <Box p={4} rounded="md" minW="400px">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4}>
                <FormControl
                  isInvalid={
                    !!formik.errors.firstName && formik.touched.firstName
                  }
                >
                  <FormLabel htmlFor="firstName">Firstname</FormLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    {...formik.getFieldProps("firstName")}
                  />
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={
                    !!formik.errors.lastName && formik.touched.lastName
                  }
                >
                  <FormLabel htmlFor="lastName">Lastname</FormLabel>
                  <Input
                    id="lastName"
                    name="lastName"
                    {...formik.getFieldProps("lastName")}
                  />
                  <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!formik.errors.bookingDate && formik.touched.bookingDate}
                >
                  <FormLabel htmlFor="bookingDate">Date</FormLabel>
                  <Input
                    id="bookingDate"
                    name="bookingDate"
                    type="date"
                    min={disabledDate()}
                    {...formik.getFieldProps("bookingDate")}
                  />
                  <FormErrorMessage>{formik.errors.bookingDate}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!formik.errors.bookingTime && formik.touched.bookingTime}
                >
                  <FormLabel htmlFor="bookingTime">Time</FormLabel>
                  <Select
                    id="bookingTime"
                    name="bookingTime"
                    {...formik.getFieldProps("bookingTime")}
                  >
                    <option value="7:00PM">7:00 PM</option>
                    <FormErrorMessage>{formik.errors.bookingTime}</FormErrorMessage>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="guest">Guest</FormLabel>
                  <Select
                    id="guest"
                    name="guest"
                    defaultValue="2"
                    {...formik.getFieldProps("guest")}
                  >
                    {options.map((item, index) => {
                      return (
                        <option key={index} value={item.value}>
                          {item.value}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl
                  isInvalid={!!formik.errors.mobile && formik.touched.mobile}
                >
                  <FormLabel htmlFor="comment">Mobile</FormLabel>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="number"
                    placeholder="216 3847 2222"
                    {...formik.getFieldProps("mobile")}
                  />
                  <FormErrorMessage>{formik.errors.mobile}</FormErrorMessage>
                </FormControl>
                <Button type="submit"  width="full" primary>
                  Submit
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Box>
    </Main>
  );
};
