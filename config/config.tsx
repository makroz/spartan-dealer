const config = {
  app: {
    appName: "Spartan Affiliate - Dealer Portal",
    appDescription: "Spartan Affiliate Manager - Dealer Portal",
    appLogoImage: "/assets/images/logo/logo.png",
    API_URL: "http://localhost:8000/api",
    loginRedirect: "/",
    slugGuard: "/dealer-guard",
    lang: "en",
  },
  auth: {
    login: "/dealer-login",
    register: "/dealer-register",
    logout: "/dealer-logout",
    success: "/",
  },
  layout: {},
};

export default config;
