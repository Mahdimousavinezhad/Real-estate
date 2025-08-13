import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import api from "@/configs/api";

const useRegister = (router) => {
  const mutationFn = async (data) => await api.post("/api/auth/signup", data);

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
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

const useAddProfile = () => {
  const mutationFn = async (data) => await api.post("/api/profile", data);

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      if (data.message) {
        toast.success(data.message);
      } else if (data.error) {
        toast.error(data.error);
      }
    },
    onError: (data) => {
      toast.error(data.response.data.error);
      console.log(data);
    },
  });
};

const useEditProfile = (profileId, router) => {
  const mutationFn = async (data) =>
    await api.patch("/api/profile", data, { params: { id: profileId } });

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      if (data.message) {
        toast.success(data.message);
        router.back();
      } else if (data.error) {
        toast.error(data.error);
      }
    },
    onError: (data) => {
      toast.error(data.response.data.error);
      console.log(data);
    },
  });
};

const useDeleteProfile = () => {
  const mutationFn = async (id) =>
    await api.delete("/api/profile", { params: { id } });

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      if (data.message) {
        toast.success(data.message);
        location.reload();
      } else if (data.error) {
        toast.error(data.error);
      }
    },
    onError: (data) => {
      toast.error(data.response.data.error);
      console.log(data);
    },
  });
};

export { useRegister, useAddProfile, useEditProfile, useDeleteProfile };
