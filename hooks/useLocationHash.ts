import { useEffect, useState } from "react";

const useLocationHash = () => {
  const [locationHash, setLocationHash] = useState("");
  useEffect(() => {
    const onHashChange = () => setLocationHash(location.hash.substr(1));
    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return locationHash;
};

export default useLocationHash;
