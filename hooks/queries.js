import { useQuery } from "@tanstack/react-query";

import api from "@/configs/api";

const useGetFavorite = (id) => {
  const queryFn = async () => await api.get(`/api/profile/favorite?id=${id}`);

  return useQuery({
    queryFn,
    queryKey: ["get-favorite-status", id],
    onSuccess: (data) => {
      if (data.error) {
        toast.error(data.error);
        console.log(data);
      }
    },
    onError: (data) => {
      toast.error(data.response.data.error);
    },
  });
};

export { useGetFavorite };
