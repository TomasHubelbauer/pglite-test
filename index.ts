import { PGlite } from "@electric-sql/pglite";

const db = new PGlite(); // Or `new PGLite(path)`

console.log(await db.query("select 'Hello world' as message;"));
/*
[
  {
    message: "Hello world",
  }
]
*/

console.log(
  await db.query(
    "SELECT json_build_object('key1', 'value1', 'key2', 'value2');"
  )
);
/*
[
  {
    json_build_object: {
      key1: "value1",
      key2: "value2",
    },
  }
]
*/
