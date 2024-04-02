import { atom, selector } from "recoil";

export const emailState = atom({
  key: "emailState",
  default: "",
});

export const emailSelectorState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(emailState);
    return text;
  },
});

export const idState = atom({
  key: "idState",
  default: "",
});

export const idSelectorState = selector({
  key: "idSelectorState",
  get: ({ get }) => {
    const text = get(idState);
    return text;
  },
});
