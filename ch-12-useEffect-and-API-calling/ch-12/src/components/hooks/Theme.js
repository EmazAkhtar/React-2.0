import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const useThemes = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
export default useThemes;
