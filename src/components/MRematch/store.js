import { init } from "@rematch/core";
import * as models from "./model";

// 2. Define store
const store = init({ models });

export default store;
