import { baseUrl } from "@/constants/baseUrl";
import { QUERY_KEYS } from "@/constants/query-keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { USER_STORAGE } from "./user.localstore";

const login = async (email: string, password: string): Promise<UserTypes> => {
  const response = await axios.post(`${baseUrl}/api/auth/login`, {
    email: email,
    password: password,
  });
  if (response.status === 200) {
    console.log(response.data);
    return response.data;
  } else {
    throw new Error("Failed to log in");
  }
};

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<
    UserTypes,
    unknown,
    { email: string; password: string },
    unknown
  >(({ email, password }) => login(email, password), {
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEYS.user], data);
      USER_STORAGE.saveUser(data);
      if (data.onboarding) {
        navigate("/");
      } else {
        navigate("/auth/onboarding");
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
