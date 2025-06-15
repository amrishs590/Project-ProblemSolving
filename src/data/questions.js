const steps = [
  {
    stepTitle: "Step 1: Arrays",
    sections: {
      "Lec 1 : Easy": [
        {
          id: "largest-element-in-an-array",
          title: "Largest Element in an Array",
          content:
            "Given an array of integers, find and return the largest element in the array.\n\nExample 1:\n- Input: [1, 5, 3]\n- Output: 5\n\nExample 2:\n- Input: [-2, -1, -5]\n- Output: -1",
          solution:
            "def largest_element(arr):\n    # Initialize maximum as first element\n    max_val = arr[0]\n    for num in arr:\n        if num > max_val:\n            max_val = num\n    return max_val",
        },
        {
          id: "second-largest-element-in-array-without-sorting",
          title: "Second Largest Element in an Array without Sorting",
          content:
            "Given an array of integers, find and return the second largest element without sorting the array.\n\nExample 1:\n- Input: [3, 1, 2]\n- Output: 2\n\nExample 2:\n- Input: [5, 5, 4]\n- Output: 4",
          solution:
            "def second_largest(arr):\n    if len(arr) < 2:\n        return None  # No second largest\n    first = second = float('-inf')\n    for num in arr:\n        if num > first:\n            second = first\n            first = num\n        elif first > num > second:\n            second = num\n    return second",
        },
        {
          id: "check-if-array-is-sorted",
          title: "Check if the Array is Sorted",
          content:
            "Given an array of integers, determine if the array is sorted in non-decreasing (ascending) order.\n\nExample 1:\n- Input: [1, 2, 3, 3]\n- Output: True\n\nExample 2:\n- Input: [3, 2, 1]\n- Output: False",
          solution:
            "def is_sorted(arr):\n    for i in range(1, len(arr)):\n        if arr[i] < arr[i-1]:\n            return False\n    return True",
        },
        {
          id: "remove-duplicates-from-sorted-array",
          title: "Remove Duplicates from Sorted Array",
          content:
            "Given a sorted array, remove the duplicates in-place and return the array containing only unique elements.\n\nExample 1:\n- Input: [1, 1, 2, 3, 3]\n- Output: [1, 2, 3]\n\nExample 2:\n- Input: [2, 2, 2]\n- Output: [2]",
          solution:
            "def remove_duplicates(arr):\n    if not arr:\n        return []\n    write_index = 1\n    for i in range(1, len(arr)):\n        if arr[i] != arr[i-1]:\n            arr[write_index] = arr[i]\n            write_index += 1\n    return arr[:write_index]",
        },
        {
          id: "left-rotate-array-by-d-places",
          title: "Left Rotate an Array by D Places",
          content:
            "Given an array and a number D, left rotate the array by D places.\n\nExample 1:\n- Input: [1, 2, 3, 4, 5], D = 2\n- Output: [3, 4, 5, 1, 2]\n\nExample 2:\n- Input: [1, 2, 3], D = 3\n- Output: [1, 2, 3]",
          solution:
            "def left_rotate(arr, d):\n    n = len(arr)\n    d = d % n  # handle rotations larger than array length\n    return arr[d:] + arr[:d]",
        },
        {
          id: "move-zeros-to-end",
          title: "Move Zeros to End",
          content:
            "Given an array, move all zeros to the end while maintaining the relative order of non-zero elements.\n\nExample 1:\n- Input: [0, 1, 0, 3, 12]\n- Output: [1, 3, 12, 0, 0]\n\nExample 2:\n- Input: [1, 0, 2]\n- Output: [1, 2, 0]",
          solution:
            "def move_zeros(arr):\n    result = []\n    zero_count = 0\n    for num in arr:\n        if num != 0:\n            result.append(num)\n        else:\n            zero_count += 1\n    result.extend([0] * zero_count)\n    return result",
        },
        {
          id: "linear-search",
          title: "Linear Search",
          content:
            "Given an array and a target value, return the index of the target if found; otherwise return -1. Perform a linear search.\n\nExample 1:\n- Input: arr = [1, 2, 3], target = 2\n- Output: 1\n\nExample 2:\n- Input: arr = [1, 2, 3], target = 4\n- Output: -1",
          solution:
            "def linear_search(arr, target):\n    for i, num in enumerate(arr):\n        if num == target:\n            return i\n    return -1",
        },
        {
          id: "find-the-union",
          title: "Find the Union",
          content:
            "Given two arrays of integers, find and return the union of the two arrays (unique elements present in either array).\n\nExample 1:\n- Input: arr1 = [1, 2, 3], arr2 = [2, 3, 4]\n- Output: [1, 2, 3, 4]\n\nExample 2:\n- Input: arr1 = [1, 1], arr2 = [1]\n- Output: [1]",
          solution:
            "def find_union(arr1, arr2):\n    return list(set(arr1) | set(arr2))",
        },
        {
          id: "find-missing-number-in-array",
          title: "Find Missing Number in an Array",
          content:
            "An array contains integers from 1 to n with exactly one number missing. Find and return the missing number.\n\nExample 1:\n- Input: [1, 2, 4, 5]  (n = 5)\n- Output: 3\n\nExample 2:\n- Input: [2, 3, 1, 5]  (n = 5)\n- Output: 4",
          solution:
            "def find_missing_number(arr):\n    n = len(arr) + 1\n    total = n * (n + 1) // 2\n    return total - sum(arr)",
        },
        {
          id: "maximum-consecutive-ones",
          title: "Maximum Consecutive Ones",
          content:
            "Given a binary array, find the maximum number of consecutive 1s in the array.\n\nExample 1:\n- Input: [1, 1, 0, 1, 1, 1]\n- Output: 3\n\nExample 2:\n- Input: [0, 0, 0, 0]\n- Output: 0",
          solution:
            "def max_consecutive_ones(arr):\n    max_count = count = 0\n    for num in arr:\n        if num == 1:\n            count += 1\n            max_count = max(max_count, count)\n        else:\n            count = 0\n    return max_count",
        },
        {
          id: "find-number-appears-once",
          title: "Find the Number that Appears Once (others twice)",
          content:
            "In an array, every element appears exactly twice except for one element which appears once. Find that single element.\n\nExample 1:\n- Input: [2, 3, 2]\n- Output: 3\n\nExample 2:\n- Input: [4, 1, 2, 1, 2]\n- Output: 4",
          solution:
            "def single_number(arr):\n    result = 0\n    for num in arr:\n        result ^= num\n    return result",
        },
        {
          id: "longest-subarray-with-sum-k",
          title: "Longest Subarray with Sum K (Positives and Negatives)",
          content:
            "Given an array of integers (positive and negative) and a target sum K, find the length of the longest subarray that sums to K.\n\nExample 1:\n- Input: [1, -1, 5, -2, 3], K = 3\n- Output: 4  (Explanation: [1, -1, 5, -2] sums to 3)\n\nExample 2:\n- Input: [10, 5, 2, 7, 1, 9], K = 15\n- Output: 4  (Explanation: [5, 2, 7, 1] sums to 15)",
          solution:
            "def longest_subarray_sum_k(arr, k):\n    sum_index = {0: -1}\n    max_len = 0\n    curr_sum = 0\n    for i, num in enumerate(arr):\n        curr_sum += num\n        if curr_sum not in sum_index:\n            sum_index[curr_sum] = i\n        if curr_sum - k in sum_index:\n            max_len = max(max_len, i - sum_index[curr_sum - k])\n    return max_len",
        },
      ],
      "Lec 2 : Medium": [
        {
          id: "two-sum-problem",
          title: "2Sum Problem",
          content:
            "Given an array of integers and a target number, find two numbers in the array that sum up to the target and return their indices (in any order). Assume exactly one solution exists.\n\nExample 1:\n- Input: nums = [2, 7, 11, 15], target = 9\n- Output: [0, 1]  (Explanation: nums[0] + nums[1] = 2 + 7 = 9)\n\nExample 2:\n- Input: nums = [3, 2, 4], target = 6\n- Output: [1, 2]  (Explanation: nums[1] + nums[2] = 2 + 4 = 6)",
          solution:
            "def two_sum(nums, target):\n    lookup = {}\n    for i, num in enumerate(nums):\n        if target - num in lookup:\n            return [lookup[target - num], i]\n        lookup[num] = i",
        },
        {
          id: "sort-array-of-0s-1s-2s",
          title: "Sort an Array of 0's, 1's, and 2's",
          content:
            "Given an array of 0s, 1s, and 2s, sort the array in-place so that all 0s come first, then 1s, then 2s. This is known as the Dutch National Flag problem.\n\nExample 1:\n- Input: [2, 0, 2, 1, 1, 0]\n- Output: [0, 0, 1, 1, 2, 2]\n\nExample 2:\n- Input: [0, 1, 2, 0, 1, 2]\n- Output: [0, 0, 1, 1, 2, 2]",
          solution:
            "def sort012(arr):\n    low, mid, high = 0, 0, len(arr) - 1\n    while mid <= high:\n        if arr[mid] == 0:\n            arr[low], arr[mid] = arr[mid], arr[low]\n            low += 1\n            mid += 1\n        elif arr[mid] == 1:\n            mid += 1\n        else:  # arr[mid] == 2\n            arr[mid], arr[high] = arr[high], arr[mid]\n            high -= 1\n    return arr",
        },
        {
          id: "majority-element-greater-n-over-2",
          title: "Majority Element (> n/2 times)",
          content:
            "Given an array of size n, find the majority element. The majority element appears more than n/2 times. You may assume the array is non-empty and the majority element always exists.\n\nExample 1:\n- Input: [3, 2, 3]\n- Output: 3\n\nExample 2:\n- Input: [2, 2, 1, 1, 1, 2, 2]\n- Output: 2",
          solution:
            "def majority_element(nums):\n    count = 0\n    candidate = None\n    for num in nums:\n        if count == 0:\n            candidate = num\n        count += 1 if num == candidate else -1\n    return candidate",
        },
        {
          id: "kadane-maximum-subarray-sum",
          title: "Kadane's Algorithm – Maximum Subarray Sum",
          content:
            "Given an integer array, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. Use Kadane's algorithm.\n\nExample 1:\n- Input: [-2,1,-3,4,-1,2,1,-5,4]\n- Output: 6  (Explanation: [4,-1,2,1] has sum 6)\n\nExample 2:\n- Input: [1]\n- Output: 1",
          solution:
            "def max_subarray(nums):\n    max_current = max_global = nums[0]\n    for x in nums[1:]:\n        max_current = max(x, max_current + x)\n        max_global = max(max_global, max_current)\n    return max_global",
        },
        {
          id: "print-subarray-with-maximum-sum",
          title: "Print Subarray with Maximum Subarray Sum",
          content:
            "Given an integer array, find a contiguous subarray with the maximum sum and return that subarray.\n\nExample 1:\n- Input: [-2,1,-3,4,-1,2,1,-5,4]\n- Output: [4, -1, 2, 1]  (This subarray has the maximum sum 6)\n\nExample 2:\n- Input: [1, 2, 3]\n- Output: [1, 2, 3]  (The whole array is maximum sum 6)",
          solution:
            "def max_subarray(nums):\n    max_current = max_global = nums[0]\n    start = end = s = 0\n    for i in range(1, len(nums)):\n        if nums[i] > max_current + nums[i]:\n            max_current = nums[i]\n            s = i\n        else:\n            max_current += nums[i]\n        if max_current > max_global:\n            max_global = max_current\n            start = s\n            end = i\n    return nums[start:end+1]",
        },
        {
          id: "stock-buy-and-sell",
          title: "Stock Buy and Sell",
          content:
            "Given an array of stock prices where prices[i] is the price of a given stock on day i, maximize profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit.\n\nExample 1:\n- Input: [7,1,5,3,6,4]\n- Output: 5  (Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6))\n\nExample 2:\n- Input: [7,6,4,3,1]\n- Output: 0  (No profit is possible)",
          solution:
            "def max_profit(prices):\n    min_price = float('inf')\n    max_prof = 0\n    for price in prices:\n        min_price = min(min_price, price)\n        profit = price - min_price\n        max_prof = max(max_prof, profit)\n    return max_prof",
        },
        {
          id: "rearrange-alternating-positive-negative",
          title:
            "Rearrange the Array in Alternating Positive and Negative Items",
          content:
            "Rearrange an array such that positive and negative numbers alternate. The relative order of positive and negative numbers should be preserved, and if extra positives or negatives remain, they should appear at the end.\n\nExample 1:\n- Input: [1, 2, -3, -4, 5, -6]\n- Output: [1, -3, 2, -4, 5, -6]\n\nExample 2:\n- Input: [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]\n- Output: [-5, 5, -2, 2, 4, 7, 1, 8, 0, -8]  (one possible solution)",
          solution:
            "def rearrange_alternate(arr):\n    pos = [x for x in arr if x >= 0]\n    neg = [x for x in arr if x < 0]\n    result = []\n    for i in range(max(len(pos), len(neg))):\n        if i < len(pos):\n            result.append(pos[i])\n        if i < len(neg):\n            result.append(neg[i])\n    return result",
        },
        {
          id: "next-permutation",
          title: "Next Permutation",
          content:
            "Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers. If no such permutation is possible, rearrange it to the lowest possible order (sorted in ascending order).\n\nExample 1:\n- Input: [1, 2, 3]\n- Output: [1, 3, 2]\n\nExample 2:\n- Input: [3, 2, 1]\n- Output: [1, 2, 3]",
          solution:
            "def next_permutation(nums):\n    i = len(nums) - 2\n    while i >= 0 and nums[i] >= nums[i+1]:\n        i -= 1\n    if i >= 0:\n        j = len(nums) - 1\n        while nums[j] <= nums[i]:\n            j -= 1\n        nums[i], nums[j] = nums[j], nums[i]\n    nums[i+1:] = reversed(nums[i+1:])\n    return nums",
        },
        {
          id: "leaders-in-array",
          title: "Leaders in an Array",
          content:
            "An element of an array is a leader if it is strictly greater than all the elements to its right. Given an array, return all the leader elements.\n\nExample 1:\n- Input: [16, 17, 4, 3, 5, 2]\n- Output: [17, 5, 2]\n\nExample 2:\n- Input: [1, 2, 3, 4]\n- Output: [4]",
          solution:
            "def find_leaders(arr):\n    leaders = []\n    max_from_right = float('-inf')\n    for num in reversed(arr):\n        if num > max_from_right:\n            leaders.append(num)\n            max_from_right = num\n    return list(reversed(leaders))",
        },
        {
          id: "longest-consecutive-sequence",
          title: "Longest Consecutive Sequence in an Array",
          content:
            "Given an unsorted array of integers, find the length of the longest consecutive elements sequence (sequence of increasing integers by 1). The consecutive elements can be in any order.\n\nExample 1:\n- Input: [100, 4, 200, 1, 3, 2]\n- Output: 4  (Explanation: The longest consecutive sequence is [1, 2, 3, 4])\n\nExample 2:\n- Input: [0, -1]\n- Output: 2  (Explanation: The sequence is [-1, 0])",
          solution:
            "def longest_consecutive(nums):\n    num_set = set(nums)\n    longest = 0\n    for num in nums:\n        if num - 1 not in num_set:  # start of sequence\n            length = 0\n            while num in num_set:\n                num += 1\n                length += 1\n            longest = max(longest, length)\n    return longest",
        },
        {
          id: "set-matrix-zeros",
          title: "Set Matrix Zeros",
          content:
            "Given an m x n matrix, if an element is 0, set its entire row and column to 0 in-place.\n\nExample 1:\n- Input: [[1,1,1],[1,0,1],[1,1,1]]\n- Output: [[1,0,1],[0,0,0],[1,0,1]]\n\nExample 2:\n- Input: [[0,1,2,0],[3,4,5,2],[1,3,1,5]]\n- Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
          solution:
            "def set_matrix_zeroes(matrix):\n    rows = len(matrix)\n    cols = len(matrix[0])\n    zero_rows = set()\n    zero_cols = set()\n    for i in range(rows):\n        for j in range(cols):\n            if matrix[i][j] == 0:\n                zero_rows.add(i)\n                zero_cols.add(j)\n    for i in range(rows):\n        for j in range(cols):\n            if i in zero_rows or j in zero_cols:\n                matrix[i][j] = 0\n    return matrix",
        },
        {
          id: "rotate-matrix-90-degrees",
          title: "Rotate Matrix by 90 Degrees",
          content:
            "Given an n x n 2D matrix, rotate the matrix by 90 degrees clockwise in-place.\n\nExample 1:\n- Input: [[1,2,3],[4,5,6],[7,8,9]]\n- Output: [[7,4,1],[8,5,2],[9,6,3]]\n\nExample 2:\n- Input: [[1,2],[3,4]]\n- Output: [[3,1],[4,2]]",
          solution:
            "def rotate_matrix(matrix):\n    n = len(matrix)\n    # Transpose\n    for i in range(n):\n        for j in range(i, n):\n            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n    # Reverse each row\n    for i in range(n):\n        matrix[i].reverse()\n    return matrix",
        },
        {
          id: "print-matrix-spiral-order",
          title: "Print the Matrix in Spiral Manner",
          content:
            "Given an m x n matrix, return all elements of the matrix in spiral order.\n\nExample 1:\n- Input: [[1,2,3],[4,5,6],[7,8,9]]\n- Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]\n\nExample 2:\n- Input: [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n- Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]",
          solution:
            "def spiral_order(matrix):\n    result = []\n    while matrix:\n        # take the first row\n        result += matrix.pop(0)\n        # take the last column\n        if matrix and matrix[0]:\n            for row in matrix:\n                result.append(row.pop())\n        # take the last row (if any) reversed\n        if matrix:\n            result += matrix.pop()[::-1]\n        # take the first column (if any) reversed\n        if matrix and matrix[0]:\n            for row in reversed(matrix):\n                result.append(row.pop(0))\n    return result",
        },
        {
          id: "count-subarrays-with-given-sum",
          title: "Count Subarrays with Given Sum",
          content:
            "Given an array of integers and a target sum K, count the number of subarrays that sum to K.\n\nExample 1:\n- Input: [1, 1, 1], K = 2\n- Output: 2  (Subarrays [1,1] at indices [0,1] and [1,2])\n\nExample 2:\n- Input: [1, 2, 3], K = 3\n- Output: 2  (Subarrays [1,2] and [3])",
          solution:
            "def count_subarrays_with_sum(arr, k):\n    count = 0\n    curr_sum = 0\n    freq = {0: 1}\n    for num in arr:\n        curr_sum += num\n        if (curr_sum - k) in freq:\n            count += freq[curr_sum - k]\n        freq[curr_sum] = freq.get(curr_sum, 0) + 1\n    return count",
        },
      ],
      "Lec 3 : Hard": [
        {
          id: "pascals-triangle",
          title: "Pascal's Triangle",
          content:
            "Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.\n\nExample 1:\n- Input: numRows = 5\n- Output: [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]\n\nExample 2:\n- Input: numRows = 1\n- Output: [[1]]",
          solution:
            "def generate_pascals_triangle(numRows):\n    triangle = []\n    for i in range(numRows):\n        row = [1] * (i+1)\n        for j in range(1, i):\n            row[j] = triangle[i-1][j-1] + triangle[i-1][j]\n        triangle.append(row)\n    return triangle",
        },
        {
          id: "majority-element-greater-n-over-3",
          title: "Majority Element (> n/3 times)",
          content:
            "Given an integer array of size n, find all elements that appear more than ⌊n/3⌋ times. Solutions should run in linear time and in O(1) space.\n\nExample 1:\n- Input: [3, 2, 3]\n- Output: [3]\n\nExample 2:\n- Input: [1, 1, 1, 3, 3, 2, 2, 2]\n- Output: [1, 2]",
          solution:
            "def majority_element_n3(nums):\n    if not nums:\n        return []\n    # Boyer-Moore majority vote (extended)\n    candidate1 = candidate2 = None\n    count1 = count2 = 0\n    for num in nums:\n        if candidate1 == num:\n            count1 += 1\n        elif candidate2 == num:\n            count2 += 1\n        elif count1 == 0:\n            candidate1, count1 = num, 1\n        elif count2 == 0:\n            candidate2, count2 = num, 1\n        else:\n            count1 -= 1\n            count2 -= 1\n    # Verify candidates\n    result = []\n    for c in (candidate1, candidate2):\n        if c is not None and nums.count(c) > len(nums) // 3:\n            result.append(c)\n    return result",
        },
        {
          id: "three-sum-problem",
          title: "3-Sum Problem",
          content:
            "Given an array of integers, find all unique triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] = 0.\n\nExample 1:\n- Input: [-1, 0, 1, 2, -1, -4]\n- Output: [[-1, -1, 2], [-1, 0, 1]]\n\nExample 2:\n- Input: [0, 0, 0]\n- Output: [[0, 0, 0]]",
          solution:
            "def three_sum(nums):\n    nums.sort()\n    result = []\n    n = len(nums)\n    for i in range(n-2):\n        if i > 0 and nums[i] == nums[i-1]:\n            continue\n        left, right = i+1, n-1\n        while left < right:\n            s = nums[i] + nums[left] + nums[right]\n            if s == 0:\n                result.append([nums[i], nums[left], nums[right]])\n                while left < right and nums[left] == nums[left+1]:\n                    left += 1\n                while left < right and nums[right] == nums[right-1]:\n                    right -= 1\n                left += 1\n                right -= 1\n            elif s < 0:\n                left += 1\n            else:\n                right -= 1\n    return result",
        },
        {
          id: "four-sum-problem",
          title: "4-Sum Problem",
          content:
            "Given an array of integers nums and a target value, find all unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that they sum up to the target.\n\nExample 1:\n- Input: nums = [1, 0, -1, 0, -2, 2], target = 0\n- Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]\n\nExample 2:\n- Input: nums = [2, 2, 2, 2, 2], target = 8\n- Output: [[2, 2, 2, 2]]",
          solution:
            "def four_sum(nums, target):\n    nums.sort()\n    n = len(nums)\n    result = []\n    for i in range(n-3):\n        if i > 0 and nums[i] == nums[i-1]:\n            continue\n        for j in range(i+1, n-2):\n            if j > i+1 and nums[j] == nums[j-1]:\n                continue\n            left, right = j+1, n-1\n            while left < right:\n                total = nums[i] + nums[j] + nums[left] + nums[right]\n                if total == target:\n                    result.append([nums[i], nums[j], nums[left], nums[right]])\n                    while left < right and nums[left] == nums[left+1]:\n                        left += 1\n                    while left < right and nums[right] == nums[right-1]:\n                        right -= 1\n                    left += 1\n                    right -= 1\n                elif total < target:\n                    left += 1\n                else:\n                    right -= 1\n    return result",
        },
        {
          id: "largest-subarray-with-zero-sum",
          title: "Largest Subarray with 0 Sum",
          content:
            "Given an array of integers (that may include both positive and negative), find the length of the largest subarray with sum equal to 0.\n\nExample 1:\n- Input: [15, -2, 2, -8, 1, 7, 10, 23]\n- Output: 5  (Explanation: The subarray [-2, 2, -8, 1, 7] has sum 0 and length 5)\n\nExample 2:\n- Input: [1, 2, 3]\n- Output: 0",
          solution:
            "def largest_zero_sum_subarray(arr):\n    sum_index = {0: -1}\n    curr_sum = 0\n    max_len = 0\n    for i, num in enumerate(arr):\n        curr_sum += num\n        if curr_sum not in sum_index:\n            sum_index[curr_sum] = i\n        else:\n            max_len = max(max_len, i - sum_index[curr_sum])\n    return max_len",
        },
        {
          id: "count-subarrays-with-xor-k",
          title: "Count Number of Subarrays with Given XOR K",
          content:
            "Given an array of integers and an integer K, count the number of subarrays whose XOR equals K.\n\nExample 1:\n- Input: [4, 2, 2, 6, 4], K = 6\n- Output: 4  (Subarrays: [4,2], [4,2,2,6], [2,6,4], [6])\n\nExample 2:\n- Input: [5, 6, 7, 8, 9], K = 5\n- Output: 2  (Subarrays: [5], [5,6,7,8,9])",
          solution:
            "def count_subarrays_with_xor(arr, k):\n    count = 0\n    prefix_xor = 0\n    freq = {0: 1}\n    for num in arr:\n        prefix_xor ^= num\n        required = prefix_xor ^ k\n        count += freq.get(required, 0)\n        freq[prefix_xor] = freq.get(prefix_xor, 0) + 1\n    return count",
        },
        {
          id: "merge-overlapping-intervals",
          title: "Merge Overlapping Intervals",
          content:
            "Given a collection of intervals, merge all overlapping intervals and return the merged intervals.\n\nExample 1:\n- Input: [[1, 3], [2, 6], [8, 10], [15, 18]]\n- Output: [[1, 6], [8, 10], [15, 18]]\n\nExample 2:\n- Input: [[1, 4], [4, 5]]\n- Output: [[1, 5]]",
          solution:
            "def merge_intervals(intervals):\n    intervals.sort(key=lambda x: x[0])\n    merged = []\n    for interval in intervals:\n        if not merged or merged[-1][1] < interval[0]:\n            merged.append(interval)\n        else:\n            merged[-1][1] = max(merged[-1][1], interval[1])\n    return merged",
        },
        {
          id: "merge-two-sorted-arrays-without-extra-space",
          title: "Merge Two Sorted Arrays Without Extra Space",
          content:
            "Given two sorted arrays arr1 and arr2 of sizes m and n respectively, merge them so that arr1 contains the first m smallest elements and arr2 contains the remaining n elements, all in sorted order, without using extra space.\n\nExample 1:\n- Input: arr1 = [1, 3, 5], arr2 = [2, 4, 6]\n- Output: arr1 = [1, 2, 3], arr2 = [4, 5, 6]\n\nExample 2:\n- Input: arr1 = [1, 5, 9], arr2 = [2, 3, 10]\n- Output: arr1 = [1, 2, 3], arr2 = [5, 9, 10]",
          solution:
            "def merge_sorted_arrays(arr1, arr2):\n    i = j = 0\n    while i < len(arr1) and j < len(arr2):\n        if arr1[i] > arr2[j]:\n            # Swap and insert the greater element into arr2 in sorted order\n            arr1[i], arr2[j] = arr2[j], arr1[i]\n            # Fix arr2 to remain sorted\n            k = j\n            while k+1 < len(arr2) and arr2[k] > arr2[k+1]:\n                arr2[k], arr2[k+1] = arr2[k+1], arr2[k]\n                k += 1\n        i += 1\n    return arr1, arr2",
        },
        {
          id: "find-repeating-missing-number",
          title: "Find the Repeating and Missing Number",
          content:
            "Given an array of size n containing numbers from 1 to n with exactly one number missing and one number repeated, find the repeating and missing numbers.\n\nExample 1:\n- Input: [3, 1, 3]\n- Output: (repeating = 3, missing = 2)\n\nExample 2:\n- Input: [4, 3, 6, 2, 1, 1]\n- Output: (repeating = 1, missing = 5)",
          solution:
            "def find_repeating_missing(nums):\n    n = len(nums)\n    sum_n = n*(n+1)//2\n    sum_sq_n = n*(n+1)*(2*n+1)//6\n    sum_nums = sum(nums)\n    sum_sq_nums = sum(x*x for x in nums)\n    diff = sum_nums - sum_n  # repeating - missing\n    diff_sq = sum_sq_nums - sum_sq_n  # repeating^2 - missing^2\n    # Solve: repeating - missing = diff, repeating + missing = diff_sq / diff\n    sum_rm = diff_sq // diff\n    repeating = (diff + sum_rm) // 2\n    missing = sum_rm - repeating\n    return repeating, missing",
        },
        {
          id: "count-inversions",
          title: "Count Inversions",
          content:
            "Given an array, count the number of inversions in the array. An inversion is a pair (i, j) such that i < j and arr[i] > arr[j].\n\nExample 1:\n- Input: [1, 20, 6, 4, 5]\n- Output: 5  (Inversions: (20,6), (20,4), (20,5), (6,4), (6,5))\n\nExample 2:\n- Input: [2, 4, 1, 3, 5]\n- Output: 3  (Inversions: (2,1), (4,1), (4,3))",
          solution:
            "def count_inversions(arr):\n    def merge_sort_count(nums):\n        if len(nums) <= 1:\n            return nums, 0\n        mid = len(nums) // 2\n        left, left_inv = merge_sort_count(nums[:mid])\n        right, right_inv = merge_sort_count(nums[mid:])\n        merged = []\n        i = j = inv = 0\n        while i < len(left) and j < len(right):\n            if left[i] <= right[j]:\n                merged.append(left[i])\n                i += 1\n            else:\n                merged.append(right[j])\n                j += 1\n                inv += len(left) - i\n        merged += left[i:]\n        merged += right[j:]\n        return merged, left_inv + right_inv + inv\n    _, total_inv = merge_sort_count(arr)\n    return total_inv",
        },
        {
          id: "reverse-pairs",
          title: "Reverse Pairs",
          content:
            "Given an array, count the number of reverse pairs. A reverse pair is a pair (i, j) such that i < j and nums[i] > 2 * nums[j].\n\nExample 1:\n- Input: [1, 3, 2, 3, 1]\n- Output: 2\n\nExample 2:\n- Input: [2, 4, 3, 5, 1]\n- Output: 3",
          solution:
            "def reverse_pairs(nums):\n    def merge_sort(lo, hi):\n        if hi - lo <= 1:\n            return 0\n        mid = (lo + hi) // 2\n        count = merge_sort(lo, mid) + merge_sort(mid, hi)\n        j = mid\n        for i in range(lo, mid):\n            while j < hi and nums[i] > 2 * nums[j]:\n                j += 1\n            count += j - mid\n        nums[lo:hi] = sorted(nums[lo:hi])\n        return count\n    return merge_sort(0, len(nums))",
        },
        {
          id: "maximum-product-subarray",
          title: "Maximum Product Subarray",
          content:
            "Find the contiguous subarray within an array (containing at least one number) which has the largest product, and return that product.\n\nExample 1:\n- Input: [2, 3, -2, 4]\n- Output: 6  (The subarray [2, 3] has product 6)\n\nExample 2:\n- Input: [-2, 0, -1]\n- Output: 0  (The result is 0 because [-2], [-1] have products -2, -1 and we get 0 by taking [0])",
          solution:
            "def max_product(nums):\n    max_prod = min_prod = result = nums[0]\n    for num in nums[1:]:\n        if num < 0:\n            max_prod, min_prod = min_prod, max_prod\n        max_prod = max(num, max_prod * num)\n        min_prod = min(num, min_prod * num)\n        result = max(result, max_prod)\n    return result",
        },
      ],
    },
  },
  {
    stepTitle: "Step 2: Binary Search",
    sections: {
      "Lec 1: BS on 1D Arrays": [
        {
          id: "binary-search-x",
          title: "Binary Search to Find X in a Sorted Array",
          content:
            "Given a sorted array and a target value X, return the index if the target is found. If not, return -1.",
          solution: `def binary_search(arr, x):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] < x:
            low = mid + 1
        else:
            high = mid - 1
    return -1`,
        },
        {
          id: "lower-bound",
          title: "Implement Lower Bound (First Element Not Less Than X)",
          content:
            "Return the index of the first element in a sorted array which is not less than X.",
          solution: `def lower_bound(arr, x):
    low, high = 0, len(arr)
    while low < high:
        mid = (low + high) // 2
        if arr[mid] < x:
            low = mid + 1
        else:
            high = mid
    return low`,
        },
        {
          id: "upper-bound",
          title: "Implement Upper Bound (First Element Greater Than X)",
          content:
            "Return the index of the first element in a sorted array which is strictly greater than X.",
          solution: `def upper_bound(arr, x):
    low, high = 0, len(arr)
    while low < high:
        mid = (low + high) // 2
        if arr[mid] <= x:
            low = mid + 1
        else:
            high = mid
    return low`,
        },
        {
          id: "search-insert-position",
          title: "Search Insert Position",
          content:
            "Return index if target found. If not, return the index where it would be inserted in order.",
          solution: `def search_insert(arr, x):
    low, high = 0, len(arr)
    while low < high:
        mid = (low + high) // 2
        if arr[mid] < x:
            low = mid + 1
        else:
            high = mid
    return low`,
        },
        {
          id: "floor-ceil",
          title: "Find Floor and Ceil in a Sorted Array",
          content:
            "Find the floor (≤ x) and ceil (≥ x) of a number in a sorted array.",
          solution: `def floor_ceil(arr, x):
    floor, ceil = -1, -1
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == x:
            return x, x
        elif arr[mid] < x:
            floor = arr[mid]
            low = mid + 1
        else:
            ceil = arr[mid]
            high = mid - 1
    return floor, ceil`,
        },
        {
          id: "first-last-occurrence",
          title: "First and Last Occurrence of a Number",
          content:
            "Find the first and last occurrence of a number in a sorted array.",
          solution: `def find_occurrences(arr, x):
    def find(is_first):
        low, high, result = 0, len(arr) - 1, -1
        while low <= high:
            mid = (low + high) // 2
            if arr[mid] == x:
                result = mid
                if is_first:
                    high = mid - 1
                else:
                    low = mid + 1
            elif arr[mid] < x:
                low = mid + 1
            else:
                high = mid - 1
        return result
    return find(True), find(False)`,
        },
        {
          id: "count-occurrences",
          title:
            "Count Occurrences of a Number in a Sorted Array with Duplicates",
          content: `Given a sorted array with duplicates, count how many times a given number appears.
Input: arr = [1, 2, 2, 2, 3], target = 2
Output: 3

Input: arr = [5, 7, 7, 8, 8, 10], target = 6
Output: 0`,
          solution: `def count_occurrences(arr, target):
    def find_occurrence(find_first):
        low, high = 0, len(arr) - 1
        result = -1
        while low <= high:
            mid = (low + high) // 2
            if arr[mid] == target:
                result = mid
                if find_first:
                    high = mid - 1
                else:
                    low = mid + 1
            elif arr[mid] < target:
                low = mid + 1
            else:
                high = mid - 1
        return result

    first = find_occurrence(True)
    last = find_occurrence(False)
    return last - first + 1 if first != -1 else 0`,
        },
        {
          id: "search-rotated-array-1",
          title: "Search in Rotated Sorted Array I",
          content: `Search for a given number in a rotated sorted array with no duplicates.
Input: arr = [4,5,6,7,0,1,2], target = 0
Output: 4

Input: arr = [4,5,6,7,0,1,2], target = 3
Output: -1`,
          solution: `def search_rotated_array(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        if arr[low] <= arr[mid]:
            if arr[low] <= target < arr[mid]:
                high = mid - 1
            else:
                low = mid + 1
        else:
            if arr[mid] < target <= arr[high]:
                low = mid + 1
            else:
                high = mid - 1
    return -1`,
        },
        {
          id: "search-rotated-array-2",
          title: "Search in Rotated Sorted Array II",
          content: `Search for a given number in a rotated sorted array that may contain duplicates.
Input: arr = [2,5,6,0,0,1,2], target = 0
Output: True

Input: arr = [2,5,6,0,0,1,2], target = 3
Output: False`,
          solution: `def search_rotated_array_ii(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return True
        if arr[low] == arr[mid] == arr[high]:
            low += 1
            high -= 1
        elif arr[low] <= arr[mid]:
            if arr[low] <= target < arr[mid]:
                high = mid - 1
            else:
                low = mid + 1
        else:
            if arr[mid] < target <= arr[high]:
                low = mid + 1
            else:
                high = mid - 1
    return False`,
        },
        {
          id: "find-min-rotated",
          title: "Find Minimum in Rotated Sorted Array",
          content: `Find the minimum element in a rotated sorted array with no duplicates.
Input: arr = [3,4,5,1,2]
Output: 1

Input: arr = [4,5,6,7,0,1,2]
Output: 0`,
          solution: `def find_min_in_rotated(arr):
    low, high = 0, len(arr) - 1
    while low < high:
        mid = (low + high) // 2
        if arr[mid] > arr[high]:
            low = mid + 1
        else:
            high = mid
    return arr[low]`,
        },
        {
          id: "rotation-count",
          title: "Find Out How Many Times an Array Has Been Rotated",
          content: `Given a rotated sorted array, find the index of the minimum element, which is the number of rotations.
Input: arr = [15, 18, 2, 3, 6, 12]
Output: 2

Input: arr = [7, 9, 11, 12, 5]
Output: 4`,
          solution: `def rotation_count(arr):
    low, high = 0, len(arr) - 1
    n = len(arr)
    while low <= high:
        mid = (low + high) // 2
        next_ = (mid + 1) % n
        prev = (mid + n - 1) % n
        if arr[mid] <= arr[next_] and arr[mid] <= arr[prev]:
            return mid
        elif arr[mid] <= arr[high]:
            high = mid - 1
        elif arr[mid] >= arr[low]:
            low = mid + 1
    return 0`,
        },
        {
          id: "single-element-sorted",
          title: "Single Element in a Sorted Array",
          content: `In a sorted array where every element appears twice except one, find the single element.
Input: arr = [1,1,2,3,3,4,4,8,8]
Output: 2

Input: arr = [3,3,7,7,10,11,11]
Output: 10`,
          solution: `def single_non_duplicate(arr):
    low, high = 0, len(arr) - 1
    while low < high:
        mid = (low + high) // 2
        if mid % 2 == 1:
            mid -= 1
        if arr[mid] == arr[mid + 1]:
            low = mid + 2
        else:
            high = mid
    return arr[low]`,
        },
        {
          id: "find-peak",
          title: "Find Peak Element",
          content: `Find an element in the array which is strictly greater than its neighbors.
Input: arr = [1,2,3,1]
Output: 2 (index of 3)

Input: arr = [1,2,1,3,5,6,4]
Output: 1 or 5`,
          solution: `def find_peak_element(arr):
    low, high = 0, len(arr) - 1
    while low < high:
        mid = (low + high) // 2
        if arr[mid] > arr[mid + 1]:
            high = mid
        else:
            low = mid + 1
    return low`,
        },
      ],
      "Lec 2: BS on Answers": [
        {
          id: "sqrt-logn",
          title: "Square Root of a Number using Binary Search",
          content:
            "Return the integer part of square root of a number N using binary search.",
          solution: `def sqrt_binary(n):
    low, high, ans = 0, n, -1
    while low <= high:
        mid = (low + high) // 2
        if mid * mid <= n:
            ans = mid
            low = mid + 1
        else:
            high = mid - 1
    return ans`,
        },
        {
          id: "nth-root",
          title: "Nth Root of a Number using Binary Search",
          content:
            "Find the Nth root of a number using binary search (integer result).",
          solution: `def nth_root(n, m):
    def power(x, n):
        res = 1
        for _ in range(n):
            res *= x
            if res > m: return res
        return res

    low, high = 1, m
    while low <= high:
        mid = (low + high) // 2
        val = power(mid, n)
        if val == m:
            return mid
        elif val < m:
            low = mid + 1
        else:
            high = mid - 1
    return -1`,
        },
        {
          id: "koko-bananas",
          title: "Koko Eating Bananas",
          content:
            "Koko loves bananas and can eat at most H hours. Find the minimum eating speed K such that she can finish all bananas.",
          solution: `def min_eating_speed(piles, h):
    import math
    low, high = 1, max(piles)
    while low <= high:
        mid = (low + high) // 2
        hours = sum(math.ceil(p / mid) for p in piles)
        if hours <= h:
            high = mid - 1
        else:
            low = mid + 1
    return low`,
        },
        {
          id: "min-days-bouquets",
          title: "Minimum Days to Make M Bouquets",
          content:
            "Given a bloomDay array, find minimum days required to make m bouquets of k flowers in a row.",
          solution: `def min_days(bloomDay, m, k):
    def can_make(day):
        flow, bouq = 0, 0
        for b in bloomDay:
            flow = flow + 1 if b <= day else 0
            if flow == k:
                bouq += 1
                flow = 0
        return bouq >= m

    if len(bloomDay) < m * k:
        return -1

    low, high = min(bloomDay), max(bloomDay)
    while low <= high:
        mid = (low + high) // 2
        if can_make(mid):
            high = mid - 1
        else:
            low = mid + 1
    return low`,
        },
        {
          id: "smallest-divisor",
          title: "Find the Smallest Divisor Given Threshold",
          content:
            "Find the smallest divisor such that the sum of the result of dividing elements by the divisor is less than or equal to threshold.",
          solution: `def smallest_divisor(nums, threshold):
    import math
    low, high = 1, max(nums)
    while low <= high:
        mid = (low + high) // 2
        total = sum(math.ceil(n / mid) for n in nums)
        if total <= threshold:
            high = mid - 1
        else:
            low = mid + 1
    return low`,
        },
        {
          id: "ship-packages",
          title: "Capacity to Ship Packages Within D Days",
          content:
            "Find the least weight capacity of a ship that will result in all packages being shipped within D days.",
          solution: `def ship_within_days(weights, D):
    def can_ship(cap):
        days, total = 1, 0
        for w in weights:
            if total + w > cap:
                days += 1
                total = 0
            total += w
        return days <= D

    low, high = max(weights), sum(weights)
    while low <= high:
        mid = (low + high) // 2
        if can_ship(mid):
            high = mid - 1
        else:
            low = mid + 1
    return low`,
        },
        {
          id: "kth-missing-positive",
          title: "Kth Missing Positive Number",
          content: `Given an array arr of sorted positive integers and an integer k, return the kth missing positive number.
Input: arr = [2,3,4,7,11], k = 5
Output: 9

Input: arr = [1,2,3,4], k = 2
Output: 6`,
          solution: `def find_kth_missing(arr, k):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        missing = arr[mid] - mid - 1
        if missing < k:
            left = mid + 1
        else:
            right = mid - 1
    return left + k`,
        },
        {
          id: "aggressive-cows",
          title: "Aggressive Cows",
          content: `You are given an array of stall positions and the number of cows. Place the cows in stalls such that the minimum distance between any two of them is maximized.
Input: positions = [1, 2, 4, 8, 9], cows = 3
Output: 3`,
          solution: `def aggressive_cows(positions, cows):
    positions.sort()
    def can_place(dist):
        count, last = 1, positions[0]
        for i in range(1, len(positions)):
            if positions[i] - last >= dist:
                count += 1
                last = positions[i]
            if count == cows:
                return True
        return False

    low, high = 1, positions[-1] - positions[0]
    result = 0
    while low <= high:
        mid = (low + high) // 2
        if can_place(mid):
            result = mid
            low = mid + 1
        else:
            high = mid - 1
    return result`,
        },
        {
          id: "book-allocation",
          title: "Book Allocation Problem",
          content: `Allocate books to students so that the maximum number of pages assigned to a student is minimized.
Input: books = [12, 34, 67, 90], students = 2
Output: 113`,
          solution: `def book_allocation(books, students):
    def is_possible(max_pages):
        required, current = 1, 0
        for pages in books:
            if pages > max_pages:
                return False
            if current + pages > max_pages:
                required += 1
                current = pages
            else:
                current += pages
        return required <= students

    low, high = max(books), sum(books)
    result = high
    while low <= high:
        mid = (low + high) // 2
        if is_possible(mid):
            result = mid
            high = mid - 1
        else:
            low = mid + 1
    return result`,
        },
        {
          id: "split-array-largest-sum",
          title: "Split Array - Largest Sum",
          content: `Split the array into m subarrays such that the largest sum among them is minimized.
Input: nums = [7,2,5,10,8], m = 2
Output: 18`,
          solution: `def split_array(nums, m):
    def is_valid(max_sum):
        count, total = 1, 0
        for num in nums:
            if total + num > max_sum:
                count += 1
                total = num
            else:
                total += num
        return count <= m

    low, high = max(nums), sum(nums)
    result = high
    while low <= high:
        mid = (low + high) // 2
        if is_valid(mid):
            result = mid
            high = mid - 1
        else:
            low = mid + 1
    return result`,
        },
        {
          id: "painters-partition",
          title: "Painter's Partition Problem",
          content: `Given a list of boards and number of painters, partition the boards among painters to minimize the maximum time taken.
Input: boards = [10, 20, 30, 40], painters = 2
Output: 60`,
          solution: `def painters_partition(boards, painters):
    def is_feasible(limit):
        total, count = 0, 1
        for board in boards:
            if total + board > limit:
                count += 1
                total = board
                if count > painters:
                    return False
            else:
                total += board
        return True

    low, high = max(boards), sum(boards)
    result = high
    while low <= high:
        mid = (low + high) // 2
        if is_feasible(mid):
            result = mid
            high = mid - 1
        else:
            low = mid + 1
    return result`,
        },
        {
          id: "minimize-max-distance-gas-station",
          title: "Minimize Max Distance to Gas Station",
          content: `Place k gas stations to minimize the maximum distance between adjacent stations.
Input: stations = [1,2,3,4,5,6,7,8,9,10], k = 9
Output: 0.5`,
          solution: `def minmax_gas_dist(stations, k):
    def can_place(D):
        count = 0
        for i in range(len(stations) - 1):
            count += int((stations[i+1] - stations[i]) / D)
        return count <= k

    low, high = 0, stations[-1] - stations[0]
    while high - low > 1e-6:
        mid = (low + high) / 2
        if can_place(mid):
            high = mid
        else:
            low = mid
    return high`,
        },
        {
          id: "median-two-sorted-arrays",
          title: "Median of Two Sorted Arrays",
          content: `Find the median of two sorted arrays.
Input: nums1 = [1,3], nums2 = [2]
Output: 2.0`,
          solution: `def find_median_sorted_arrays(nums1, nums2):
    A, B = nums1, nums2
    if len(A) > len(B):
        A, B = B, A
    total = len(A) + len(B)
    half = total // 2

    low, high = 0, len(A)
    while low <= high:
        i = (low + high) // 2
        j = half - i

        Aleft = A[i-1] if i > 0 else float('-inf')
        Aright = A[i] if i < len(A) else float('inf')
        Bleft = B[j-1] if j > 0 else float('-inf')
        Bright = B[j] if j < len(B) else float('inf')

        if Aleft <= Bright and Bleft <= Aright:
            if total % 2:
                return min(Aright, Bright)
            return (max(Aleft, Bleft) + min(Aright, Bright)) / 2
        elif Aleft > Bright:
            high = i - 1
        else:
            low = i + 1`,
        },
        {
          id: "kth-element-two-sorted",
          title: "Kth Element of Two Sorted Arrays",
          content: `Find the kth element in the union of two sorted arrays.
Input: arr1 = [2,3,6,7,9], arr2 = [1,4,8,10], k = 5
Output: 6`,
          solution: `def kth_element(arr1, arr2, k):
    if len(arr1) > len(arr2):
        return kth_element(arr2, arr1, k)

    low, high = max(0, k - len(arr2)), min(len(arr1), k)
    while low <= high:
        cut1 = (low + high) // 2
        cut2 = k - cut1

        l1 = arr1[cut1-1] if cut1 > 0 else float('-inf')
        l2 = arr2[cut2-1] if cut2 > 0 else float('-inf')
        r1 = arr1[cut1] if cut1 < len(arr1) else float('inf')
        r2 = arr2[cut2] if cut2 < len(arr2) else float('inf')

        if l1 <= r2 and l2 <= r1:
            return max(l1, l2)
        elif l1 > r2:
            high = cut1 - 1
        else:
            low = cut1 + 1`,
        },
      ],
      "Lec 3: BS on 2D Arrays": [
        {
          id: "row-with-max-ones",
          title: "Find Row with Maximum Number of 1s",
          content:
            "Given a binary matrix, find the row with the maximum number of 1s.",
          solution: `def row_with_max_ones(matrix):
    max_row, max_count = -1, 0
    for i, row in enumerate(matrix):
        count = sum(row)
        if count > max_count:
            max_count = count
            max_row = i
    return max_row`,
        },
        {
          id: "search-2d-matrix",
          title: "Search in a 2D Matrix",
          content:
            "Search for a target value in an m x n matrix. Matrix has sorted rows and first integer of each row > last integer of previous row.",
          solution: `def search_matrix(matrix, target):
    if not matrix or not matrix[0]:
        return False
    rows, cols = len(matrix), len(matrix[0])
    low, high = 0, rows * cols - 1
    while low <= high:
        mid = (low + high) // 2
        val = matrix[mid // cols][mid % cols]
        if val == target:
            return True
        elif val < target:
            low = mid + 1
        else:
            high = mid - 1
    return False`,
        },
        {
          id: "search-sorted-matrix",
          title: "Search in Row and Column-wise Sorted Matrix",
          content:
            "Search for a target in a matrix sorted row-wise and column-wise.",
          solution: `def search_sorted_matrix(matrix, target):
    if not matrix or not matrix[0]:
        return False
    row, col = 0, len(matrix[0]) - 1
    while row < len(matrix) and col >= 0:
        if matrix[row][col] == target:
            return True
        elif matrix[row][col] < target:
            row += 1
        else:
            col -= 1
    return False`,
        },
        {
          id: "peak-element-2d",
          title: "Find Peak Element in 2D Matrix",
          content:
            "A peak element is one which is not smaller than its neighbors. Find one such element.",
          solution: `def find_peak_2d(matrix):
    rows, cols = len(matrix), len(matrix[0])
    low, high = 0, cols - 1
    while low <= high:
        mid = (low + high) // 2
        max_row = max(range(rows), key=lambda x: matrix[x][mid])
        if (mid == 0 or matrix[max_row][mid] >= matrix[max_row][mid - 1]) and \
           (mid == cols - 1 or matrix[max_row][mid] >= matrix[max_row][mid + 1]):
            return matrix[max_row][mid]
        elif mid > 0 and matrix[max_row][mid - 1] > matrix[max_row][mid]:
            high = mid - 1
        else:
            low = mid + 1`,
        },
        {
          id: "matrix-median",
          title: "Find Median in Row-wise Sorted Matrix",
          content: "Find the median in a row-wise sorted matrix.",
          solution: `def find_median(matrix):
    import bisect
    low, high = 1, int(1e9)
    n = len(matrix)
    m = len(matrix[0])
    while low <= high:
        mid = (low + high) // 2
        count = 0
        for row in matrix:
            count += bisect.bisect_right(row, mid)
        if count <= (n * m) // 2:
            low = mid + 1
        else:
            high = mid - 1
    return low`,
        },
      ],
    },
  },
  {
    stepTitle: "Step 3: Linked List",
    sections: {
      "Lec 1: Learn Singly Linked List": [
        {
          id: "intro-sll",
          title: "Introduction to Singly Linked List",
          content:
            "Understand how a singly linked list is structured with nodes and pointers.",
          solution: `class Node:
  def __init__(self, data):
    self.data = data
    self.next = None`,
        },
        {
          id: "insert-sll",
          title: "Insert a node in LinkedList",
          content: "Insert a new node at the end of the singly linked list.",
          solution: `def insert(head, data):
  new_node = Node(data)
  if not head:
    return new_node
  temp = head
  while temp.next:
    temp = temp.next
  temp.next = new_node
  return head`,
        },
        {
          id: "delete-sll",
          title: "Delete a node in LinkedList",
          content:
            "Delete the first node with a given value from the singly linked list.",
          solution: `def delete(head, key):
  if not head:
    return None
  if head.data == key:
    return head.next
  prev, curr = head, head.next
  while curr:
    if curr.data == key:
      prev.next = curr.next
      return head
    prev, curr = curr, curr.next
  return head`,
        },
        {
          id: "length-sll",
          title: "Find the length of the linked list",
          content: "Return the number of nodes in the linked list.",
          solution: `def getLength(head):
  count = 0
  while head:
    count += 1
    head = head.next
  return count`,
        },
        {
          id: "search-sll",
          title: "Search an element in the linked list",
          content: "Return True if the element exists in the list, else False.",
          solution: `def search(head, key):
  while head:
    if head.data == key:
      return True
    head = head.next
  return False`,
        },
      ],
      "Lec 2: Learn Doubly Linked List": [
        {
          id: "intro-dll",
          title: "Introduction to Doubly Linked List",
          content:
            "Understand how a doubly linked list works with prev and next pointers.",
          solution: `class DLLNode:
  def __init__(self, data):
    self.data = data
    self.prev = None
    self.next = None`,
        },
        {
          id: "insert-dll",
          title: "Insert a node in DLL",
          content: "Insert a new node at the end of a doubly linked list.",
          solution: `def insertDLL(head, data):
  new_node = DLLNode(data)
  if not head:
    return new_node
  temp = head
  while temp.next:
    temp = temp.next
  temp.next = new_node
  new_node.prev = temp
  return head`,
        },
        {
          id: "delete-dll",
          title: "Delete a node in DLL",
          content:
            "Delete the first node with a given value from the doubly linked list.",
          solution: `def deleteDLL(head, key):
  temp = head
  while temp:
    if temp.data == key:
      if temp.prev:
        temp.prev.next = temp.next
      if temp.next:
        temp.next.prev = temp.prev
      if temp == head:
        head = temp.next
      break
    temp = temp.next
  return head`,
        },
        {
          id: "reverse-dll",
          title: "Reverse a Doubly Linked List",
          content: "Reverse a doubly linked list in-place.",
          solution: `def reverseDLL(head):
  if not head:
    return None
  curr = head
  while curr:
    curr.prev, curr.next = curr.next, curr.prev
    if not curr.prev:
      return curr
    curr = curr.prev`,
        },
      ],
      "Lec 3: Problems on Linked List": [
        {
          id: "middle-ll",
          title: "Middle of LinkedList [Tortoise-Hare]",
          content: "Find the middle node using slow and fast pointer approach.",
          solution: `def findMiddle(head):
  slow = fast = head
  while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
  return slow.data`,
        },
        {
          id: "reverse-ll-iterative",
          title: "Reverse a LinkedList [Iterative]",
          content: "Reverse a singly linked list iteratively.",
          solution: `def reverseList(head):
  prev = None
  curr = head
  while curr:
    next_node = curr.next
    curr.next = prev
    prev = curr
    curr = next_node
  return prev`,
        },
        {
          id: "reverse-recursive",
          title: "Reverse a LinkedList [Recursive]",
          content: "Reverse a singly linked list using recursion.",
          solution: `def reverseRecursive(head):
  if not head or not head.next:
    return head
  rest = reverseRecursive(head.next)
  head.next.next = head
  head.next = None
  return rest`,
        },
        {
          id: "detect-loop",
          title: "Detect a loop in LinkedList",
          content:
            "Detect whether a cycle exists using Floyd's cycle detection.",
          solution: `def hasCycle(head):
  slow = fast = head
  while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
    if slow == fast:
      return True
  return False`,
        },
        {
          id: "start-of-loop",
          title: "Find the starting point of the loop",
          content:
            "Find the node where the cycle begins using Floyd’s algorithm.",
          solution: `def detectCycleStart(head):
  slow = fast = head
  while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
    if slow == fast:
      break
  else:
    return None
  slow = head
  while slow != fast:
    slow = slow.next
    fast = fast.next
  return slow`,
        },
        {
          id: "length-of-loop",
          title: "Length of Loop in Linked List",
          content: `Detect if a cycle exists in the linked list and find the length of the loop.`,
          solution: `def length_of_loop(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            count = 1
            fast = fast.next
            while slow != fast:
                fast = fast.next
                count += 1
            return count
    return 0`,
        },
        {
          id: "palindrome-linked-list",
          title: "Check if Linked List is a Palindrome",
          content: `Check whether the given linked list is a palindrome.`,
          solution: `def is_palindrome(head):
    vals = []
    while head:
        vals.append(head.val)
        head = head.next
    return vals == vals[::-1]`,
        },
        {
          id: "segregate-odd-even",
          title: "Segregate Odd and Even Nodes in Linked List",
          content: `Rearrange the linked list so that all odd positioned nodes are before even positioned nodes.`,
          solution: `def segregate_odd_even(head):
    if not head:
        return None
    odd = head
    even = head.next
    even_head = even
    while even and even.next:
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next
    odd.next = even_head
    return head`,
        },
        {
          id: "remove-nth-node",
          title: "Remove Nth Node from the Back of the Linked List",
          content: `Remove the nth node from the end of the linked list.`,
          solution: `def remove_nth_from_end(head, n):
    dummy = ListNode(0, head)
    left = right = dummy
    for _ in range(n):
        right = right.next
    while right.next:
        left = left.next
        right = right.next
    left.next = left.next.next
    return dummy.next`,
        },
        {
          id: "delete-middle-node",
          title: "Delete the Middle Node of Linked List",
          content: `Delete the middle node of a linked list.`,
          solution: `def delete_middle(head):
    if not head or not head.next:
        return None
    slow = head
    fast = head
    prev = None
    while fast and fast.next:
        prev = slow
        slow = slow.next
        fast = fast.next.next
    prev.next = slow.next
    return head`,
        },
        {
          id: "sort-linked-list",
          title: "Sort Linked List",
          content: `Sort a linked list using merge sort.`,
          solution: `def sort_list(head):
    if not head or not head.next:
        return head
    slow, fast = head, head.next
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    mid = slow.next
    slow.next = None
    left = sort_list(head)
    right = sort_list(mid)
    return merge(left, right)

def merge(l1, l2):
    dummy = ListNode()
    curr = dummy
    while l1 and l2:
        if l1.val < l2.val:
            curr.next = l1
            l1 = l1.next
        else:
            curr.next = l2
            l2 = l2.next
        curr = curr.next
    curr.next = l1 or l2
    return dummy.next`,
        },
        {
          id: "sort-012-list",
          title: "Sort a Linked List of 0's, 1's, and 2's by Changing Links",
          content: `Sort a linked list of 0s, 1s and 2s without counting them, just changing links.`,
          solution: `def sort_012_list(head):
    zeroD = zero = ListNode(0)
    oneD = one = ListNode(0)
    twoD = two = ListNode(0)
    while head:
        if head.val == 0:
            zero.next = head
            zero = zero.next
        elif head.val == 1:
            one.next = head
            one = one.next
        else:
            two.next = head
            two = two.next
        head = head.next
    zero.next = oneD.next if oneD.next else twoD.next
    one.next = twoD.next
    two.next = None
    return zeroD.next`,
        },
        {
          id: "intersection-point-y",
          title: "Find the Intersection Point of Y Linked Lists",
          content: `Find the node at which two linked lists intersect.`,
          solution: `def get_intersection_node(headA, headB):
    a, b = headA, headB
    while a != b:
        a = a.next if a else headB
        b = b.next if b else headA
    return a`,
        },
        {
          id: "add-one-linked-list",
          title: "Add 1 to a Number Represented by Linked List",
          content: `Add one to a number represented by a linked list.`,
          solution: `def add_one(head):
    def reverse(node):
        prev = None
        while node:
            next_node = node.next
            node.next = prev
            prev = node
            node = next_node
        return prev

    head = reverse(head)
    curr = head
    carry = 1
    while curr:
        curr.val += carry
        if curr.val < 10:
            carry = 0
            break
        curr.val = 0
        if not curr.next:
            curr.next = ListNode(0)
        curr = curr.next
    return reverse(head)`,
        },
        {
          id: "add-two-numbers",
          title: "Add 2 Numbers Represented by Linked Lists",
          content: `Add two numbers represented by two linked lists.`,
          solution: `def add_two_numbers(l1, l2):
    dummy = ListNode()
    current = dummy
    carry = 0
    while l1 or l2 or carry:
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0
        total = val1 + val2 + carry
        carry = total // 10
        current.next = ListNode(total % 10)
        current = current.next
        if l1:
            l1 = l1.next
        if l2:
            l2 = l2.next
    return dummy.next`,
        },
      ],
      "Lec 4 : Hard Problems": [
        {
          id: "reverse-in-k-group",
          title: "Reverse Linked List in Group of Given Size K",
          content: `Reverse nodes of a linked list in groups of size K. If the number of nodes is not a multiple of K, leave the last group as is.`,
          solution: `def reverse_k_group(head, k):
    def get_kth(curr, k):
        while curr and k > 0:
            curr = curr.next
            k -= 1
        return curr

    dummy = ListNode(0)
    dummy.next = head
    group_prev = dummy

    while True:
        kth = get_kth(group_prev, k)
        if not kth:
            break
        group_next = kth.next

        prev, curr = kth.next, group_prev.next
        while curr != group_next:
            tmp = curr.next
            curr.next = prev
            prev = curr
            curr = tmp

        tmp = group_prev.next
        group_prev.next = kth
        group_prev = tmp

    return dummy.next`,
        },
        {
          id: "rotate-linked-list",
          title: "Rotate a Linked List",
          content: `Rotate a linked list to the right by k places.`,
          solution: `def rotate_right(head, k):
    if not head or not head.next or k == 0:
        return head
    
    length = 1
    tail = head
    while tail.next:
        tail = tail.next
        length += 1

    k = k % length
    if k == 0:
        return head

    tail.next = head
    steps_to_new_head = length - k
    new_tail = tail
    while steps_to_new_head:
        new_tail = new_tail.next
        steps_to_new_head -= 1
    head = new_tail.next
    new_tail.next = None
    return head`,
        },
        {
          id: "flatten-linked-list",
          title: "Flattening of a Linked List",
          content: `Flatten a multi-level linked list where each node may have a child pointer to another linked list.`,
          solution: `def flatten(head):
    if not head:
        return None

    stack = [head]
    prev = None
    while stack:
        curr = stack.pop()
        if prev:
            prev.next = curr
        while curr:
            if curr.child:
                if curr.next:
                    stack.append(curr.next)
                curr.next = curr.child
                curr.child = None
            prev = curr
            curr = curr.next
    return head`,
        },
        {
          id: "clone-random-list",
          title: "Clone a Linked List with Random and Next Pointer",
          content: `Clone a linked list where each node has a next and a random pointer.`,
          solution: `def copy_random_list(head):
    if not head:
        return None

    curr = head
    while curr:
        new_node = ListNode(curr.val)
        new_node.next = curr.next
        curr.next = new_node
        curr = new_node.next

    curr = head
    while curr:
        if curr.random:
            curr.next.random = curr.random.next
        curr = curr.next.next

    curr = head
    copy_head = head.next
    while curr:
        copy = curr.next
        curr.next = copy.next
        if copy.next:
            copy.next = copy.next.next
        curr = curr.next
    return copy_head`,
        },
      ],
    },
  },
  {
    stepTitle: "Step 4: Sliding Window",
    sections: {
      "Lec 1: Medium Problem": [
        {
          id: "longest-substring-wo-repeat",
          title: "Longest Substring Without Repeating Characters",
          content:
            "Given a string, find the length of the longest substring without repeating characters.",
          solution: `def lengthOfLongestSubstring(s):
  char_set = set()
  l = 0
  max_len = 0
  for r in range(len(s)):
    while s[r] in char_set:
      char_set.remove(s[l])
      l += 1
    char_set.add(s[r])
    max_len = max(max_len, r - l + 1)
  return max_len`,
        },
        {
          id: "max-consecutive-ones-iii",
          title: "Max Consecutive Ones III",
          content:
            "Given a binary array and an integer k, return the maximum number of consecutive 1's with at most k 0's flipped.",
          solution: `def longestOnes(nums, k):
  l = 0
  for r in range(len(nums)):
    if nums[r] == 0:
      k -= 1
    if k < 0:
      if nums[l] == 0:
        k += 1
      l += 1
  return r - l + 1`,
        },
        {
          id: "fruit-into-baskets",
          title: "Fruit Into Baskets",
          content:
            "You are given an array of fruits. Return the length of the longest subarray with at most two distinct fruits.",
          solution: `def totalFruit(fruits):
  from collections import defaultdict
  count = defaultdict(int)
  l = max_len = 0
  for r in range(len(fruits)):
    count[fruits[r]] += 1
    while len(count) > 2:
      count[fruits[l]] -= 1
      if count[fruits[l]] == 0:
        del count[fruits[l]]
      l += 1
    max_len = max(max_len, r - l + 1)
  return max_len`,
        },
        {
          id: "longest-repeating-char-replace",
          title: "Longest Repeating Character Replacement",
          content:
            "Return the length of the longest substring where you can replace at most k characters to make all characters the same.",
          solution: `def characterReplacement(s, k):
  from collections import defaultdict
  count = defaultdict(int)
  max_freq = l = 0
  for r in range(len(s)):
    count[s[r]] += 1
    max_freq = max(max_freq, count[s[r]])
    if (r - l + 1) - max_freq > k:
      count[s[l]] -= 1
      l += 1
  return r - l + 1`,
        },
        {
          id: "binary-subarray-sum",
          title: "Binary Subarray With Sum",
          content:
            "Given a binary array and an integer goal, return the number of subarrays with sum equal to goal.",
          solution: `def numSubarraysWithSum(nums, goal):
  from collections import defaultdict
  prefix_sum = defaultdict(int)
  prefix_sum[0] = 1
  total = 0
  count = 0
  for num in nums:
    total += num
    count += prefix_sum[total - goal]
    prefix_sum[total] += 1
  return count`,
        },
        {
          id: "count-nice-subarrays",
          title: "Count Number of Nice Subarrays",
          content:
            "Given an array of integers and an integer k, return the number of subarrays with exactly k odd numbers.",
          solution: `def numberOfSubarrays(nums, k):
  from collections import defaultdict
  count = defaultdict(int)
  count[0] = 1
  curr_odd = res = 0
  for num in nums:
    curr_odd += num % 2
    res += count[curr_odd - k]
    count[curr_odd] += 1
  return res`,
        },
        {
          id: "substring-with-all-three-characters",
          title: "Number of Substrings Containing All Three Characters",
          content: `Given a string s containing only characters 'a', 'b' and 'c', return the number of substrings containing at least one occurrence of all three characters.`,
          solution: `def number_of_substrings(s):
    last = [-1, -1, -1]
    res = 0
    for i, c in enumerate(s):
        last[ord(c) - ord('a')] = i
        res += 1 + min(last)
    return res`,
        },
        {
          id: "max-points-from-cards",
          title: "Maximum Points You Can Obtain from Cards",
          content: `Given an array of card points and an integer k, return the maximum score obtainable by choosing k cards from either end of the array.`,
          solution: `def max_score(card_points, k):
    n = len(card_points)
    total = sum(card_points[:k])
    max_score = total
    for i in range(1, k + 1):
        total = total - card_points[k - i] + card_points[-i]
        max_score = max(max_score, total)
    return max_score`,
        },
      ],
      "Lec 2: Hard Problem": [
        {
          id: "longest-substring-k-distinct",
          title: "Longest Substring with At Most K Distinct Characters",
          content:
            "Given a string and an integer k, return the length of the longest substring with at most k distinct characters.",
          solution: `def lengthOfLongestSubstringKDistinct(s, k):
  from collections import defaultdict
  count = defaultdict(int)
  l = max_len = 0
  for r in range(len(s)):
    count[s[r]] += 1
    while len(count) > k:
      count[s[l]] -= 1
      if count[s[l]] == 0:
        del count[s[l]]
      l += 1
    max_len = max(max_len, r - l + 1)
  return max_len`,
        },
        {
          id: "subarray-k-diff-integers",
          title: "Subarray with K Different Integers",
          content:
            "Return the number of subarrays with exactly k distinct integers.",
          solution: `def subarraysWithKDistinct(nums, k):
  from collections import Counter
  def atMost(k):
    count = Counter()
    res = l = 0
    for r in range(len(nums)):
      count[nums[r]] += 1
      while len(count) > k:
        count[nums[l]] -= 1
        if count[nums[l]] == 0:
          del count[nums[l]]
        l += 1
      res += r - l + 1
    return res
  return atMost(k) - atMost(k - 1)`,
        },
        {
          id: "min-window-substring",
          title: "Minimum Window Substring",
          content:
            "Given strings s and t, return the minimum window in s which contains all characters of t.",
          solution: `def minWindow(s, t):
  from collections import Counter
  if not s or not t:
    return ""
  countT = Counter(t)
  window = {}
  have = need = 0, len(countT)
  res, res_len = [-1, -1], float('inf')
  l = 0
  for r in range(len(s)):
    c = s[r]
    window[c] = window.get(c, 0) + 1
    if c in countT and window[c] == countT[c]:
      have += 1
    while have == need:
      if (r - l + 1) < res_len:
        res = [l, r]
        res_len = r - l + 1
      window[s[l]] -= 1
      if s[l] in countT and window[s[l]] < countT[s[l]]:
        have -= 1
      l += 1
  l, r = res
  return s[l:r + 1] if res_len != float('inf') else ""`,
        },
        {
          id: "min-window-subsequence",
          title: "Minimum Window Subsequence",
          content:
            "Given strings s1 and s2, return the minimum window in s1 which contains s2 as a subsequence.",
          solution: `def minWindowSubsequence(s1, s2):
  m, n = len(s1), len(s2)
  min_len = float('inf')
  start = -1
  i = 0
  while i < m:
    if s1[i] == s2[0]:
      j, k = i, 0
      while j < m:
        if s1[j] == s2[k]:
          k += 1
          if k == n:
            end = j
            while i <= end:
              if s1[i] == s2[0]:
                break
              i += 1
            if (end - i + 1) < min_len:
              min_len = end - i + 1
              start = i
            break
        j += 1
    i += 1
  return s1[start:start + min_len] if start != -1 else ""`,
        },
      ],
    },
  },
  {
    stepTitle: "Step 5: Greedy Algorithm",
    sections: {
      "Lec 1: Medium Problem": [
        {
          id: "assign-cookies",
          title: "Assign Cookies",
          content:
            "You are given two integer arrays representing children's greed and cookie sizes. Return the maximum number of content children.",
          solution: `def findContentChildren(g, s):
  g.sort()
  s.sort()
  i = j = 0
  while i < len(g) and j < len(s):
    if s[j] >= g[i]:
      i += 1
    j += 1
  return i`,
        },
        {
          id: "fractional-knapsack",
          title: "Fractional Knapsack Problem",
          content:
            "Given weights and values of items, return the maximum value in the knapsack allowing fractional values.",
          solution: `def fractionalKnapsack(W, items):
  items.sort(key=lambda x: x[1]/x[0], reverse=True)
  total = 0
  for wt, val in items:
    if W >= wt:
      W -= wt
      total += val
    else:
      total += val * (W / wt)
      break
  return total`,
        },
        {
          id: "minimum-coins",
          title: "Greedy Algorithm to Find Minimum Number of Coins",
          content:
            "Given a value V and coin denominations, return the minimum number of coins needed.",
          solution: `def minCoins(coins, V):
  coins.sort(reverse=True)
  count = 0
  for coin in coins:
    if V == 0:
      break
    if coin <= V:
      count += V // coin
      V %= coin
  return count`,
        },
        {
          id: "lemonade-change",
          title: "Lemonade Change",
          content:
            "Customers are buying lemonade for $5. Determine if you can provide correct change.",
          solution: `def lemonadeChange(bills):
  five = ten = 0
  for bill in bills:
    if bill == 5:
      five += 1
    elif bill == 10:
      if five == 0:
        return False
      five -= 1
      ten += 1
    else:
      if ten > 0 and five > 0:
        ten -= 1
        five -= 1
      elif five >= 3:
        five -= 3
      else:
        return False
  return True`,
        },
        {
          id: "valid-parenthesis-checker",
          title: "Valid Parenthesis Checker",
          content:
            "Given a string with parentheses, check if it's valid and balanced.",
          solution: `def isValid(s):
  stack = []
  mapping = {')': '(', ']': '[', '}': '{'}
  for char in s:
    if char in mapping:
      top = stack.pop() if stack else '#'
      if mapping[char] != top:
        return False
    else:
      stack.append(char)
  return not stack`,
        },
      ],
      "Lec 2: Hard Problem": [
        {
          id: "n-meetings-in-one-room",
          title: "N Meetings in One Room",
          content:
            "Given start and end times of meetings, find the maximum number of non-overlapping meetings.",
          solution: `def maxMeetings(start, end, n):
  meetings = sorted(zip(start, end), key=lambda x: x[1])
  count = 1
  end_time = meetings[0][1]
  for i in range(1, n):
    if meetings[i][0] > end_time:
      count += 1
      end_time = meetings[i][1]
  return count`,
        },
        {
          id: "jump-game",
          title: "Jump Game",
          content:
            "Given an array where each element represents jump length, check if you can reach the end.",
          solution: `def canJump(nums):
  reach = 0
  for i in range(len(nums)):
    if i > reach:
      return False
    reach = max(reach, i + nums[i])
  return True`,
        },
        {
          id: "jump-game-2",
          title: "Jump Game 2",
          content:
            "Return the minimum number of jumps needed to reach the last index.",
          solution: `def jump(nums):
  jumps = cur_end = cur_farthest = 0
  for i in range(len(nums) - 1):
    cur_farthest = max(cur_farthest, i + nums[i])
    if i == cur_end:
      jumps += 1
      cur_end = cur_farthest
  return jumps`,
        },
        {
          id: "min-platforms",
          title: "Minimum Number of Platforms Required for a Railway",
          content:
            "Given arrival and departure times, find the minimum number of platforms needed.",
          solution: `def findPlatform(arr, dep, n):
  arr.sort()
  dep.sort()
  plat_needed = result = 0
  i = j = 0
  while i < n and j < n:
    if arr[i] <= dep[j]:
      plat_needed += 1
      i += 1
    else:
      plat_needed -= 1
      j += 1
    result = max(result, plat_needed)
  return result`,
        },
        {
          id: "job-sequencing",
          title: "Job Sequencing Problem",
          content:
            "Given jobs with deadlines and profits, schedule jobs to maximize total profit.",
          solution: `def jobScheduling(jobs, n):
  jobs.sort(key=lambda x: x[2], reverse=True)
  max_deadline = max(job[1] for job in jobs)
  slots = [-1] * (max_deadline + 1)
  count = profit = 0
  for job in jobs:
    for j in range(job[1], 0, -1):
      if slots[j] == -1:
        slots[j] = job[0]
        count += 1
        profit += job[2]
        break
  return count, profit`,
        },
        {
          id: "candy",
          title: "Candy",
          content:
            "Each child must have at least one candy. Children with higher ratings get more than neighbors. Return the minimum candies needed.",
          solution: `def candy(ratings):
  n = len(ratings)
  candies = [1] * n
  for i in range(1, n):
    if ratings[i] > ratings[i - 1]:
      candies[i] = candies[i - 1] + 1
  for i in range(n - 2, -1, -1):
    if ratings[i] > ratings[i + 1]:
      candies[i] = max(candies[i], candies[i + 1] + 1)
  return sum(candies)`,
        },
        {
          id: "insert-interval",
          title: "Insert Interval",
          content: `Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).`,
          solution: `def insert(intervals, new_interval):
    res = []
    for i in range(len(intervals)):
        if new_interval[1] < intervals[i][0]:
            res.append(new_interval)
            return res + intervals[i:]
        elif new_interval[0] > intervals[i][1]:
            res.append(intervals[i])
        else:
            new_interval[0] = min(new_interval[0], intervals[i][0])
            new_interval[1] = max(new_interval[1], intervals[i][1])
    res.append(new_interval)
    return res`,
        },
        {
          id: "merge-intervals",
          title: "Merge Intervals",
          content: `Given a collection of intervals, merge all overlapping intervals.`,
          solution: `def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []
    for interval in intervals:
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            merged[-1][1] = max(merged[-1][1], interval[1])
    return merged`,
        },
        {
          id: "non-overlapping-intervals",
          title: "Non-overlapping Intervals",
          content: `Given a collection of intervals, find the minimum number of intervals to remove to make the rest of the intervals non-overlapping.`,
          solution: `def erase_overlap_intervals(intervals):
    intervals.sort(key=lambda x: x[1])
    end = float('-inf')
    count = 0
    for interval in intervals:
        if interval[0] >= end:
            end = interval[1]
        else:
            count += 1
    return count`,
        },
        {
          id: "sjf-scheduling",
          title: "Shortest Job First (SJF) Scheduling",
          content: `Given an array of processes with their burst times, implement the SJF scheduling algorithm (non-preemptive).`,
          solution: `def sjf_scheduling(burst_times):
    burst_times.sort()
    wait_time = 0
    total_wait = 0
    for i in range(1, len(burst_times)):
        wait_time += burst_times[i - 1]
        total_wait += wait_time
    avg_wait = total_wait / len(burst_times)
    return avg_wait`,
        },
        {
          id: "lru-page-replacement",
          title: "Least Recently Used (LRU) Page Replacement",
          content: `Given a sequence of pages and cache size, implement LRU page replacement algorithm.`,
          solution: `def lru(pages, capacity):
    from collections import OrderedDict
    cache = OrderedDict()
    page_faults = 0
    for page in pages:
        if page not in cache:
            page_faults += 1
            if len(cache) == capacity:
                cache.popitem(last=False)
        else:
            cache.move_to_end(page)
        cache[page] = True
    return page_faults`,
        },
      ],
    },
  },
  {
    stepTitle: "Step 5: Greedy Algorithm",
    sections: {
      "Lec 1: Medium Problem": [
        {
          id: "assign-cookies",
          title: "Assign Cookies",
          content:
            "You are given two integer arrays representing children's greed and cookie sizes. Return the maximum number of content children.",
          solution: `def findContentChildren(g, s):
  g.sort()
  s.sort()
  i = j = 0
  while i < len(g) and j < len(s):
    if s[j] >= g[i]:
      i += 1
    j += 1
  return i`,
        },
        {
          id: "fractional-knapsack",
          title: "Fractional Knapsack Problem",
          content:
            "Given weights and values of items, return the maximum value in the knapsack allowing fractional values.",
          solution: `def fractionalKnapsack(W, items):
  items.sort(key=lambda x: x[1]/x[0], reverse=True)
  total = 0
  for wt, val in items:
    if W >= wt:
      W -= wt
      total += val
    else:
      total += val * (W / wt)
      break
  return total`,
        },
        {
          id: "minimum-coins",
          title: "Greedy Algorithm to Find Minimum Number of Coins",
          content:
            "Given a value V and coin denominations, return the minimum number of coins needed.",
          solution: `def minCoins(coins, V):
  coins.sort(reverse=True)
  count = 0
  for coin in coins:
    if V == 0:
      break
    if coin <= V:
      count += V // coin
      V %= coin
  return count`,
        },
        {
          id: "lemonade-change",
          title: "Lemonade Change",
          content:
            "Customers are buying lemonade for $5. Determine if you can provide correct change.",
          solution: `def lemonadeChange(bills):
  five = ten = 0
  for bill in bills:
    if bill == 5:
      five += 1
    elif bill == 10:
      if five == 0:
        return False
      five -= 1
      ten += 1
    else:
      if ten > 0 and five > 0:
        ten -= 1
        five -= 1
      elif five >= 3:
        five -= 3
      else:
        return False
  return True`,
        },
        {
          id: "valid-parenthesis-checker",
          title: "Valid Parenthesis Checker",
          content:
            "Given a string with parentheses, check if it's valid and balanced.",
          solution: `def isValid(s):
  stack = []
  mapping = {')': '(', ']': '[', '}': '{'}
  for char in s:
    if char in mapping:
      top = stack.pop() if stack else '#'
      if mapping[char] != top:
        return False
    else:
      stack.append(char)
  return not stack`,
        },
      ],
      "Lec 2: Hard Problem": [
        {
          id: "n-meetings-in-one-room",
          title: "N Meetings in One Room",
          content:
            "Given start and end times of meetings, find the maximum number of non-overlapping meetings.",
          solution: `def maxMeetings(start, end, n):
  meetings = sorted(zip(start, end), key=lambda x: x[1])
  count = 1
  end_time = meetings[0][1]
  for i in range(1, n):
    if meetings[i][0] > end_time:
      count += 1
      end_time = meetings[i][1]
  return count`,
        },
        {
          id: "jump-game",
          title: "Jump Game",
          content:
            "Given an array where each element represents jump length, check if you can reach the end.",
          solution: `def canJump(nums):
  reach = 0
  for i in range(len(nums)):
    if i > reach:
      return False
    reach = max(reach, i + nums[i])
  return True`,
        },
        {
          id: "jump-game-2",
          title: "Jump Game 2",
          content:
            "Return the minimum number of jumps needed to reach the last index.",
          solution: `def jump(nums):
  jumps = cur_end = cur_farthest = 0
  for i in range(len(nums) - 1):
    cur_farthest = max(cur_farthest, i + nums[i])
    if i == cur_end:
      jumps += 1
      cur_end = cur_farthest
  return jumps`,
        },
        {
          id: "min-platforms",
          title: "Minimum Number of Platforms Required for a Railway",
          content:
            "Given arrival and departure times, find the minimum number of platforms needed.",
          solution: `def findPlatform(arr, dep, n):
  arr.sort()
  dep.sort()
  plat_needed = result = 0
  i = j = 0
  while i < n and j < n:
    if arr[i] <= dep[j]:
      plat_needed += 1
      i += 1
    else:
      plat_needed -= 1
      j += 1
    result = max(result, plat_needed)
  return result`,
        },
        {
          id: "job-sequencing",
          title: "Job Sequencing Problem",
          content:
            "Given jobs with deadlines and profits, schedule jobs to maximize total profit.",
          solution: `def jobScheduling(jobs, n):
  jobs.sort(key=lambda x: x[2], reverse=True)
  max_deadline = max(job[1] for job in jobs)
  slots = [-1] * (max_deadline + 1)
  count = profit = 0
  for job in jobs:
    for j in range(job[1], 0, -1):
      if slots[j] == -1:
        slots[j] = job[0]
        count += 1
        profit += job[2]
        break
  return count, profit`,
        },
        {
          id: "candy",
          title: "Candy",
          content:
            "Each child must have at least one candy. Children with higher ratings get more than neighbors. Return the minimum candies needed.",
          solution: `def candy(ratings):
  n = len(ratings)
  candies = [1] * n
  for i in range(1, n):
    if ratings[i] > ratings[i - 1]:
      candies[i] = candies[i - 1] + 1
  for i in range(n - 2, -1, -1):
    if ratings[i] > ratings[i + 1]:
      candies[i] = max(candies[i], candies[i + 1] + 1)
  return sum(candies)`,
        },
        {
          id: "insert-interval",
          title: "Insert Interval",
          content: `Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).`,
          solution: `def insert(intervals, new_interval):
    res = []
    for i in range(len(intervals)):
        if new_interval[1] < intervals[i][0]:
            res.append(new_interval)
            return res + intervals[i:]
        elif new_interval[0] > intervals[i][1]:
            res.append(intervals[i])
        else:
            new_interval[0] = min(new_interval[0], intervals[i][0])
            new_interval[1] = max(new_interval[1], intervals[i][1])
    res.append(new_interval)
    return res`,
        },
        {
          id: "merge-intervals",
          title: "Merge Intervals",
          content: `Given a collection of intervals, merge all overlapping intervals.`,
          solution: `def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []
    for interval in intervals:
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            merged[-1][1] = max(merged[-1][1], interval[1])
    return merged`,
        },
        {
          id: "non-overlapping-intervals",
          title: "Non-overlapping Intervals",
          content: `Given a collection of intervals, find the minimum number of intervals to remove to make the rest of the intervals non-overlapping.`,
          solution: `def erase_overlap_intervals(intervals):
    intervals.sort(key=lambda x: x[1])
    end = float('-inf')
    count = 0
    for interval in intervals:
        if interval[0] >= end:
            end = interval[1]
        else:
            count += 1
    return count`,
        },
        {
          id: "sjf-scheduling",
          title: "Shortest Job First (SJF) Scheduling",
          content: `Given an array of processes with their burst times, implement the SJF scheduling algorithm (non-preemptive).`,
          solution: `def sjf_scheduling(burst_times):
    burst_times.sort()
    wait_time = 0
    total_wait = 0
    for i in range(1, len(burst_times)):
        wait_time += burst_times[i - 1]
        total_wait += wait_time
    avg_wait = total_wait / len(burst_times)
    return avg_wait`,
        },
        {
          id: "lru-page-replacement",
          title: "Least Recently Used (LRU) Page Replacement",
          content: `Given a sequence of pages and cache size, implement LRU page replacement algorithm.`,
          solution: `def lru(pages, capacity):
    from collections import OrderedDict
    cache = OrderedDict()
    page_faults = 0
    for page in pages:
        if page not in cache:
            page_faults += 1
            if len(cache) == capacity:
                cache.popitem(last=False)
        else:
            cache.move_to_end(page)
        cache[page] = True
    return page_faults`,
        },
      ],
    },
  },
  {
    stepTitle: "Step 5: Greedy Algorithm",
    sections: {
      "Lec 1: Medium Problem": [
        {
          id: "assign-cookies",
          title: "Assign Cookies",
          content:
            "You are given two integer arrays representing children's greed and cookie sizes. Return the maximum number of content children.",
          solution: `def findContentChildren(g, s):
  g.sort()
  s.sort()
  i = j = 0
  while i < len(g) and j < len(s):
    if s[j] >= g[i]:
      i += 1
    j += 1
  return i`,
        },
        {
          id: "fractional-knapsack",
          title: "Fractional Knapsack Problem",
          content:
            "Given weights and values of items, return the maximum value in the knapsack allowing fractional values.",
          solution: `def fractionalKnapsack(W, items):
  items.sort(key=lambda x: x[1]/x[0], reverse=True)
  total = 0
  for wt, val in items:
    if W >= wt:
      W -= wt
      total += val
    else:
      total += val * (W / wt)
      break
  return total`,
        },
        {
          id: "minimum-coins",
          title: "Greedy Algorithm to Find Minimum Number of Coins",
          content:
            "Given a value V and coin denominations, return the minimum number of coins needed.",
          solution: `def minCoins(coins, V):
  coins.sort(reverse=True)
  count = 0
  for coin in coins:
    if V == 0:
      break
    if coin <= V:
      count += V // coin
      V %= coin
  return count`,
        },
        {
          id: "lemonade-change",
          title: "Lemonade Change",
          content:
            "Customers are buying lemonade for $5. Determine if you can provide correct change.",
          solution: `def lemonadeChange(bills):
  five = ten = 0
  for bill in bills:
    if bill == 5:
      five += 1
    elif bill == 10:
      if five == 0:
        return False
      five -= 1
      ten += 1
    else:
      if ten > 0 and five > 0:
        ten -= 1
        five -= 1
      elif five >= 3:
        five -= 3
      else:
        return False
  return True`,
        },
        {
          id: "valid-parenthesis-checker",
          title: "Valid Parenthesis Checker",
          content:
            "Given a string with parentheses, check if it's valid and balanced.",
          solution: `def isValid(s):
  stack = []
  mapping = {')': '(', ']': '[', '}': '{'}
  for char in s:
    if char in mapping:
      top = stack.pop() if stack else '#'
      if mapping[char] != top:
        return False
    else:
      stack.append(char)
  return not stack`,
        },
      ],
      "Lec 2: Hard Problem": [
        {
          id: "n-meetings-in-one-room",
          title: "N Meetings in One Room",
          content:
            "Given start and end times of meetings, find the maximum number of non-overlapping meetings.",
          solution: `def maxMeetings(start, end, n):
  meetings = sorted(zip(start, end), key=lambda x: x[1])
  count = 1
  end_time = meetings[0][1]
  for i in range(1, n):
    if meetings[i][0] > end_time:
      count += 1
      end_time = meetings[i][1]
  return count`,
        },
        {
          id: "jump-game",
          title: "Jump Game",
          content:
            "Given an array where each element represents jump length, check if you can reach the end.",
          solution: `def canJump(nums):
  reach = 0
  for i in range(len(nums)):
    if i > reach:
      return False
    reach = max(reach, i + nums[i])
  return True`,
        },
        {
          id: "jump-game-2",
          title: "Jump Game 2",
          content:
            "Return the minimum number of jumps needed to reach the last index.",
          solution: `def jump(nums):
  jumps = cur_end = cur_farthest = 0
  for i in range(len(nums) - 1):
    cur_farthest = max(cur_farthest, i + nums[i])
    if i == cur_end:
      jumps += 1
      cur_end = cur_farthest
  return jumps`,
        },
        {
          id: "min-platforms",
          title: "Minimum Number of Platforms Required for a Railway",
          content:
            "Given arrival and departure times, find the minimum number of platforms needed.",
          solution: `def findPlatform(arr, dep, n):
  arr.sort()
  dep.sort()
  plat_needed = result = 0
  i = j = 0
  while i < n and j < n:
    if arr[i] <= dep[j]:
      plat_needed += 1
      i += 1
    else:
      plat_needed -= 1
      j += 1
    result = max(result, plat_needed)
  return result`,
        },
        {
          id: "job-sequencing",
          title: "Job Sequencing Problem",
          content:
            "Given jobs with deadlines and profits, schedule jobs to maximize total profit.",
          solution: `def jobScheduling(jobs, n):
  jobs.sort(key=lambda x: x[2], reverse=True)
  max_deadline = max(job[1] for job in jobs)
  slots = [-1] * (max_deadline + 1)
  count = profit = 0
  for job in jobs:
    for j in range(job[1], 0, -1):
      if slots[j] == -1:
        slots[j] = job[0]
        count += 1
        profit += job[2]
        break
  return count, profit`,
        },
        {
          id: "candy",
          title: "Candy",
          content:
            "Each child must have at least one candy. Children with higher ratings get more than neighbors. Return the minimum candies needed.",
          solution: `def candy(ratings):
  n = len(ratings)
  candies = [1] * n
  for i in range(1, n):
    if ratings[i] > ratings[i - 1]:
      candies[i] = candies[i - 1] + 1
  for i in range(n - 2, -1, -1):
    if ratings[i] > ratings[i + 1]:
      candies[i] = max(candies[i], candies[i + 1] + 1)
  return sum(candies)`,
        },
        {
          id: "insert-interval",
          title: "Insert Interval",
          content: `Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).`,
          solution: `def insert(intervals, new_interval):
    res = []
    for i in range(len(intervals)):
        if new_interval[1] < intervals[i][0]:
            res.append(new_interval)
            return res + intervals[i:]
        elif new_interval[0] > intervals[i][1]:
            res.append(intervals[i])
        else:
            new_interval[0] = min(new_interval[0], intervals[i][0])
            new_interval[1] = max(new_interval[1], intervals[i][1])
    res.append(new_interval)
    return res`,
        },
        {
          id: "merge-intervals",
          title: "Merge Intervals",
          content: `Given a collection of intervals, merge all overlapping intervals.`,
          solution: `def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []
    for interval in intervals:
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            merged[-1][1] = max(merged[-1][1], interval[1])
    return merged`,
        },
        {
          id: "non-overlapping-intervals",
          title: "Non-overlapping Intervals",
          content: `Given a collection of intervals, find the minimum number of intervals to remove to make the rest of the intervals non-overlapping.`,
          solution: `def erase_overlap_intervals(intervals):
    intervals.sort(key=lambda x: x[1])
    end = float('-inf')
    count = 0
    for interval in intervals:
        if interval[0] >= end:
            end = interval[1]
        else:
            count += 1
    return count`,
        },
        {
          id: "sjf-scheduling",
          title: "Shortest Job First (SJF) Scheduling",
          content: `Given an array of processes with their burst times, implement the SJF scheduling algorithm (non-preemptive).`,
          solution: `def sjf_scheduling(burst_times):
    burst_times.sort()
    wait_time = 0
    total_wait = 0
    for i in range(1, len(burst_times)):
        wait_time += burst_times[i - 1]
        total_wait += wait_time
    avg_wait = total_wait / len(burst_times)
    return avg_wait`,
        },
        {
          id: "lru-page-replacement",
          title: "Least Recently Used (LRU) Page Replacement",
          content: `Given a sequence of pages and cache size, implement LRU page replacement algorithm.`,
          solution: `def lru(pages, capacity):
    from collections import OrderedDict
    cache = OrderedDict()
    page_faults = 0
    for page in pages:
        if page not in cache:
            page_faults += 1
            if len(cache) == capacity:
                cache.popitem(last=False)
        else:
            cache.move_to_end(page)
        cache[page] = True
    return page_faults`,
        },
      ],
    },
  },
  {
    stepTitle: "Step 5: Greedy Algorithm",
    sections: {
      "Lec 1: Medium Problem": [
        {
          id: "assign-cookies",
          title: "Assign Cookies",
          content:
            "You are given two integer arrays representing children's greed and cookie sizes. Return the maximum number of content children.",
          solution: `def findContentChildren(g, s):
  g.sort()
  s.sort()
  i = j = 0
  while i < len(g) and j < len(s):
    if s[j] >= g[i]:
      i += 1
    j += 1
  return i`,
        },
        {
          id: "fractional-knapsack",
          title: "Fractional Knapsack Problem",
          content:
            "Given weights and values of items, return the maximum value in the knapsack allowing fractional values.",
          solution: `def fractionalKnapsack(W, items):
  items.sort(key=lambda x: x[1]/x[0], reverse=True)
  total = 0
  for wt, val in items:
    if W >= wt:
      W -= wt
      total += val
    else:
      total += val * (W / wt)
      break
  return total`,
        },
        {
          id: "minimum-coins",
          title: "Greedy Algorithm to Find Minimum Number of Coins",
          content:
            "Given a value V and coin denominations, return the minimum number of coins needed.",
          solution: `def minCoins(coins, V):
  coins.sort(reverse=True)
  count = 0
  for coin in coins:
    if V == 0:
      break
    if coin <= V:
      count += V // coin
      V %= coin
  return count`,
        },
        {
          id: "lemonade-change",
          title: "Lemonade Change",
          content:
            "Customers are buying lemonade for $5. Determine if you can provide correct change.",
          solution: `def lemonadeChange(bills):
  five = ten = 0
  for bill in bills:
    if bill == 5:
      five += 1
    elif bill == 10:
      if five == 0:
        return False
      five -= 1
      ten += 1
    else:
      if ten > 0 and five > 0:
        ten -= 1
        five -= 1
      elif five >= 3:
        five -= 3
      else:
        return False
  return True`,
        },
        {
          id: "valid-parenthesis-checker",
          title: "Valid Parenthesis Checker",
          content:
            "Given a string with parentheses, check if it's valid and balanced.",
          solution: `def isValid(s):
  stack = []
  mapping = {')': '(', ']': '[', '}': '{'}
  for char in s:
    if char in mapping:
      top = stack.pop() if stack else '#'
      if mapping[char] != top:
        return False
    else:
      stack.append(char)
  return not stack`,
        },
      ],
      "Lec 2: Hard Problem": [
        {
          id: "n-meetings-in-one-room",
          title: "N Meetings in One Room",
          content:
            "Given start and end times of meetings, find the maximum number of non-overlapping meetings.",
          solution: `def maxMeetings(start, end, n):
  meetings = sorted(zip(start, end), key=lambda x: x[1])
  count = 1
  end_time = meetings[0][1]
  for i in range(1, n):
    if meetings[i][0] > end_time:
      count += 1
      end_time = meetings[i][1]
  return count`,
        },
        {
          id: "jump-game",
          title: "Jump Game",
          content:
            "Given an array where each element represents jump length, check if you can reach the end.",
          solution: `def canJump(nums):
  reach = 0
  for i in range(len(nums)):
    if i > reach:
      return False
    reach = max(reach, i + nums[i])
  return True`,
        },
        {
          id: "jump-game-2",
          title: "Jump Game 2",
          content:
            "Return the minimum number of jumps needed to reach the last index.",
          solution: `def jump(nums):
  jumps = cur_end = cur_farthest = 0
  for i in range(len(nums) - 1):
    cur_farthest = max(cur_farthest, i + nums[i])
    if i == cur_end:
      jumps += 1
      cur_end = cur_farthest
  return jumps`,
        },
        {
          id: "min-platforms",
          title: "Minimum Number of Platforms Required for a Railway",
          content:
            "Given arrival and departure times, find the minimum number of platforms needed.",
          solution: `def findPlatform(arr, dep, n):
  arr.sort()
  dep.sort()
  plat_needed = result = 0
  i = j = 0
  while i < n and j < n:
    if arr[i] <= dep[j]:
      plat_needed += 1
      i += 1
    else:
      plat_needed -= 1
      j += 1
    result = max(result, plat_needed)
  return result`,
        },
        {
          id: "job-sequencing",
          title: "Job Sequencing Problem",
          content:
            "Given jobs with deadlines and profits, schedule jobs to maximize total profit.",
          solution: `def jobScheduling(jobs, n):
  jobs.sort(key=lambda x: x[2], reverse=True)
  max_deadline = max(job[1] for job in jobs)
  slots = [-1] * (max_deadline + 1)
  count = profit = 0
  for job in jobs:
    for j in range(job[1], 0, -1):
      if slots[j] == -1:
        slots[j] = job[0]
        count += 1
        profit += job[2]
        break
  return count, profit`,
        },
        {
          id: "candy",
          title: "Candy",
          content:
            "Each child must have at least one candy. Children with higher ratings get more than neighbors. Return the minimum candies needed.",
          solution: `def candy(ratings):
  n = len(ratings)
  candies = [1] * n
  for i in range(1, n):
    if ratings[i] > ratings[i - 1]:
      candies[i] = candies[i - 1] + 1
  for i in range(n - 2, -1, -1):
    if ratings[i] > ratings[i + 1]:
      candies[i] = max(candies[i], candies[i + 1] + 1)
  return sum(candies)`,
        },
        {
          id: "insert-interval",
          title: "Insert Interval",
          content: `Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).`,
          solution: `def insert(intervals, new_interval):
    res = []
    for i in range(len(intervals)):
        if new_interval[1] < intervals[i][0]:
            res.append(new_interval)
            return res + intervals[i:]
        elif new_interval[0] > intervals[i][1]:
            res.append(intervals[i])
        else:
            new_interval[0] = min(new_interval[0], intervals[i][0])
            new_interval[1] = max(new_interval[1], intervals[i][1])
    res.append(new_interval)
    return res`,
        },
        {
          id: "merge-intervals",
          title: "Merge Intervals",
          content: `Given a collection of intervals, merge all overlapping intervals.`,
          solution: `def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []
    for interval in intervals:
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            merged[-1][1] = max(merged[-1][1], interval[1])
    return merged`,
        },
        {
          id: "non-overlapping-intervals",
          title: "Non-overlapping Intervals",
          content: `Given a collection of intervals, find the minimum number of intervals to remove to make the rest of the intervals non-overlapping.`,
          solution: `def erase_overlap_intervals(intervals):
    intervals.sort(key=lambda x: x[1])
    end = float('-inf')
    count = 0
    for interval in intervals:
        if interval[0] >= end:
            end = interval[1]
        else:
            count += 1
    return count`,
        },
        {
          id: "sjf-scheduling",
          title: "Shortest Job First (SJF) Scheduling",
          content: `Given an array of processes with their burst times, implement the SJF scheduling algorithm (non-preemptive).`,
          solution: `def sjf_scheduling(burst_times):
    burst_times.sort()
    wait_time = 0
    total_wait = 0
    for i in range(1, len(burst_times)):
        wait_time += burst_times[i - 1]
        total_wait += wait_time
    avg_wait = total_wait / len(burst_times)
    return avg_wait`,
        },
        {
          id: "lru-page-replacement",
          title: "Least Recently Used (LRU) Page Replacement",
          content: `Given a sequence of pages and cache size, implement LRU page replacement algorithm.`,
          solution: `def lru(pages, capacity):
    from collections import OrderedDict
    cache = OrderedDict()
    page_faults = 0
    for page in pages:
        if page not in cache:
            page_faults += 1
            if len(cache) == capacity:
                cache.popitem(last=False)
        else:
            cache.move_to_end(page)
        cache[page] = True
    return page_faults`,
        },
      ],
    },
  },
  {
    stepTitle: "Step 5: Greedy Algorithm",
    sections: {
      "Lec 1: Medium Problem": [
        {
          id: "assign-cookies",
          title: "Assign Cookies",
          content:
            "You are given two integer arrays representing children's greed and cookie sizes. Return the maximum number of content children.",
          solution: `def findContentChildren(g, s):
  g.sort()
  s.sort()
  i = j = 0
  while i < len(g) and j < len(s):
    if s[j] >= g[i]:
      i += 1
    j += 1
  return i`,
        },
        {
          id: "fractional-knapsack",
          title: "Fractional Knapsack Problem",
          content:
            "Given weights and values of items, return the maximum value in the knapsack allowing fractional values.",
          solution: `def fractionalKnapsack(W, items):
  items.sort(key=lambda x: x[1]/x[0], reverse=True)
  total = 0
  for wt, val in items:
    if W >= wt:
      W -= wt
      total += val
    else:
      total += val * (W / wt)
      break
  return total`,
        },
        {
          id: "minimum-coins",
          title: "Greedy Algorithm to Find Minimum Number of Coins",
          content:
            "Given a value V and coin denominations, return the minimum number of coins needed.",
          solution: `def minCoins(coins, V):
  coins.sort(reverse=True)
  count = 0
  for coin in coins:
    if V == 0:
      break
    if coin <= V:
      count += V // coin
      V %= coin
  return count`,
        },
        {
          id: "lemonade-change",
          title: "Lemonade Change",
          content:
            "Customers are buying lemonade for $5. Determine if you can provide correct change.",
          solution: `def lemonadeChange(bills):
  five = ten = 0
  for bill in bills:
    if bill == 5:
      five += 1
    elif bill == 10:
      if five == 0:
        return False
      five -= 1
      ten += 1
    else:
      if ten > 0 and five > 0:
        ten -= 1
        five -= 1
      elif five >= 3:
        five -= 3
      else:
        return False
  return True`,
        },
        {
          id: "valid-parenthesis-checker",
          title: "Valid Parenthesis Checker",
          content:
            "Given a string with parentheses, check if it's valid and balanced.",
          solution: `def isValid(s):
  stack = []
  mapping = {')': '(', ']': '[', '}': '{'}
  for char in s:
    if char in mapping:
      top = stack.pop() if stack else '#'
      if mapping[char] != top:
        return False
    else:
      stack.append(char)
  return not stack`,
        },
      ],
      "Lec 2: Hard Problem": [
        {
          id: "n-meetings-in-one-room",
          title: "N Meetings in One Room",
          content:
            "Given start and end times of meetings, find the maximum number of non-overlapping meetings.",
          solution: `def maxMeetings(start, end, n):
  meetings = sorted(zip(start, end), key=lambda x: x[1])
  count = 1
  end_time = meetings[0][1]
  for i in range(1, n):
    if meetings[i][0] > end_time:
      count += 1
      end_time = meetings[i][1]
  return count`,
        },
        {
          id: "jump-game",
          title: "Jump Game",
          content:
            "Given an array where each element represents jump length, check if you can reach the end.",
          solution: `def canJump(nums):
  reach = 0
  for i in range(len(nums)):
    if i > reach:
      return False
    reach = max(reach, i + nums[i])
  return True`,
        },
        {
          id: "jump-game-2",
          title: "Jump Game 2",
          content:
            "Return the minimum number of jumps needed to reach the last index.",
          solution: `def jump(nums):
  jumps = cur_end = cur_farthest = 0
  for i in range(len(nums) - 1):
    cur_farthest = max(cur_farthest, i + nums[i])
    if i == cur_end:
      jumps += 1
      cur_end = cur_farthest
  return jumps`,
        },
        {
          id: "min-platforms",
          title: "Minimum Number of Platforms Required for a Railway",
          content:
            "Given arrival and departure times, find the minimum number of platforms needed.",
          solution: `def findPlatform(arr, dep, n):
  arr.sort()
  dep.sort()
  plat_needed = result = 0
  i = j = 0
  while i < n and j < n:
    if arr[i] <= dep[j]:
      plat_needed += 1
      i += 1
    else:
      plat_needed -= 1
      j += 1
    result = max(result, plat_needed)
  return result`,
        },
        {
          id: "job-sequencing",
          title: "Job Sequencing Problem",
          content:
            "Given jobs with deadlines and profits, schedule jobs to maximize total profit.",
          solution: `def jobScheduling(jobs, n):
  jobs.sort(key=lambda x: x[2], reverse=True)
  max_deadline = max(job[1] for job in jobs)
  slots = [-1] * (max_deadline + 1)
  count = profit = 0
  for job in jobs:
    for j in range(job[1], 0, -1):
      if slots[j] == -1:
        slots[j] = job[0]
        count += 1
        profit += job[2]
        break
  return count, profit`,
        },
        {
          id: "candy",
          title: "Candy",
          content:
            "Each child must have at least one candy. Children with higher ratings get more than neighbors. Return the minimum candies needed.",
          solution: `def candy(ratings):
  n = len(ratings)
  candies = [1] * n
  for i in range(1, n):
    if ratings[i] > ratings[i - 1]:
      candies[i] = candies[i - 1] + 1
  for i in range(n - 2, -1, -1):
    if ratings[i] > ratings[i + 1]:
      candies[i] = max(candies[i], candies[i + 1] + 1)
  return sum(candies)`,
        },
        {
          id: "insert-interval",
          title: "Insert Interval",
          content: `Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).`,
          solution: `def insert(intervals, new_interval):
    res = []
    for i in range(len(intervals)):
        if new_interval[1] < intervals[i][0]:
            res.append(new_interval)
            return res + intervals[i:]
        elif new_interval[0] > intervals[i][1]:
            res.append(intervals[i])
        else:
            new_interval[0] = min(new_interval[0], intervals[i][0])
            new_interval[1] = max(new_interval[1], intervals[i][1])
    res.append(new_interval)
    return res`,
        },
        {
          id: "merge-intervals",
          title: "Merge Intervals",
          content: `Given a collection of intervals, merge all overlapping intervals.`,
          solution: `def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []
    for interval in intervals:
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            merged[-1][1] = max(merged[-1][1], interval[1])
    return merged`,
        },
        {
          id: "non-overlapping-intervals",
          title: "Non-overlapping Intervals",
          content: `Given a collection of intervals, find the minimum number of intervals to remove to make the rest of the intervals non-overlapping.`,
          solution: `def erase_overlap_intervals(intervals):
    intervals.sort(key=lambda x: x[1])
    end = float('-inf')
    count = 0
    for interval in intervals:
        if interval[0] >= end:
            end = interval[1]
        else:
            count += 1
    return count`,
        },
        {
          id: "sjf-scheduling",
          title: "Shortest Job First (SJF) Scheduling",
          content: `Given an array of processes with their burst times, implement the SJF scheduling algorithm (non-preemptive).`,
          solution: `def sjf_scheduling(burst_times):
    burst_times.sort()
    wait_time = 0
    total_wait = 0
    for i in range(1, len(burst_times)):
        wait_time += burst_times[i - 1]
        total_wait += wait_time
    avg_wait = total_wait / len(burst_times)
    return avg_wait`,
        },
        {
          id: "lru-page-replacement",
          title: "Least Recently Used (LRU) Page Replacement",
          content: `Given a sequence of pages and cache size, implement LRU page replacement algorithm.`,
          solution: `def lru(pages, capacity):
    from collections import OrderedDict
    cache = OrderedDict()
    page_faults = 0
    for page in pages:
        if page not in cache:
            page_faults += 1
            if len(cache) == capacity:
                cache.popitem(last=False)
        else:
            cache.move_to_end(page)
        cache[page] = True
    return page_faults`,
        },
      ],
    },
  },
];

export default steps;
