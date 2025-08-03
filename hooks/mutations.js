import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import api from "@/configs/api";

const useRegister = (router) => {
  const mutationFn = async (data) => await api.post("/api/auth/signup", data);

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      console.log(data);
      if (data.message) {
        toast.success(data.message);
        router.push("/signin");
      } else if (data.error) {
        toast.error(data.error);
      }
    },
    onError: (data) => {
      console.log(data);
    },
  });
};

export { useRegister };
