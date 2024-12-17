# JavaScript Null Handling

This repository demonstrates a common JavaScript bug related to null handling and provides a solution.

## Bug Description
The original code handles null values explicitly but neglects other falsy values like undefined. This might lead to unexpected behavior or errors when unexpected input is received.

## Solution
The solution expands the null check to include undefined values for better robustness.  It also provides a more descriptive error message for improved debugging.