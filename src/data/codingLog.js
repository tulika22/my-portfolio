// Only include days where you have info (done or missed)
export const rawCodingLog = [
  {
    "dayIndex": 0,
    "status": "done",
    "problems": [
        { "title": "Two Sum", "link": "https://leetcode.com/problems/two-sum/" },
        { "title": "Contains Duplicate", "link": "https://leetcode.com/problems/contains-duplicate/" },
        { "title": "Valid Anagram", "link": "https://leetcode.com/problems/valid-anagram/" },
        { "title": "Group Anagrams", "link": "https://leetcode.com/problems/group-anagrams/" },
        { "title": "Top K Frequent Elements", "link": "https://leetcode.com/problems/top-k-frequent-elements/" },
        { "title": "Encode and Decode Strings", "link": "https://leetcode.com/problems/encode-and-decode-strings/" },
        { "title": "Product of Array Except Self", "link": "https://leetcode.com/problems/product-of-array-except-self/" },
        { "title": "Valid Sudoku", "link": "https://leetcode.com/problems/valid-sudoku/" },
        { "title": "Longest Consecutive Sequence", "link": "https://leetcode.com/problems/longest-consecutive-sequence/" }
        ]
    },
  {
  "dayIndex": 1,
  "status": "pending",
  "problems": [
    { "title": "Valid Palindrome", "link": "https://leetcode.com/problems/valid-palindrome/" },
    { "title": "Two Sum II - Input Array Is Sorted", "link": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
    { "title": "3Sum", "link": "https://leetcode.com/problems/3sum/" },
    { "title": "Container With Most Water", "link": "https://leetcode.com/problems/container-with-most-water/" },
    { "title": "Trapping Rain Water", "link": "https://leetcode.com/problems/trapping-rain-water/" }
  ]
}
  
  // Add more days you want to track here...
];

// Generate full 30-day (or dynamic N-day) log with missing days set to pending
export function generateFullCodingLog(startDateStr, totalDays, rawLogs) {
  const rawLogMap = new Map();
  rawLogs.forEach((log) => rawLogMap.set(log.dayIndex, log));

  const startDate = new Date(startDateStr);
  const fullLog = [];

  for (let i = 0; i < totalDays; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    if (rawLogMap.has(i)) {
      const raw = rawLogMap.get(i);
      fullLog.push({
        date: date.toISOString().split('T')[0],
        status: raw.status,
        problems: raw.problems,
      });
    } else {
      fullLog.push({
        date: date.toISOString().split('T')[0],
        status: 'pending',
        problems: [],
      });
    }
  }

  return fullLog;
}
