import Component from "./component";
import { useHomeData } from "./data";

const Home = () => {
  const { message, handleClick } = useHomeData();
  return <Component message={message} handleClick={handleClick} />;
};

export default Home;
