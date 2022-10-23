function nth_most_rate(list, n) {
  const memo = {};

  // keeps track of the frequency of the element
  for (let i = 0; i < list.length; i++) {
    const listElement = list[i];
    // Checks to see if the listElement is alredy a property of the memo object.
    // If so, it increments, else it includes it as a property and sets its value to 1.
    // this ultimately tells us the frequecy of the listElement
    memo[listElement] = memo[listElement] + 1 || 1;
  }

  // line 15 converts the memo object back to an array of arrays (each containing key and value) and sorts it based on the frequency
  // This will ultimately put the rarest element at index 0 and the most frequent element as the last
  const sortedRareItems = Object.entries(memo).sort((a, b) => a[1] - b[1]);

  // Arrays are zero indexed, so we use n - 1 to get the nth rarest item
  return sortedRareItems[n - 1][0];
}

console.log(nth_most_rate([5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 1, 5], 2));
