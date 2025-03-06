// Use dynamic import to support HMR
import("./dist/index.js").catch(e => console.error("Error importing module:", e));