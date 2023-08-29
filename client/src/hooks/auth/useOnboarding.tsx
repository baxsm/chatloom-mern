import { baseUrl } from "@/constants/baseUrl";
import { QUERY_KEYS } from "@/constants/query-keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { USER_STORAGE } from "./user.localstore";

const onboarding = async (
  username: string,
  userId: string,
  file: File | null
): Promise<UserTypes> => {
  const checkUsername = await axios.post(`${baseUrl}/api/user/checkUsername`, {
    username: username,
  });

  if (checkUsername.status === 200) {
    let imageUrl = "";
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(
        `${baseUrl}/api/user/uploadImage`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        imageUrl = await response.data;
      } else {
        throw new Error("Image upload failed");
      }
    }
    const onboardingResponse = await axios.post(
      `${baseUrl}/api/user/updateOnboarding`,
      {
        username: username,
        userId: userId,
        imageUrl: imageUrl,
      }
    );
    if (onboardingResponse.status === 200) {
      return onboardingResponse.data;
    } else {
      throw new Error("Onboarding failed");
    }
  } else {
    throw new Error("Username already taken");
  }
};

export function useOnboarding() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<
    UserTypes,
    unknown,
    { username: string; userId: string; file: File | null },
    unknown
  >(({ username, userId, file }) => onboarding(username, userId, file), {
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEYS.user], data);
      USER_STORAGE.saveUser(data);
      setTimeout(() => {
        console.log("here");
        navigate("/");
      }, 600);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
