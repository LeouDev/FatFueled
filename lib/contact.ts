export const disciplineOptions = ["Triathlon", "Cycling", "Running", "Swimming", "Other"];
export const experienceOptions = ["New to endurance sport", "Beginner", "Intermediate", "Advanced / competitive"];

export type ContactForm = {
  name: string;
  email: string;
  phone: string;
  discipline: string;
  experience: string;
  goal: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactForm, string>>;

export function validateContact(form: ContactForm): ContactErrors {
  const errors: ContactErrors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = "Please enter a valid email address.";
  if (form.phone.trim() && !/^\+?[\d\s()-]{7,20}$/.test(form.phone.trim()))
    errors.phone = "Please enter a valid phone number, or leave it blank.";
  if (!disciplineOptions.includes(form.discipline)) errors.discipline = "Choose your primary discipline.";
  if (form.message.trim().length < 10) errors.message = "Tell us a little more — at least 10 characters.";
  return errors;
}

/**
 * Placeholder submission handler — intentionally not wired to any backend.
 * Before launch, send `form` to the client's email service or form provider here.
 */
export async function submitContact(form: ContactForm): Promise<void> {
  console.info("[contact] form backend not connected yet — submission:", form);
}
