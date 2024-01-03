// hooks (ganchos) gerenciar rotas
import type { Handle } from "@sveltejs/kit";

/* Obtem o evento da função Load e resolve */
export const handle: Handle = async ({ event, resolve }) => {
  const response = resolve(event);

  return response;
};
