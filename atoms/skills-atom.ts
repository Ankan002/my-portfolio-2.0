import { atom } from "recoil";
import { Skill } from "types/skill";

export const skillsAtom = atom<Array<Skill>>({
    key: "skillsAtom",
    default: []
});
