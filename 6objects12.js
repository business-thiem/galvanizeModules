function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    let arr = obj[`${key}`];

    if(!Array.isArray(arr) || arr === undefined){
        // console.log('object is empty');
        return 0;
    } else if(arr.length === 0){
        return 0;
    }

    let product = 0;

    for(const num of arr){
        if(product === 0){
            product = num;
            continue;
        }
        product *= num;
    }

    return product;

  }

