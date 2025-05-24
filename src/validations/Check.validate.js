const { z } = require("zod");

const countryList = [
  "United States", "United Kingdom", "Canada", "Germany", "France",
  "Italy", "Spain", "Australia", "Brazil", "India",
  "China", "Japan", "South Korea", "Russia", "Mexico",
  "Netherlands", "Switzerland", "Sweden", "Norway", "Denmark",
  "Finland", "Belgium", "Austria", "New Zealand", "Ireland",
  "Turkey", "South Africa", "Argentina", "Poland", "Portugal",
  "Czech Republic", "Hungary", "Greece", "Romania", "Singapore",
  "Malaysia", "Indonesia", "Thailand", "Vietnam", "Philippines",
  "Saudi Arabia", "United Arab Emirates", "Israel", "Ukraine", "Pakistan",
  "Bangladesh", "Nigeria", "Egypt", "Kenya", "Morocco",

  // O‘rta Osiyo davlatlari
  "Uzbekistan", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Turkmenistan",

  // Fallback
  "Another Country"
];

const checkoutScheme = z.object({
  fullName: z.string().trim().min(2, "Full name is too short"),
  order_name: z.string().trim().min(2, "Order name is required"),
  company: z.string().trim().min(1, "Company is required"),
  country: z.enum(countryList),
  house: z.string().trim().min(1, "House field is required"),
  apartment: z.string().trim().min(1, "Apartment field is required"),
  city: z.string().trim().min(1, "City is required"),
  phone: z.string().trim()
    .regex(/^\+?[0-9]{7,15}$/, "Invalid phone number format"),
  email: z.string().trim().email("Invalid email format")
});

module.exports = {
  checkoutScheme
};
