import { STORAGE } from "@/config/storage.const";
import { AuthLocalStorage } from "@/types/authStore";

export default abstract class AuthStorage {
  static setToken(token: string): void {
    localStorage.setItem(STORAGE.AUTH, token);
  }
  static getToken(): string | null {
    const item = localStorage.getItem(STORAGE.AUTH);
    if (item) {
      try {
        const parse = JSON.parse(item) as AuthLocalStorage;
        return parse.state.token;
      } catch (e) {}
    }
    return null;
  }
  static removeToken(): void {
    localStorage.removeItem(STORAGE.AUTH);
  }
}
