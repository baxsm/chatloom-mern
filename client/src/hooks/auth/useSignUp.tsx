import { baseUrl } from "@/constants/baseUrl";
import { QUERY_KEYS } from "@/constants/query-keys";
import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { USER_STORAGE } from "./user.localstore";

const signUp = async (
  name: string,
  email: string,
  password: string
): Promise<UserTypes> => {
  const response = await axios.post(`${baseUrl}/api/auth/register`, {
    name: name,
    email: email,
    password: password,
  });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to log in");
  }
};

export function useSignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<
    UserTypes,
    unknown,
    { name: string; email: string; password: string },
    unknown
  >(({ name, email, password }) => signUp(name, email, password), {
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEYS.user], data);
      USER_STORAGE.saveUser(data);
      navigate("/auth/onboarding");
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
