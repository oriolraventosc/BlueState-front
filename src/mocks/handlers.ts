import { rest } from "msw";
import { UserCredentials } from "../types/types";

const apiUrl = process.env.REACT_APP_URL;

const handlers = [
  rest.post(`${apiUrl}users/login`, async (request, response, context) => {
    return response(context.status(201));
  }),
  rest.post(`${apiUrl}users/login`, async (request, response, context) => {
    return response.once(context.status(500));
  }),
  rest.post(`${apiUrl}/users/register`, async (request, response, context) => {
    const user = await request.json<UserCredentials>();

    if (user.username === "Paige") {
      return response(
        context.status(409),
        context.json({ error: "User already in the database" })
      );
    }

    return response(context.status(201), context.json({}));
  }),
  rest.get(`${apiUrl}/contact/list`, async (request, response, context) => {
    return response.once(
      context.status(200),
      context.json({
        contacts: [
          {
            name: "app2U",
            email: "info@app2u.es",
            telephone: 9345001289,
            sector: "Technology",
            website: "www.app2u.es",
            service: "App development",
            logo: "app2U.png",
            backUpLogo: "app2U.png",
            contacted: 2022,
            id: "123145",
          },
        ],
      })
    );
  }),

  rest.get(`${apiUrl}/contact/list`, async (request, response, context) => {
    return response.once(
      context.status(204),
      context.json({
        message: "We couldn't find any contact",
      })
    );
  }),

  rest.get(`${apiUrl}/contact/:id`, async (request, response, context) => {
    return response.once(
      context.status(200),
      context.json({
        name: "Accent Systems",
        email: "info@accent-systems.com",
        telephone: 935125138,
        sector: "Technology",
        website: "https://accent-systems.com/es/",
        service: "Technical Engineering Services",
        logo: "https://accent-systems.com/wp-content/uploads/accent-logo.png",
        backUpLogo:
          "https://accent-systems.com/wp-content/uploads/accent-logo.png",
        contacted: 2020,
        id: "637e36a2af517156aa098996",
      })
    );
  }),
  rest.get(`${apiUrl}/contact/:id`, async (request, response, context) => {
    return response.once(
      context.status(500),
      context.json({ message: "Contact not found!" })
    );
  }),
  rest.delete(
    `${apiUrl}/contact/delete/:id`,
    async (request, response, context) => {
      return response.once(context.status(200));
    }
  ),
  rest.delete(
    `${apiUrl}/contact/delete/:id`,
    async (request, response, context) => {
      return response.once(context.status(500));
    }
  ),

  rest.post(
    `${apiUrl}/contact/add-new-contact`,
    async (request, response, context) => response(context.status(201))
  ),
  rest.get(
    `${apiUrl}/contact/list/Marketing`,
    async (request, response, context) => response.once(context.status(200))
  ),
  rest.get(
    `${apiUrl}/contact/list/Marketing`,
    async (request, response, context) => response.once(context.status(500))
  ),
  rest.patch(
    `${apiUrl}/contact/update/922233881`,
    async (request, response, context) => response.once(context.status(201))
  ),
  rest.patch(
    `${apiUrl}/contact/update/922233881`,
    async (request, response, context) => response.once(context.status(500))
  ),
];

export default handlers;
