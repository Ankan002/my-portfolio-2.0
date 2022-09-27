import { atom } from "recoil";
import { Project } from "types/project";

export const projectsAtom = atom<Array<Project>>({
    key: "projectsAtom",
    default: []
});