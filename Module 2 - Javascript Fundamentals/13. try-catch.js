/**try catch block
 *
 * try{
 *  some line of code....
 * }catch(error){
 *  console.log(error)
 * }
 *
 */

const username = "prakash";
try {
  someFunction();
  console.log("hey there");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
} finally {
  console.log("finally executed");
}

console.log(username);
