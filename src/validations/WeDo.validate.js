const { z } = require("zod");

const WeDoSchema = z.object({
  image: z.string().min(1, "Rasm havolasi bo‘sh bo‘lmasligi kerak"),
  title: z.string().min(1, "Sarlavha bo‘sh bo‘lmasligi kerak"),
  big_title: z.string().min(1, "Katta sarlavha bo‘sh bo‘lmasligi kerak"),
  paragraph: z.string().min(1, "Matn bo‘sh bo‘lmasligi kerak"),
});

module.exports = { WeDoSchema };
