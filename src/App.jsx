import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { ThemeProvider, AlertProvider } from "./context";
import { Header, Footer } from "./components";
import "./App.css";
import { Home, BookingPage} from "./pages";
import { ChakraProvider } from "@chakra-ui/react";
import { Alert } from "./components/Alert";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Alert />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="bookings" element={<BookingPage />}>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <AlertProvider>
      <ChakraProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </ChakraProvider>
    </AlertProvider>
  );
}

export default App;
