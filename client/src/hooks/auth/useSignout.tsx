import { QUERY_KEYS } from "@/constants/query-keys";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { USER_STORAGE } from "./user.localstore";

export function useSignOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onSignOut = useCallback(() => {
    queryClient.setQueryData([QUERY_KEYS.user], null);
    USER_STORAGE.removeUser();
    navigate("/auth/login");
  }, [navigate, queryClient]);

  return onSignOut;
}
