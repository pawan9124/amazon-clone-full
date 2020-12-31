import devConfiugration from "./keys_dev.js";
import prodConfiguration from "./keys_prod.js";
let keys;
if (process.env.NODE_ENV === "production") {
  keys = prodConfiguration;
} else {
  keys = devConfiugration;
}

export default keys;
