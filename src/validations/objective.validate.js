const { z } = require("zod");

const idealObjectiveSchema = z.object({
  image: z
    .string({ required_error: "Rasm URL majburiy" })
    .trim()
    .url("Rasm to‘g‘ri URL bo‘lishi kerak"),

  title: z
    .string({ required_error: "Sarlavha majburiy" })
    .trim()
    .min(5, "Sarlavha kamida 5 ta belgidan iborat bo‘lishi kerak")
    .max(100, "Sarlavha 100 ta belgidan oshmasligi kerak"),

  parag: z
    .string({ required_error: "Paragraf majburiy" })
    .trim()
    .min(20, "Paragraf kamida 20 ta belgidan iborat bo‘lishi kerak")
    .max(500, "Paragraf 500 ta belgidan oshmasligi kerak"),
});

module.exports = {
    idealObjectiveSchema
};
