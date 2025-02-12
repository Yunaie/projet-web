const { z } = require("zod");

const AppUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  is_admin: z.boolean().optional(),
});

module.exports = AppUserSchema;
