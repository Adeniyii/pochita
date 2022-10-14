import { createProtectedRouter } from "./context";
import { z } from "zod";

export const profileRouter = createProtectedRouter()
  .query("info", {
    input: z
      .object({
        id: z.string().cuid({message: "Invalid userId"}).nullish(),
      })
      .nullish(),
    async resolve({ input, ctx }) {
      const userId = input?.id || ctx.session.user.id

      return ctx.prisma.profile.findUnique({where: { userId }, include: { projects: true, joinedProjects: true }})
    },
  })
