const { z } = require("zod");

const MessageSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Ism kamida 2 ta belgidan iborat bo'lishi kerak")
    .max(100, "Ism 100 belgidan oshmasligi kerak"),

  email: z
    .string()
    .trim()
    .email("Email noto‘g‘ri kiritilgan"),

  subject: z
    .string()
    .trim()
    .min(3, "Subject kamida 3 ta belgidan iborat bo'lishi kerak")
    .max(150, "Subject 150 belgidan oshmasligi kerak"),

  message: z
    .string()
    .trim()
    .min(5, "Xabar kamida 5 ta belgidan iborat bo'lishi kerak")
    .max(1000, "Xabar 1000 belgidan oshmasligi kerak"),
});

module.exports = {
  MessageSchema,
};
