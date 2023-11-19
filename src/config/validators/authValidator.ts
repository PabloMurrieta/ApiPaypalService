import Joi from "joi";

export const registerSchema = Joi.object({
  username: Joi.string().alphanum().lowercase().required().min(4),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().required().min(8),
})