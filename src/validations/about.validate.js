const { z } = require('zod');

const aboutSchema = z.object({
  image: z.string().min(1, "Image bo‘sh bo‘lmasligi kerak"),
  title: z.string().min(1, "Title bo‘sh bo‘lmasligi kerak"),
  big_title: z.string().min(1, "Big title bo‘sh bo‘lmasligi kerak"),
  paragraph: z.string().min(1, "Paragraph bo‘sh bo‘lmasligi kerak"),
  btn: z.string().min(1, "Button matni bo‘sh bo‘lmasligi kerak"),
});

module.exports = {aboutSchema};
