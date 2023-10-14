import { useRef } from "react";

function useGenerateId(): () => number {
  const idRef = useRef(0);

  return () => {
    idRef.current += 1;
    return idRef.current;
  };
}

export default useGenerateId;
