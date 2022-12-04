import { ToastContainer } from "react-toastify";
import { RegisterContainer } from "./frontEnd/components/RegisterContainer";

const AppContainer = () => {
  return (
    <>
      <RegisterContainer />
      <ToastContainer position="top-left" autoClose={3000} theme="dark" />
    </>
  );
};

export default AppContainer;
