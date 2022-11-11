//  { $or: [ { borough: "Staten Island" },{ borough: "Queens" },{ borough: "Bronxor Brooklyn" }]}

/**
Filtro por rango de precio  !minPrice !maxprice
por país o localidad        !country 1 o array !borough 1 o array
Tipo de inmueble            !type 1 o array
Número de recámaras         !minrooms !maxrooms
 */
var createNestedObject = function (base, names, value) {
  // If a value is given, remove the last name and keep it for later:
  var lastName = arguments.length === 3 ? names.pop() : false;

  // Walk the hierarchy, creating new objects where needed.
  // If the lastName was removed, then the last object is not set yet:
  for (var i = 0; i < names.length; i++) {
    base = base[names[i]] = base[names[i]] || {};
  }

  // If a value was given, set it to the last name:
  if (lastName) base = base[lastName] = value;

  // Return the last object in the hierarchy:
  return base;
};

const seach = {
  minprice: 10,
  maxprice: 20,
  minroom: 2,
  maxroom: 3,
  country: "Mexico",
  borough: "Cdmx",
  offerType: "house",
  rooms: 2,
};

const asArray = Object.entries(seach);
const regex = new RegExp(/^min/);
const regexmax = new RegExp(/^max/);
const matchedSites = asArray.filter(([key, value]) => regex.test(key));
const objectCondition = Object.fromEntries(matchedSites);
// console.log(justStrings);

const setFilter = (object, arrayactions) => {
  const asArray = Object.entries(object);
  const attributes = {};
  let objectNoneCondition;
  for (const iterator in arrayactions) {
    console.log(arrayactions[iterator]);
    let operatorWord = arrayactions[iterator];
    let operatorCondition = iterator;
    let regex = new RegExp(`^${operatorWord}`);
    const conditions = asArray.filter(([key, value]) => regex.test(key));
    const nonconditions = asArray.filter(([key, value]) => !regex.test(key));
    console.log(nonconditions);
    objectNoneCondition = Object.fromEntries(nonconditions);
    console.log(objectNoneCondition);
    const objectCondition = Object.fromEntries(conditions);
    console.log(objectCondition);
    console.log(regex);
    for (let [key, value] of Object.entries(objectCondition)) {
      console.log("regex", regex, "key", key, regex.test(key));
      if (regex.test(key)) {
        console.log(key);
        console.log(objectNoneCondition);
        let chars = key.split(operatorWord)[1];
        createNestedObject(attributes, [chars, `$${operatorCondition}`], value);
      }
    }
  }

  //   !------------------------------------------
  console.log(attributes);
  console.log(objectNoneCondition);
  console.log(Object.keys(objectNoneCondition));
  const productionTimeObj = Object.assign({}, ...objectNoneCondition);
  console.log(productionTimeObj);

  //   objectNoneCondition=Object.fromEntries(objectNoneCondition);
  console.log(objectNoneCondition[0]);
  const conditions1 = Object.entries(objectNoneCondition).filter(
    ([key, value]) => console.log(key)
  );
  console.log(conditions1);
  return attributes;
};

const actions = {
  gte: "min",
  lte: "max",
};

// const ignorePropertis = ["price"];

console.log(setFilter(seach, actions));

// Usages:
const window = {};
createNestedObject(window, ["shapes", "circle"]);
console.log(window);
// Now window.shapes.circle is an empty object, ready to be used.

var obj = {}; // Works with any object other that window too
createNestedObject(obj, ["price", "$lte"], 300);
createNestedObject(obj, ["price", "$gte"], 300);
console.log(obj);

// const attributes = {};
// attributes["price"] = {};
// attributes["price"]["$lte"] = 5;
// attributes["price"]["$gte"] = 5;
// console.log(attributes);
// console.log(/^min/.test("minprice"));
