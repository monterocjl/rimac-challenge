import { BASE_PATH } from "../utils/constants";

export async function getUser(userId) {
    try {
      const url = `${BASE_PATH}/users/${userId}`;
      const response = await fetch(url);
      const result = await response.json();
      return result
      
    } catch (error) {
      return null;
    }
  }
  