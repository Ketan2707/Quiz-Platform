/**
 * All quiz questions stored in memory.
 * No database needed.
 * 5 subjects x 3 difficulties x 5 questions = 75 questions total
 */

const questions = [

  // ─────────────────────────────────────────
  // DSA - Easy
  // ─────────────────────────────────────────
  {
    id: 1, subject: "dsa", difficulty: "easy",
    question: "What is the time complexity of accessing an element in an array by index?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
    correctAnswer: "O(1)"
  },
  {
    id: 2, subject: "dsa", difficulty: "easy",
    question: "Which data structure follows the LIFO (Last In First Out) principle?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    correctAnswer: "Stack"
  },
  {
    id: 3, subject: "dsa", difficulty: "easy",
    question: "What is the maximum number of nodes at level 'l' in a binary tree?",
    options: ["2^l", "2^(l-1)", "l^2", "2l"],
    correctAnswer: "2^l"
  },
  {
    id: 4, subject: "dsa", difficulty: "easy",
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
    correctAnswer: "Merge Sort"
  },
  {
    id: 5, subject: "dsa", difficulty: "easy",
    question: "In a queue, elements are added at which end?",
    options: ["Front", "Middle", "Rear", "Any end"],
    correctAnswer: "Rear"
  },

  // DSA - Medium
  {
    id: 6, subject: "dsa", difficulty: "medium",
    question: "What is the time complexity of binary search on a sorted array of n elements?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: "O(log n)"
  },
  {
    id: 7, subject: "dsa", difficulty: "medium",
    question: "Which traversal of a Binary Search Tree gives elements in sorted order?",
    options: ["Pre-order", "Post-order", "In-order", "Level-order"],
    correctAnswer: "In-order"
  },
  {
    id: 8, subject: "dsa", difficulty: "medium",
    question: "What is the worst-case time complexity of Quick Sort?",
    options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"],
    correctAnswer: "O(n^2)"
  },
  {
    id: 9, subject: "dsa", difficulty: "medium",
    question: "A hash table has a load factor of 0.75. What does this mean?",
    options: ["75% of slots are empty", "75% of slots are filled", "Collision rate is 75%", "Resize happens at 75% capacity"],
    correctAnswer: "75% of slots are filled"
  },
  {
    id: 10, subject: "dsa", difficulty: "medium",
    question: "Which graph traversal algorithm uses a queue?",
    options: ["DFS", "BFS", "Dijkstra", "Prim's"],
    correctAnswer: "BFS"
  },

  // DSA - Hard
  {
    id: 11, subject: "dsa", difficulty: "hard",
    question: "What is the amortized time complexity of push and pop operations in a dynamic array?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    correctAnswer: "O(1)"
  },
  {
    id: 12, subject: "dsa", difficulty: "hard",
    question: "In Dijkstra's algorithm using a min-heap, what is the time complexity for a graph with V vertices and E edges?",
    options: ["O(V^2)", "O(E log V)", "O(V log E)", "O(E + V)"],
    correctAnswer: "O(E log V)"
  },
  {
    id: 13, subject: "dsa", difficulty: "hard",
    question: "Which of the following is NOT a self-balancing binary search tree?",
    options: ["AVL Tree", "Red-Black Tree", "B-Tree", "Binary Heap"],
    correctAnswer: "Binary Heap"
  },
  {
    id: 14, subject: "dsa", difficulty: "hard",
    question: "What does the 'P' in NP-complete stand for?",
    options: ["Polynomial", "Parallel", "Probabilistic", "Partial"],
    correctAnswer: "Polynomial"
  },
  {
    id: 15, subject: "dsa", difficulty: "hard",
    question: "In dynamic programming, what is memoization?",
    options: [
      "Storing results of subproblems to avoid recomputation",
      "Sorting elements before processing",
      "Dividing a problem into equal halves",
      "Using recursion without base cases"
    ],
    correctAnswer: "Storing results of subproblems to avoid recomputation"
  },

  // ─────────────────────────────────────────
  // NUMERICAL METHODS - Easy
  // ─────────────────────────────────────────
  {
    id: 16, subject: "numerical", difficulty: "easy",
    question: "Which method finds the root of f(x) = 0 by repeatedly halving an interval?",
    options: ["Newton-Raphson", "Bisection Method", "Secant Method", "Gauss Elimination"],
    correctAnswer: "Bisection Method"
  },
  {
    id: 17, subject: "numerical", difficulty: "easy",
    question: "What is the order of convergence of the Bisection Method?",
    options: ["Quadratic", "Cubic", "Linear", "Super-linear"],
    correctAnswer: "Linear"
  },
  {
    id: 18, subject: "numerical", difficulty: "easy",
    question: "In the Trapezoidal Rule, the area under a curve is approximated using:",
    options: ["Rectangles", "Trapezoids", "Parabolas", "Triangles"],
    correctAnswer: "Trapezoids"
  },
  {
    id: 19, subject: "numerical", difficulty: "easy",
    question: "What is the condition for the Bisection Method to work on [a, b]?",
    options: ["f(a) = f(b)", "f(a) * f(b) < 0", "f(a) > 0 and f(b) > 0", "f(a) + f(b) = 0"],
    correctAnswer: "f(a) * f(b) < 0"
  },
  {
    id: 20, subject: "numerical", difficulty: "easy",
    question: "Which interpolation method uses equally spaced data points?",
    options: ["Lagrange Interpolation", "Newton's Divided Difference", "Newton's Forward Difference", "Cubic Spline"],
    correctAnswer: "Newton's Forward Difference"
  },

  // Numerical - Medium
  {
    id: 21, subject: "numerical", difficulty: "medium",
    question: "The Newton-Raphson method has which order of convergence?",
    options: ["Linear", "Quadratic", "Cubic", "Logarithmic"],
    correctAnswer: "Quadratic"
  },
  {
    id: 22, subject: "numerical", difficulty: "medium",
    question: "Simpson's 1/3 rule requires the number of intervals to be:",
    options: ["Odd", "Even", "Prime", "Any positive integer"],
    correctAnswer: "Even"
  },
  {
    id: 23, subject: "numerical", difficulty: "medium",
    question: "In Gauss-Seidel method, each variable is updated:",
    options: [
      "After all variables are computed",
      "Using the latest available values",
      "Using values from the previous iteration only",
      "Randomly"
    ],
    correctAnswer: "Using the latest available values"
  },
  {
    id: 24, subject: "numerical", difficulty: "medium",
    question: "What is the error in the Trapezoidal Rule proportional to?",
    options: ["h", "h^2", "h^3", "h^4"],
    correctAnswer: "h^2"
  },
  {
    id: 25, subject: "numerical", difficulty: "medium",
    question: "Lagrange interpolation for n+1 data points produces a polynomial of degree at most:",
    options: ["n+1", "n", "n-1", "2n"],
    correctAnswer: "n"
  },

  // Numerical - Hard
  {
    id: 26, subject: "numerical", difficulty: "hard",
    question: "Which method for solving linear systems converts the matrix to upper triangular form?",
    options: ["Gauss-Seidel", "Jacobi Method", "Gaussian Elimination", "LU Decomposition"],
    correctAnswer: "Gaussian Elimination"
  },
  {
    id: 27, subject: "numerical", difficulty: "hard",
    question: "The Runge-Kutta 4th order method (RK4) has a local truncation error of order:",
    options: ["O(h^2)", "O(h^3)", "O(h^4)", "O(h^5)"],
    correctAnswer: "O(h^5)"
  },
  {
    id: 28, subject: "numerical", difficulty: "hard",
    question: "In numerical differentiation, the central difference formula for f'(x) has error of order:",
    options: ["O(h)", "O(h^2)", "O(h^3)", "O(h^4)"],
    correctAnswer: "O(h^2)"
  },
  {
    id: 29, subject: "numerical", difficulty: "hard",
    question: "Which of the following is an iterative method for solving linear equations?",
    options: ["Cramer's Rule", "Gaussian Elimination", "Gauss-Seidel Method", "LU Decomposition"],
    correctAnswer: "Gauss-Seidel Method"
  },
  {
    id: 30, subject: "numerical", difficulty: "hard",
    question: "The Secant Method requires how many initial guesses?",
    options: ["One", "Two", "Three", "None"],
    correctAnswer: "Two"
  },

  // ─────────────────────────────────────────
  // FULL STACK - Easy
  // ─────────────────────────────────────────
  {
    id: 31, subject: "fullstack", difficulty: "easy",
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    id: 32, subject: "fullstack", difficulty: "easy",
    question: "Which CSS property is used to change the text color?",
    options: ["font-color", "text-color", "color", "foreground"],
    correctAnswer: "color"
  },
  {
    id: 33, subject: "fullstack", difficulty: "easy",
    question: "What does REST stand for in REST API?",
    options: ["Remote Execution State Transfer", "Representational State Transfer", "Resource Endpoint State Transfer", "Reliable State Transfer"],
    correctAnswer: "Representational State Transfer"
  },
  {
    id: 34, subject: "fullstack", difficulty: "easy",
    question: "Which HTTP method is used to retrieve data from a server?",
    options: ["POST", "PUT", "DELETE", "GET"],
    correctAnswer: "GET"
  },
  {
    id: 35, subject: "fullstack", difficulty: "easy",
    question: "What is JSX in React?",
    options: [
      "A JavaScript library",
      "A syntax extension that looks like HTML in JavaScript",
      "A CSS framework",
      "A database query language"
    ],
    correctAnswer: "A syntax extension that looks like HTML in JavaScript"
  },

  // Full Stack - Medium
  {
    id: 36, subject: "fullstack", difficulty: "medium",
    question: "What is the purpose of the useEffect hook in React?",
    options: [
      "To manage component state",
      "To handle side effects like API calls and subscriptions",
      "To create reusable UI components",
      "To define CSS styles"
    ],
    correctAnswer: "To handle side effects like API calls and subscriptions"
  },
  {
    id: 37, subject: "fullstack", difficulty: "medium",
    question: "Which HTTP status code indicates a resource was successfully created?",
    options: ["200 OK", "201 Created", "204 No Content", "301 Moved Permanently"],
    correctAnswer: "201 Created"
  },
  {
    id: 38, subject: "fullstack", difficulty: "medium",
    question: "What is CORS?",
    options: [
      "A JavaScript framework",
      "Cross-Origin Resource Sharing — controls cross-domain requests",
      "A CSS layout system",
      "A database protocol"
    ],
    correctAnswer: "Cross-Origin Resource Sharing — controls cross-domain requests"
  },
  {
    id: 39, subject: "fullstack", difficulty: "medium",
    question: "In Node.js, what is the event loop responsible for?",
    options: [
      "Managing database connections",
      "Handling asynchronous operations without blocking",
      "Compiling JavaScript code",
      "Managing memory allocation"
    ],
    correctAnswer: "Handling asynchronous operations without blocking"
  },
  {
    id: 40, subject: "fullstack", difficulty: "medium",
    question: "What does the virtual DOM in React do?",
    options: [
      "Stores data on the server",
      "Renders HTML directly to the browser",
      "Keeps a lightweight copy of the DOM to optimize updates",
      "Replaces the real DOM entirely"
    ],
    correctAnswer: "Keeps a lightweight copy of the DOM to optimize updates"
  },

  // Full Stack - Hard
  {
    id: 41, subject: "fullstack", difficulty: "hard",
    question: "What is the difference between authentication and authorization?",
    options: [
      "They are the same thing",
      "Authentication verifies identity; authorization determines permissions",
      "Authorization verifies identity; authentication determines permissions",
      "Authentication is for APIs; authorization is for UIs"
    ],
    correctAnswer: "Authentication verifies identity; authorization determines permissions"
  },
  {
    id: 42, subject: "fullstack", difficulty: "hard",
    question: "In a microservices architecture, what is an API Gateway?",
    options: [
      "A database for APIs",
      "A single entry point that routes requests to appropriate services",
      "A load balancer only",
      "A caching layer"
    ],
    correctAnswer: "A single entry point that routes requests to appropriate services"
  },
  {
    id: 43, subject: "fullstack", difficulty: "hard",
    question: "What is the purpose of JWT (JSON Web Token)?",
    options: [
      "To encrypt database passwords",
      "To securely transmit information between parties as a signed token",
      "To compress JSON data",
      "To validate HTML forms"
    ],
    correctAnswer: "To securely transmit information between parties as a signed token"
  },
  {
    id: 44, subject: "fullstack", difficulty: "hard",
    question: "Which React hooks help avoid unnecessary re-renders of a child component?",
    options: ["useEffect", "useCallback and useMemo", "useState", "useRef"],
    correctAnswer: "useCallback and useMemo"
  },
  {
    id: 45, subject: "fullstack", difficulty: "hard",
    question: "What is the CAP theorem in distributed systems?",
    options: [
      "A theorem about CPU, API, and Protocol",
      "A system can guarantee only 2 of: Consistency, Availability, Partition tolerance",
      "A caching strategy",
      "A security model"
    ],
    correctAnswer: "A system can guarantee only 2 of: Consistency, Availability, Partition tolerance"
  },

  // ─────────────────────────────────────────
  // DBMS - Easy
  // ─────────────────────────────────────────
  {
    id: 46, subject: "dbms", difficulty: "easy",
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language", "Standard Query Logic", "Sequential Query Language"],
    correctAnswer: "Structured Query Language"
  },
  {
    id: 47, subject: "dbms", difficulty: "easy",
    question: "Which SQL command is used to retrieve data from a table?",
    options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    correctAnswer: "SELECT"
  },
  {
    id: 48, subject: "dbms", difficulty: "easy",
    question: "What is a primary key in a database?",
    options: [
      "A key used for encryption",
      "A unique identifier for each record in a table",
      "The first column of a table",
      "A foreign key reference"
    ],
    correctAnswer: "A unique identifier for each record in a table"
  },
  {
    id: 49, subject: "dbms", difficulty: "easy",
    question: "Which normal form eliminates partial dependencies?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    correctAnswer: "2NF"
  },
  {
    id: 50, subject: "dbms", difficulty: "easy",
    question: "What is a foreign key?",
    options: [
      "A key that encrypts data",
      "A column that references the primary key of another table",
      "A key with no duplicates",
      "The last column in a table"
    ],
    correctAnswer: "A column that references the primary key of another table"
  },

  // DBMS - Medium
  {
    id: 51, subject: "dbms", difficulty: "medium",
    question: "What is the difference between DELETE and TRUNCATE in SQL?",
    options: [
      "They are identical",
      "DELETE removes specific rows and can be rolled back; TRUNCATE removes all rows and cannot be rolled back",
      "TRUNCATE removes specific rows; DELETE removes all rows",
      "DELETE is faster than TRUNCATE"
    ],
    correctAnswer: "DELETE removes specific rows and can be rolled back; TRUNCATE removes all rows and cannot be rolled back"
  },
  {
    id: 52, subject: "dbms", difficulty: "medium",
    question: "What does ACID stand for in database transactions?",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Availability, Consistency, Integrity, Durability",
      "Atomicity, Concurrency, Isolation, Distribution",
      "Accuracy, Consistency, Isolation, Durability"
    ],
    correctAnswer: "Atomicity, Consistency, Isolation, Durability"
  },
  {
    id: 53, subject: "dbms", difficulty: "medium",
    question: "Which JOIN returns all rows from both tables, with NULLs where there is no match?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    correctAnswer: "FULL OUTER JOIN"
  },
  {
    id: 54, subject: "dbms", difficulty: "medium",
    question: "What is an index in a database?",
    options: [
      "A backup of the database",
      "A data structure that speeds up data retrieval",
      "A constraint on a column",
      "A type of join"
    ],
    correctAnswer: "A data structure that speeds up data retrieval"
  },
  {
    id: 55, subject: "dbms", difficulty: "medium",
    question: "What is a deadlock in DBMS?",
    options: [
      "A slow query",
      "A situation where two transactions wait for each other to release locks",
      "A corrupted database",
      "A failed transaction"
    ],
    correctAnswer: "A situation where two transactions wait for each other to release locks"
  },

  // DBMS - Hard
  {
    id: 56, subject: "dbms", difficulty: "hard",
    question: "What is the difference between 3NF and BCNF?",
    options: [
      "They are the same",
      "BCNF is stricter — every determinant must be a candidate key, unlike 3NF",
      "3NF is stricter than BCNF",
      "BCNF allows partial dependencies"
    ],
    correctAnswer: "BCNF is stricter — every determinant must be a candidate key, unlike 3NF"
  },
  {
    id: 57, subject: "dbms", difficulty: "hard",
    question: "In a B+ Tree index, where are the actual data records stored?",
    options: ["In internal nodes", "In the root node", "In leaf nodes", "Distributed across all nodes"],
    correctAnswer: "In leaf nodes"
  },
  {
    id: 58, subject: "dbms", difficulty: "hard",
    question: "What is a phantom read in database transactions?",
    options: [
      "Reading a deleted row",
      "A transaction reads rows that were inserted by another transaction after the first read",
      "Reading corrupted data",
      "Reading the same row twice"
    ],
    correctAnswer: "A transaction reads rows that were inserted by another transaction after the first read"
  },
  {
    id: 59, subject: "dbms", difficulty: "hard",
    question: "Which isolation level prevents dirty reads, non-repeatable reads, and phantom reads?",
    options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
    correctAnswer: "Serializable"
  },
  {
    id: 60, subject: "dbms", difficulty: "hard",
    question: "What is the purpose of the two-phase locking (2PL) protocol?",
    options: [
      "To speed up queries",
      "To ensure serializability of transactions",
      "To reduce storage space",
      "To handle deadlocks"
    ],
    correctAnswer: "To ensure serializability of transactions"
  },

  // ─────────────────────────────────────────
  // COMPUTER NETWORKS - Easy
  // ─────────────────────────────────────────
  {
    id: 61, subject: "cn", difficulty: "easy",
    question: "How many layers are in the OSI model?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "7"
  },
  {
    id: 62, subject: "cn", difficulty: "easy",
    question: "What does IP stand for?",
    options: ["Internet Protocol", "Internal Process", "Integrated Protocol", "Internet Processor"],
    correctAnswer: "Internet Protocol"
  },
  {
    id: 63, subject: "cn", difficulty: "easy",
    question: "Which layer of the OSI model is responsible for routing?",
    options: ["Data Link Layer", "Transport Layer", "Network Layer", "Session Layer"],
    correctAnswer: "Network Layer"
  },
  {
    id: 64, subject: "cn", difficulty: "easy",
    question: "What is the default port number for HTTP?",
    options: ["21", "22", "80", "443"],
    correctAnswer: "80"
  },
  {
    id: 65, subject: "cn", difficulty: "easy",
    question: "What does DNS stand for?",
    options: ["Data Network System", "Domain Name System", "Dynamic Network Service", "Distributed Name Server"],
    correctAnswer: "Domain Name System"
  },

  // CN - Medium
  {
    id: 66, subject: "cn", difficulty: "medium",
    question: "What is the difference between TCP and UDP?",
    options: [
      "TCP is faster; UDP is reliable",
      "TCP is connection-oriented and reliable; UDP is connectionless and faster but unreliable",
      "They are the same protocol",
      "UDP is used for web browsing; TCP is for video streaming"
    ],
    correctAnswer: "TCP is connection-oriented and reliable; UDP is connectionless and faster but unreliable"
  },
  {
    id: 67, subject: "cn", difficulty: "medium",
    question: "What is subnetting?",
    options: [
      "Connecting two networks",
      "Dividing a network into smaller sub-networks",
      "Encrypting network traffic",
      "Assigning MAC addresses"
    ],
    correctAnswer: "Dividing a network into smaller sub-networks"
  },
  {
    id: 68, subject: "cn", difficulty: "medium",
    question: "Which protocol is used to assign IP addresses automatically?",
    options: ["DNS", "FTP", "DHCP", "ARP"],
    correctAnswer: "DHCP"
  },
  {
    id: 69, subject: "cn", difficulty: "medium",
    question: "What is the purpose of ARP (Address Resolution Protocol)?",
    options: [
      "To resolve domain names to IP addresses",
      "To map IP addresses to MAC addresses",
      "To route packets between networks",
      "To encrypt data in transit"
    ],
    correctAnswer: "To map IP addresses to MAC addresses"
  },
  {
    id: 70, subject: "cn", difficulty: "medium",
    question: "In the TCP three-way handshake, what is the correct sequence?",
    options: ["SYN, ACK, SYN-ACK", "ACK, SYN, SYN-ACK", "SYN, SYN-ACK, ACK", "SYN-ACK, SYN, ACK"],
    correctAnswer: "SYN, SYN-ACK, ACK"
  },

  // CN - Hard
  {
    id: 71, subject: "cn", difficulty: "hard",
    question: "What is the difference between a hub, switch, and router?",
    options: [
      "They all do the same thing",
      "Hub broadcasts to all; switch forwards to specific MAC; router routes between networks using IP",
      "Switch broadcasts to all; hub forwards to specific MAC; router uses DNS",
      "Router and switch are the same; hub is different"
    ],
    correctAnswer: "Hub broadcasts to all; switch forwards to specific MAC; router routes between networks using IP"
  },
  {
    id: 72, subject: "cn", difficulty: "hard",
    question: "What is BGP (Border Gateway Protocol) used for?",
    options: [
      "Routing within a single network",
      "Routing between autonomous systems on the internet",
      "Assigning IP addresses",
      "Encrypting network traffic"
    ],
    correctAnswer: "Routing between autonomous systems on the internet"
  },
  {
    id: 73, subject: "cn", difficulty: "hard",
    question: "What is the purpose of HTTPS compared to HTTP?",
    options: [
      "HTTPS is faster",
      "HTTPS encrypts data using TLS/SSL for secure communication",
      "HTTPS uses a different port than 443",
      "HTTPS only works on local networks"
    ],
    correctAnswer: "HTTPS encrypts data using TLS/SSL for secure communication"
  },
  {
    id: 74, subject: "cn", difficulty: "hard",
    question: "What is a VLAN (Virtual LAN)?",
    options: [
      "A physical network segment",
      "A logical grouping of devices on a network regardless of physical location",
      "A type of wireless network",
      "A VPN protocol"
    ],
    correctAnswer: "A logical grouping of devices on a network regardless of physical location"
  },
  {
    id: 75, subject: "cn", difficulty: "hard",
    question: "In IPv4, what is the size of the address space?",
    options: ["2^16 addresses", "2^32 addresses", "2^64 addresses", "2^128 addresses"],
    correctAnswer: "2^32 addresses"
  }
];

module.exports = questions;
