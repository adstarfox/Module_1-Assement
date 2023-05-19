///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// Here I'm using for loops for each of the arrays to add them all together and store them into the totalAcres variable. 
let totalAcres = 0

for (let i = 0; i < fujiAcres.length; i++){
    totalAcres += fujiAcres[i]
}
for (let i = 0; i < galaAcres.length; i++){
    totalAcres += galaAcres[i]
}
for (let i = 0; i < pinkAcres.length; i++){
    totalAcres += pinkAcres[i]
}
console.log(`The total amount of acres are ${totalAcres}`)



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

//I added the length of each array together and then divided the total acres by the total length and then stored that data into the new variable
averageDailyAcres = totalAcres / (fujiAcres.length + galaAcres.length + pinkAcres.length)
console.log(`The average daily acre is ${averageDailyAcres}`)




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

// Calculates how many days it will take to harvest all of the apples from the remaining acres by using the average amount of acres per day.
while(acresLeft > 0){
    acresLeft -= averageDailyAcres
    days++
}
console.log(days)



// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// I created tempory arrays that I could menipulate without touching the original array's data set.
let fujiTempAcres = fujiAcres.slice(0,fujiAcres.length)
let galaTempAcres = galaAcres.slice(0,galaAcres.length)
let pinkTempAcres = pinkAcres.slice(0,pinkAcres.length)
let acreYield = 6.5
// Empty array's for the tons that will be calculated later
let fujiTons = []
let galaTons = []
let pinkTons = []

//For loops that will run the length of the orginal array's data set and will take the data from the temporary array's and multiply it by the daily yield. Then it pushes the new data into the empty array's. 
for (let i = 0; i < fujiAcres.length; i++){
    fujiTons.push(fujiTempAcres.shift()*acreYield)
}
for (let i = 0; i < galaAcres.length; i++){
    galaTons.push(galaTempAcres.shift()*acreYield)
}
for (let i = 0; i < fujiAcres.length; i++){
    pinkTons.push(pinkTempAcres.shift()*acreYield)
}
console.log(`${fujiTons} tons yielded per day by Fuji` )
console.log(`${galaTons} tons yielded per day by Gala`)
console.log(`${pinkTons} tons yielded per day by Pink`)




// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

//Empty "pounds" variable to be used later
let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

//used a for loop to take the data from the "Tons" array's, convirte the individual data to punds and then add them all together. Then it stores the totals into the "Pounds" variables
for (let i = 0; i < fujiTons.length; i++){
    fujiPounds += fujiTons[i] * 2000
}
for (let i = 0; i < galaTons.length; i++){
    galaPounds += galaTons[i] * 2000
}
for (let i = 0; i < pinkTons.length; i++){
    pinkPounds += pinkTons[i] * 2000
}

console.log(`Total pounds of Fuji Apples: ${fujiPounds.toLocaleString(3)}lbs`)
console.log(`Total pounds of Fuji Apples: ${galaPounds.toLocaleString(3)}lbs`)
console.log(`Total pounds of Fuji Apples: ${pinkPounds.toLocaleString(3)}lbs`)



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

//I used the given "Price" variables and multiplied them to the "Pounds" varbiables to get the profit for each type. Then stored the total profit data into the "profit" variables
let fujiProfit = fujiPrice * fujiPounds
let galaProfit = galaPrice * galaPounds
let pinkProfit = pinkPrice * pinkPounds

console.log(`Fuji Apples made $${fujiProfit.toLocaleString(3)} of profit this week`)
console.log(`Gala Apples made $${galaProfit.toLocaleString(3)} of profit this week`)
console.log(`Pink Apples made $${pinkProfit.toLocaleString(3)} of profit this week`)




// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

//Here i added all of the "Profit" variables together and stored them into a totalProfit variable.
let totalProfit = fujiProfit + galaProfit + pinkProfit

console.log(`The total profit made this week is $${totalProfit.toLocaleString(3)}!`)
