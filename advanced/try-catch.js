const getTip = amount => {
    if (typeof amount === 'number') {
        return amount * .25; 
    } else {
        throw Error('Amount is not a number');
    }
}

try {
    const result = getTip(true);
    console.log(result);
} catch (e) {
    console.log('catch block')
}

try {
    const result = getTip(2);
    console.log(result);
} catch (e) {
    console.log('catch block')
}