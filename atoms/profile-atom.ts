import { atom } from "recoil";
import { Profile } from "types/profile";

export const profileAtom = atom<Profile>({
    key: "profileAtom",
    default: {
        id: "",
        name: "",
        bio: "",
        profile_picture: "",
        tagline: ""
    }
});