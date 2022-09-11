import { atom } from "recoil";
import { Testimonial } from "types/testimonial";

export const testimonialsAtom = atom<Array<Testimonial>>({
    key: "testimonialsAtom",
    default: []
});
