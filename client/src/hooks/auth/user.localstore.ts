const USER_LOCAL_STORAGE_KEY = "CHATLOOM_USER";

export const USER_STORAGE = {
  saveUser: (user: UserTypes): void => {
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
  },

  getUser: (): UserTypes | undefined => {
    const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
    try {
      return user ? JSON.parse(user) : undefined;
    } catch (error) {
      return undefined;
    }
  },

  removeUser: (): void => {
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
  },
};
