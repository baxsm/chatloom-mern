import { baseUrl } from "@/constants/baseUrl";
import { QUERY_KEYS } from "@/constants/query-keys";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { USER_STORAGE } from "./user.localstore";
import { useEffect } from "react";

const getUser = async (user: UserTypes | null | undefined) => {
  if (!user) {
    return null;
  }

  const response = await axios.post(`${baseUrl}/user/getUser`, {
    userId: user._id,
  });

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Unable to fetch user");
  }
};

export function useUser() {
  const { data: user, isLoading } = useQuery<UserTypes | null>(
    [QUERY_KEYS.user],
    async (): Promise<UserTypes | null> => getUser(user),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      initialData: USER_STORAGE.getUser,
      onError: () => {
        USER_STORAGE.removeUser();
      },
    }
  );

  useEffect(() => {
    if (user) {
      USER_STORAGE.saveUser(user);
    } else {
      USER_STORAGE.removeUser();
    }
  }, [user]);

  return {
    user: user ?? null, isLoading
  };
}
