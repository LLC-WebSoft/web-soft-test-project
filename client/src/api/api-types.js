export {};
/**
*@typedef {object} API
*@property {introspection} introspection
*@property {example} example
*/
/**
*@typedef {object} introspection;
*@property {function} getModules
***Return server api schema.**
*___
* Returns: Object with api schema.

*@property {function} getErrors
***Return error dictionary from server.**
*___
* Returns: Dictionary of server possible errors.

*/
/**
*@typedef {object} example;
*@property {function} method
***Test method for example.**
*___
* Params: Params for test method.
* - `param1` { *number* } - Param1 is number. **Required** 

*___
* Returns: Value that server must return.
* - `message` { *string* } 

*/
