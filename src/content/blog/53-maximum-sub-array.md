---
title: '53. Maximum Sub Array'
description: 'Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.'
pubDate: '3/4/2024'
heroImage: '/blog-placeholder-1.jpg'
---

Brute Force Approach : 
for each element in the array compute the sums of all sub arrays that would use the current element. 

Linear Approach : 
Personally, I think the first stepping stone when looking at this problem is that subarrays are just consecutive numbers. this means that we want to preserve the order of the original numbers array when calculating the sub array. Therefore, the first step would be to traverse the numbers list linearly. 

```python
for num in numbers:
    # code here
```

<br/>Now that we have a loop, we are going to need to track the max sum as we loop through the list. I'm going to create two variables called `maxSum` and `curSum`.

```python
    maxSum = 0 # Tracks the maximum sum that will be returned at the end
    curSum = 0 # Tracks the current sum of the subArray that we are checking
    for num in numbers: 
        # code here

    return maxSum 
```

We are actually almost done with the linear approach. Now we need to :

#1 Compute the current sum of the subarray and store it into `curSum`

#2 Update `maxSum` in each iteration

Let's first look at step 1. In my opinion step 1 is the hardest / most crucial part to understand in this problem. It took me several videos and minutes staring at code to understand this part. In order to compute the sum of a sub array, we need to add it to `curSum` for each iteration. 

```python
    maxSum = 0 # Tracks the maximum sum that will be returned at the end
    curSum = 0 # Tracks the current sum of the subArray that we are checking
    for num in numbers: 
        curSum += num

    return maxSum 
```

However, our solution isn't this straightforward. There is one tricky part to this problem. How do we know where a subarray begins or ends? We can't just keep adding to curSum since that only gives us the sum of the numbers array. To answer this question, we can break down what kinds of sub array sums we are looking for. In this case, it makes sense to be interested in positive sums. If we `curSum` is negative, that means that the current sub array is not worth tracking.

```python
    maxSum = 0 # Tracks the maximum sum that will be returned at the end
    curSum = 0 # Tracks the current sum of the subArray that we are checking
    for num in numbers: 
        if curSum < 0:
            curSum = 0
        curSum += num

    return maxSum 
```

Now we can move to step 2 : how do we update `maxSum`? When it comes to tracking a max of an array, we can usually take the max of the current max sum and the current sum that we have calculated.

```python
    maxSum = 0 # Tracks the maximum sum that will be returned at the end
    curSum = 0 # Tracks the current sum of the subArray that we are checking
    for num in numbers: 
        if curSum < 0:
            curSum = 0
        curSum += num
        maxSum = max(maxSum, curSum)

    return maxSum 
```

There is one last problem to this code and that lies in the initialization of `maxSum`. This code does not work for arrays whose largest sum is less than 0. Therefore we need to adjust the initialization of `maxSum` to reflect that. 

```python
    maxSum = numbers[0] # Tracks the maximum sum that will be returned at the end
    curSum = 0 # Tracks the current sum of the subArray that we are checking
    for num in numbers: 
        if curSum < 0:
            curSum = 0
        curSum += num
        maxSum = max(maxSum, curSum)

    return maxSum 
```

The code above is the final solution that linearly traverses numbers and returns the maxSum. 