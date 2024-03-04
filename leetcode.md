## Greedy Algorithms

### 53. Maximum Sub Array
Brute Force Approach : 
for each element in the array compute the sums of all sub arrays that would use the current element. 

Linear Approach : 
Personally, I think the first stepping stone when looking at this problem is that subarrays are just consecutive numbers. this means that we want to preserve the order of the original numbers array when calculating the sub array.

Therefore, the first step would be to traverse the numbers list linearly. 
```python
for num in numbers:
    # code here
```

Now that we have a loop, we are going to need to track the max sum as we loop through the list. I'm going to create two variables called `maxSum` and `curSum`.

```python
    maxSum = 0 # Tracks the maximum sum that will be returned at the end
    curSum = 0 # Tracks the current sum of the subArray that we are checking
    for num in numbers: 
        # code here

    return maxSum 
```

We are actually almost done with the linear approach. Now we need to :
1. Compute the current sum of the subarray and store it into `curSum`
2. Update `maxSum` in each iteration

Let's first look at step 1. Note that in my opinion step 1 is the hardest / most crucial part to understand in this problem. It took me several videos and minutes staring at code to understand this part. In order to compute the sum of a sub array, we need to add it to `curSum` for each iteration. 

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

### 1899. Merge Triplets to Form Target Triplet

The wording of this problem was a little confusing to me, so I will break it down in my own terms first. Let's first go over the parameters we are given :
1. triplets 
2. target

Triplets is a 2D array that contains arrays that hold 3 integers. Going off example 1 in leetcode the triplets array is declared as follows : `triplets = [[2,5,3],[1,8,4],[1,7,5]]`