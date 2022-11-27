function getValue(object, keys) {
    if (keys)
    var value = object;
    for (let i = 0; i < keys.length; i++) {
        if(keys[i] in value)
            value = value[keys[i]] 
        else
        return null       
    }
    return value;
}
console.log(getValue({a:{b:{c:'d'}}},['a','b','c'])
);
