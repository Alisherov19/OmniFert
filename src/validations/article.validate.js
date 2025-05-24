const { z } = require("zod");

const articleSchema = z.object({
  image: z
    .string({ required_error: "Image is required" })
    .url("Image must be a valid URL"),

  title: z
    .string({ required_error: "Title is required" })
    .min(5, "Title must be at least 5 characters long")
    .max(100, "Title must not exceed 100 characters"),

  date: z
    .string({ required_error: "Date is required" })
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    })
    .refine((val) => new Date(val) <= new Date(), {
      message: "Date cannot be in the future",
    }),
     desc: z
    .string({ required_error: "desc is required" })
    .min(5, "decs must be at least 5 characters long")
    .max(255, "desc must not exceed 100 characters"),

});

module.exports = {
  articleSchema,
};
