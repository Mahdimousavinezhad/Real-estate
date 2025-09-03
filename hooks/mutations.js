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
      toast.error(data.response.data.error);
    },
  });
};

const useAddProfile = (setProfileData) => {
  const mutationFn = async (data) => await api.post("/api/profile", data);

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      if (data.message) {
        toast.success(data.message);
        setProfileData({
          title: "",
          description: "",
          location: "",
          price: 0,
          phone: "",
          realState: "",
          constructionDate: new Date(),
          category: "",
          rules: [],
          amenities: [],
        });
      } else if (data.error) {
        toast.error(data.error);
      }
    },
    onError: (data) => {
      toast.error(data.response.data.error);
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
    },
  });
};

const usePublishProfile = (router) => {
  const mutationFn = async (id) =>
    await api.patch(`/api/profile/admin?id=${id}`);

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      if (data.message) {
        toast.success(data.message);
        // router.refresh() I had used this but its dosen't work
        router.push("/dashboard/admin"); // This is for dynamic route like: /dashboard/admin/[profileId]
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else if (data.error) {
        toast.error(data.error);
        console.log(data);
      }
    },
    onError: (data) => {
      toast.error(data.response.data.error);
    },
  });
};

const useDeleteProfileAdmin = (router) => {
  const mutationFn = async (id) =>
    await api.delete(`/api/profile/admin?id=${id}`);

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      if (data.message) {
        toast.success(data.message);
        // router.refresh() I had used this but its dosen't work
        router.push("/dashboard/admin"); // This is for dynamic route like: /dashboard/admin/[profileId]
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else if (data.error) {
        toast.error(data.error);
        console.log(data);
      }
    },
    onError: (data) => {
      toast.error(data.response.data.error);
    },
  });
};

const useFavorite = (favoriteStage) => {
  const mutationFn = async (id) =>
    await api.patch(`/api/profile/favorite?status=${favoriteStage}&id=${id}`);

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      if (data.message) {
        toast.success(data.message);
        // router.refresh() I had used this but its dosen't work
        window.location.reload();
      } else if (data.error) {
        toast.error(data.error);
        console.log(data);
      }
    },
    onError: (data) => {
      toast.error(data.response.data.error);
    },
  });
};

export {
  useRegister,
  useAddProfile,
  useEditProfile,
  useDeleteProfile,
  useDeleteProfileAdmin,
  usePublishProfile,
  useFavorite,
};
