const employee = {
    name: "Barry Humphrey",
    streetAddress: "12 Mott Street",
};
function updateEmployeeWithKeyAndValue(obj,key,value) {
    const newObj = { ...obj };
    newObj[key] = value;
   
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value) {
    obj[key] = value;

    return obj;
}

function deleteFromEmployeeByKey(obj,key,value) {
    const newObj = { ...obj };
    newObj[key] = value;
    delete employee.name.valueOf;
    delete employee.streetAddress.valueOf;

    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj,key,value) {
    obj[key] = value;
    delete employee.name;
    delete employee.streetAddress;

    return obj;
    
}