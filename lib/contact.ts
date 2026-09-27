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

export const emptyContact: ContactForm = { name: "", email: "", phone: "", discipline: "", experience: "", goal: "", message: "" };

export const limits = { name: 120, email: 200, goal: 200, message: 5000 };

// Plain addresses only: no quotes, brackets or URL delimiters that could smuggle extra params into a mailto: link.
const EMAIL = /^[^\s@"'<>()[\]\\,;:?&]+@[^\s@"'<>()[\]\\,;:?&]+\.[^\s@"'<>()[\]\\,;:?&]+$/;

/** Runs in the browser for instant feedback and again on the server before anything is sent. */
export function validateContact(form: ContactForm): ContactErrors {
  const errors: ContactErrors = {};
  const name = form.name.trim();
  const message = form.message.trim();
  if (!name) errors.name = "Please enter your name.";
  else if (name.length > limits.name) errors.name = `Please keep your name under ${limits.name} characters.`;
  if (form.email.length > limits.email || !EMAIL.test(form.email.trim())) errors.email = "Please enter a valid email address.";
  if (form.phone.trim() && !/^\+?[\d\s()-]{7,20}$/.test(form.phone.trim()))
    errors.phone = "Please enter a valid phone number, or leave it blank.";
  if (!disciplineOptions.includes(form.discipline)) errors.discipline = "Choose your primary discipline.";
  if (form.experience && !experienceOptions.includes(form.experience)) errors.experience = "Choose an experience level.";
  if (form.goal.length > limits.goal) errors.goal = `Please keep your goal under ${limits.goal} characters.`;
  if (message.length < 10) errors.message = "Tell us a little more — at least 10 characters.";
  else if (message.length > limits.message) errors.message = `Please keep your message under ${limits.message} characters.`;
  return errors;
}
