import { atom, selector } from "recoil";

export const emailState = atom({
  key: "emailState",
  default: {
    email: "",
    role: "",
    id: "",
  },
});

export const emailCurrentState = selector({
  key: "emailSelectorState",
  get: ({ get }) => {
    const email = get(emailState);
    return email;
  },
});
