import AdminJS from "adminjs";
import AdminJSFastify from "@adminjs/fastify";
import * as AdminJSMongoose from "@adminjs/mongoose";
import * as Models from "../models/index.js";
import { light, dark, noSidebar } from "@adminjs/themes";
import { authenticate, COOKIE_PASSWORD, sessionStore } from "./config.js";

AdminJS.registerAdapter(AdminJSMongoose);

export const admin = new AdminJS({
  resources: [
    {
      resource: Models.Customer,
      options: {
        listProperties: ["phone", "role", "isActivated"],
        filterProperties: ["phone", "role"],
      },
    },
    {
      resource: Models.DeliveryPartner,
      options: {
        listProperties: ["email", "role", "isActivated"],
        filterProperties: ["email", "role"],
      },
    },
    {
      resource: Models.Admin,
      options: {
        listProperties: ["email", "role", "isActivated"],
        filterProperties: ["email", "role"],
      },
    },
    {
      resource: Models.Branch,
    },
    {
      resource: Models.Category,
    },
    {
      resource: Models.Product,
    },
    {
      resource: Models.Order,
    },
    {
      resource: Models.Counter,
    },
  ],
  branding: {
    companyName: "Mujahid.Ltd",
    withMadeWithLove: false,
    favicon:
      "https://res.cloudinary.com/dz0msc6pb/image/upload/v1730355180/udzavaxzpv0kifvranum.png",
    logo: "https://res.cloudinary.com/dz0msc6pb/image/upload/v1730355259/gzl88bsochg1my42rpbi.png",
  },
  defaultTheme: dark.id,
  availableThemes: [light, dark, noSidebar],
  rootPath: "/admin",
});

export const buildAdminRouter = async (app) => {
  await AdminJSFastify.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookiePassword: COOKIE_PASSWORD,
      cookieName: "adminjs",
    },
    app,
    {
      store: sessionStore,
      saveUninitialized: true,
      secret: COOKIE_PASSWORD,
      cookie: {
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
      },
    }
  );
};
