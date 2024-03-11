---
title: '53. Maximum Sub Array'
description: 'Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.'
pubDate: '3/4/2024'
heroImage: '/blog-placeholder-1.jpg'
---

##### Introduction | [Link](https://leetcode.com/problems/maximum-subarray/description/)
This problem asks you to find a sub sequence of digits in the input array that, when summed, yields the maximum sum amongst all possible sub sequences. I think this problem isn't too difficult and the solution is relatively straightforward to understand.

##### Solution Walkthrough
Notice that subarrays in this problem are consecutive numbers with their original order preserved. We cannot manipulate the original array through sorting or any other means. Therefore, the first step would be to traverse the numbers list linearly.  

```python
for num in numbers:
    # code here
```

<br/>Now that we have a loop, we are going to need to track the max sum as we loop through the list. I'm going to create two variables called `maxSum` and `curSum`.

```python
maxSum = 0 
curSum = 0
for num in numbers: 
    # code here

return maxSum 
```

<br> The idea of our approach is while looping through the numbers array : 

1. Compute the current sum of the subarray and store it into `curSum`

2. Update `maxSum` in each iteration.

Let's first implement code to compute the current sum. In my opinion this is the hardest / most crucial part of understanding in this problem. It took me several videos and minutes staring at code to understand it. 

We can start computing the current sum of the sub array by adding the current number of the numbers array to `curSum` in each iteration. 

```python
maxSum = 0 
curSum = 0 
for num in numbers: 
    curSum += num

return maxSum 
```

<br> But how do we know where a subarray begins or ends? We can't just keep adding to curSum since that only gives us the entire sum of the numbers array. To answer this question, we can break down what kinds of sums we are looking for. In this case, it makes sense to be interested in positive sums. If we `curSum` is negative, that means that the current sub array is not worth tracking.

```python
maxSum = 0 
curSum = 0 
for num in numbers: 
    # Computing current sum
    if curSum < 0:
        curSum = 0
    curSum += num

    # Updating max sum

return maxSum 
```

<br>Now we can move to updating the max sum. When it comes to tracking a max of an array, we can take the maximum value of `maxSum` and `curSum`. `maxSum` will either be itself, or the sum of a bigger sub array.

```python
maxSum = 0 
curSum = 0 
for num in numbers: 
    # Computing current sum
    if curSum < 0:
        curSum = 0
    curSum += num

    # Updating max sum
    maxSum = max(maxSum, curSum)

return maxSum 
```

<br>There is one last problem to this code and that lies in the initialization of `maxSum`. You could also say that this is an edge case. Our code so far assumes that the numbers array at least has one positive integer. However, this code does not work for arrays with only negative numbers. Therefore we need to adjust the initialization of `maxSum` to reflect that. 

```python
maxSum = numbers[0] 
curSum = 0 
for num in numbers: 
    # Computing current sum
    if curSum < 0:
        curSum = 0
    curSum += num

    # Updating max sum
    maxSum = max(maxSum, curSum)

return maxSum 
```

<br>This fixes the edge case since when calculating the maximum sub array of an array with only negative numbers, the max sum will always be a single negative number. Computing sums with a sub array length of more than one will only yield a smaller sum than just checking the minimum of the array. This fix essentially makes it so that our function will also calculate the minimum value of an array with only negative numbers.