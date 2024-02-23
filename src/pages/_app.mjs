import { Quasar } from "quasar";
import zhCN from "quasar/lang/zh-CN";
import iconSet from "quasar/icon-set/fontawesome-v6";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";

export default (app) => {
  app.use(Quasar, {
    config: {
      dark: false,
      lang: zhCN,
      brand: {
        primary: "#f44336",
        secondary: "#9C27b0",
        accent: "#9C27b0",
        dark: "#1d1d1d",
        positive: "#21BA45",
        negative: "#C10015",
        info: "#31CCEC",
        warning: "#F2C037",
      },
      iconSet: iconSet,
    },
  });
};
