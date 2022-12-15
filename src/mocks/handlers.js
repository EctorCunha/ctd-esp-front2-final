import { rest } from "msw";

export const handlers = [
  rest.get("https://thesimpsonsquoteapi.glitch.me/quotes", (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            quote: "",
            character: "",
          },
        ],
      })
    );
  }),
];
