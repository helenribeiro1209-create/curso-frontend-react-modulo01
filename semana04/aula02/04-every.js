const ages = [20, 34, 18, 25]

const allAdults = ages.every((age) => {
    return age >= 18
})

console.log(allAdults)

// every devolve true só se TODOS derem true um só reprova-false