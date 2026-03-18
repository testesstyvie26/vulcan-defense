import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContact } from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
          email: z.string().email("Email inválido"),
          phone: z.string().optional(),
          company: z.string().optional(),
          subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
          message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await createContact({
            name: input.name,
            email: input.email,
            phone: input.phone,
            company: input.company,
            subject: input.subject,
            message: input.message,
          });
          return {
            success: true,
            message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
          };
        } catch (error) {
          console.error("[Contact] Error submitting form:", error);
          throw new Error("Erro ao enviar mensagem. Tente novamente mais tarde.");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
