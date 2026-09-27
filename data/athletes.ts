import { images, type Photo } from "./images";

export type Testimonial = { quote: string; name: string; discipline?: string };

/** Add real athlete testimonials once the client supplies them. Never fabricate quotes. */
export const testimonials: Testimonial[] = [];

export const athleteGallery: Photo[] = Object.values(images).filter((photo) => photo.tags.length > 0);
