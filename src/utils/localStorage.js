const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const addAccessToken = token => localStorage.getItem(ACCESS_TOKEN);

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);