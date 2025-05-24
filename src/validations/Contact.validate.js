const { z } = require("zod");

const contactSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string"
    })
    .trim()
    .email("Email must be a valid email address"),

  office: z
    .string({
      required_error: "Office address is required",
      invalid_type_error: "Office must be a string"
    })
    .trim()
    .min(3, "Office must be at least 3 characters long"),

  phone: z
    .string({
      required_error: "Phone number is required",
      invalid_type_error: "Phone must be a string"
    })
    .trim()
    .regex(/^\+?[0-9]{9,15}$/, "Phone number must be valid (e.g., +998901234567)"),

  map: z
    .string({
      required_error: "Map URL is required",
      invalid_type_error: "Map must be a string"
    })
    .trim()
    .url("Map must be a valid URL"),

  certificates: z
    .string({
      required_error: "Certificate image is required",
      invalid_type_error: "Certificate must be a string"
    })
    .trim()
    .url("Certificates must be a valid image URL (e.g., https://...)")
    .refine((val) => /\.(jpg|jpeg|png|webp|gif|bmp|svg)$/i.test(val), {
      message: "Certificates must be a valid image URL (jpg, png, etc.)"
    })
});

module.exports = {
  contactSchema
};
