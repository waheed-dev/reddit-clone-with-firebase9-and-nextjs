import { atom } from "recoil";

export interface AuthModalAtom {
  open: boolean;
  view: "login" | "signup" | "resetPassword";
}
const defaultAuthModalState: AuthModalAtom = {
  view: "login",
  open: false,
};
export const authModalState = atom<AuthModalAtom>({
  key: "authModalState",
  default: defaultAuthModalState,
});
