import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirection = (path, delay) => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(path);
    }, delay);

    return () => clearTimeout(timer);
  }, [navigate, path, delay]);
};

export default useRedirection;