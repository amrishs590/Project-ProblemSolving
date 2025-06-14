const steps = [
  {
    stepTitle: "Step 1: Arrays",
    sections: {
      "Lec 1: Easy": [
        {
          id: "largest-element",
          title: "Largest Element in an Array",
          content: "You are given an array. Find the largest element in it.",
          solution: `function findLargest(arr) {
  return Math.max(...arr);
}`,
        },
        {
          id: "second-largest",
          title: "Second Largest Element in an Array without sorting",
          content:
            "Find the second largest element in an array without using sort.",
          solution: `function secondLargest(arr) {
  let max = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num !== max) {
      second = num;
    }
  }
  return second;
}`,
        },
        {
          id: "check-sorted",
          title: "Check if the array is sorted",
          content:
            "Return true if the array is sorted in non-decreasing order.",
          solution: `function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}`,
        },
        {
          id: "remove-duplicates",
          title: "Remove duplicates from Sorted array",
          content:
            "Remove duplicates from a sorted array in-place and return the length of the modified array.",
          solution: `function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}`,
        },
        {
          id: "left-rotate-one",
          title: "Left Rotate an array by one place",
          content: "Rotate an array to the left by one position.",
          solution: `function rotateLeftByOne(arr) {
  if (arr.length === 0) return arr;
  let first = arr.shift();
  arr.push(first);
  return arr;
}`,
        },
      ],
      "Lec 2: Medium": [
        {
          id: "two-sum",
          title: "2Sum Problem",
          content:
            "Given an array and a target, return indices of two numbers that add up to target.",
          solution: `function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(arr[i], i);
  }
}`,
        },
        {
          id: "sort-0s-1s-2s",
          title: "Sort an array of 0's 1's and 2's",
          content:
            "Sort an array containing only 0s, 1s, and 2s without using sort.",
          solution: `function sortColors(arr) {
  let low = 0, mid = 0, high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++; mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
}`,
        },
        {
          id: "majority-nby2",
          title: "Majority Element (>n/2 times)",
          content:
            "Find the element that appears more than n/2 times if it exists.",
          solution: `function majorityElement(arr) {
  let count = 0, candidate = null;
  for (let num of arr) {
    if (count === 0) candidate = num;
    count += (num === candidate) ? 1 : -1;
  }
  return arr.filter(x => x === candidate).length > arr.length / 2 ? candidate : -1;
}`,
        },
        {
          id: "kadane",
          title: "Kadane's Algorithm, maximum subarray sum",
          content: "Find the contiguous subarray with the maximum sum.",
          solution: `function maxSubArray(arr) {
  let maxSoFar = arr[0], maxEndingHere = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}`,
        },
        {
          id: "print-max-subarray",
          title: "Print subarray with maximum subarray sum",
          content:
            "Print the actual subarray (not just the sum) with the maximum sum.",
          solution: `function printMaxSubarray(arr) {
  let maxSum = arr[0], currSum = arr[0];
  let start = 0, end = 0, tempStart = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currSum + arr[i]) {
      currSum = arr[i];
      tempStart = i;
    } else {
      currSum += arr[i];
    }
    if (currSum > maxSum) {
      maxSum = currSum;
      start = tempStart;
      end = i;
    }
  }
  return arr.slice(start, end + 1);
}`,
        },
      ],
      "Lec 3: Hard": [
        {
          id: "pascals-triangle",
          title: "Pascal's Triangle",
          content: "Generate Pascal's Triangle up to n rows.",
          solution: `function generate(numRows) {
  const triangle = [];
  for (let i = 0; i < numRows; i++) {
    triangle[i] = [];
    triangle[i][0] = triangle[i][i] = 1;
    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }
  return triangle;
}`,
        },
        {
          id: "majority-nby3",
          title: "Majority Element (n/3 times)",
          content: "Find all elements that appear more than ⌊ n/3 ⌋ times.",
          solution: `function majorityElement(arr) {
  let count1 = 0, count2 = 0, candidate1 = null, candidate2 = null;
  for (let num of arr) {
    if (num === candidate1) count1++;
    else if (num === candidate2) count2++;
    else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }
  return [candidate1, candidate2].filter(
    candidate => arr.filter(n => n === candidate).length > arr.length / 3
  );
}`,
        },
        {
          id: "three-sum",
          title: "3-Sum Problem",
          content:
            "Find all unique triplets in the array which gives the sum of zero.",
          solution: `function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++; right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return res;
}`,
        },
        {
          id: "four-sum",
          title: "4-Sum Problem",
          content: "Find all unique quadruplets that sum up to a given target.",
          solution: `function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  const res = [];
  const n = nums.length;
  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1, right = n - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          left++; right--;
        } else if (sum < target) left++;
        else right--;
      }
    }
  }
  return res;
}`,
        },
        {
          id: "largest-zero-subarray",
          title: "Largest Subarray with 0 Sum",
          content: "Find the length of the largest subarray with 0 sum.",
          solution: `function maxLenZeroSumSubarray(arr) {
  const map = new Map();
  let sum = 0, maxLen = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0) maxLen = i + 1;
    else if (map.has(sum)) {
      maxLen = Math.max(maxLen, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return maxLen;
}`,
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
      ],
      "Lec 3: Problems on Linked List": [
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
      ],
    },
  },
];

export default steps;
