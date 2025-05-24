const {z} = require("zod")
const {User} = require("../models")
const UserScheme = z.object({
    username:z.string(),
    email:z.string().email().min(1,"Email is invalid"),
    password: z.string().min(8,"password is invalid").max(24,"password is very long!")
})
const UserSchemeLogin = z.object({
    email:z.string().email().min(1,"Email is invalid"),
    password: z.string().min(8,"password is invalid").max(24,"password is very long!")
})
module.exports = {
    UserScheme,
    UserSchemeLogin
};
