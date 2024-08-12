// Function to create a projection of certain fields from an object
function project(obj, fields) {
  let result = {};
  fields.forEach(field => {
    if (obj.hasOwnProperty(field)) {
      result[field] = obj[field];
    }
  });
  return result;
}

// No need to refer to rename map because a projection can't be renamed
let user = {
  name: 'Alice',
  age: 30,
  address: '123 Main St',
  email: 'alice@example.com'
};

let projectedUser = project(user, ['name', 'email']);
console.log(projectedUser); 
// Output: { name: 'Alice', email: 'alice@example.com' }
