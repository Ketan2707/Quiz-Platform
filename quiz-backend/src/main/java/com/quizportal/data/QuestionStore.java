package com.quizportal.data;

import com.quizportal.model.Question;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * In-memory question store.
 * All questions are defined here — no database required.
 * Each subject has 5 easy + 5 medium + 5 hard = 15 questions.
 */
@Component
public class QuestionStore {

    private final List<Question> allQuestions = new ArrayList<>();
    private long idCounter = 1;

    public QuestionStore() {
        loadDSA();
        loadNumerical();
        loadFullStack();
        loadDBMS();
        loadComputerNetworks();
    }

    private Question q(String subject, String difficulty, String question,
                       String opt1, String opt2, String opt3, String opt4,
                       String correct) {
        return new Question(idCounter++, subject, difficulty, question,
                Arrays.asList(opt1, opt2, opt3, opt4), correct);
    }

    // ===================== DSA =====================
    private void loadDSA() {
        // Easy
        allQuestions.add(q("dsa", "easy",
                "What is the time complexity of accessing an element in an array by index?",
                "O(n)", "O(log n)", "O(1)", "O(n^2)", "O(1)"));

        allQuestions.add(q("dsa", "easy",
                "Which data structure follows the LIFO (Last In First Out) principle?",
                "Queue", "Stack", "Linked List", "Tree", "Stack"));

        allQuestions.add(q("dsa", "easy",
                "What is the maximum number of nodes at level 'l' in a binary tree?",
                "2^l", "2^(l-1)", "l^2", "2l", "2^l"));

        allQuestions.add(q("dsa", "easy",
                "Which sorting algorithm has the best average-case time complexity?",
                "Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort", "Merge Sort"));

        allQuestions.add(q("dsa", "easy",
                "In a queue, elements are added at which end?",
                "Front", "Middle", "Rear", "Any end", "Rear"));

        // Medium
        allQuestions.add(q("dsa", "medium",
                "What is the time complexity of binary search on a sorted array of n elements?",
                "O(n)", "O(log n)", "O(n log n)", "O(1)", "O(log n)"));

        allQuestions.add(q("dsa", "medium",
                "Which traversal of a Binary Search Tree gives elements in sorted order?",
                "Pre-order", "Post-order", "In-order", "Level-order", "In-order"));

        allQuestions.add(q("dsa", "medium",
                "What is the worst-case time complexity of Quick Sort?",
                "O(n log n)", "O(n)", "O(n^2)", "O(log n)", "O(n^2)"));

        allQuestions.add(q("dsa", "medium",
                "A hash table has a load factor of 0.75. What does this mean?",
                "75% of slots are empty", "75% of slots are filled", "Collision rate is 75%", "Resize happens at 75% capacity", "75% of slots are filled"));

        allQuestions.add(q("dsa", "medium",
                "Which graph traversal algorithm uses a queue?",
                "DFS", "BFS", "Dijkstra", "Prim's", "BFS"));

        // Hard
        allQuestions.add(q("dsa", "hard",
                "What is the amortized time complexity of push and pop operations in a dynamic array?",
                "O(n)", "O(log n)", "O(1)", "O(n log n)", "O(1)"));

        allQuestions.add(q("dsa", "hard",
                "In Dijkstra's algorithm using a min-heap, what is the time complexity for a graph with V vertices and E edges?",
                "O(V^2)", "O(E log V)", "O(V log E)", "O(E + V)", "O(E log V)"));

        allQuestions.add(q("dsa", "hard",
                "Which of the following is NOT a self-balancing binary search tree?",
                "AVL Tree", "Red-Black Tree", "B-Tree", "Binary Heap", "Binary Heap"));

        allQuestions.add(q("dsa", "hard",
                "What does the 'P' in NP-complete stand for?",
                "Polynomial", "Parallel", "Probabilistic", "Partial", "Polynomial"));

        allQuestions.add(q("dsa", "hard",
                "In dynamic programming, what is memoization?",
                "Storing results of subproblems to avoid recomputation",
                "Sorting elements before processing",
                "Dividing a problem into equal halves",
                "Using recursion without base cases",
                "Storing results of subproblems to avoid recomputation"));
    }

    // ===================== NUMERICAL METHODS =====================
    private void loadNumerical() {
        // Easy
        allQuestions.add(q("numerical", "easy",
                "Which method finds the root of f(x) = 0 by repeatedly halving an interval?",
                "Newton-Raphson", "Bisection Method", "Secant Method", "Gauss Elimination", "Bisection Method"));

        allQuestions.add(q("numerical", "easy",
                "What is the order of convergence of the Bisection Method?",
                "Quadratic", "Cubic", "Linear", "Super-linear", "Linear"));

        allQuestions.add(q("numerical", "easy",
                "In the Trapezoidal Rule, the area under a curve is approximated using:",
                "Rectangles", "Trapezoids", "Parabolas", "Triangles", "Trapezoids"));

        allQuestions.add(q("numerical", "easy",
                "What is the condition for the Bisection Method to work on [a, b]?",
                "f(a) = f(b)", "f(a) * f(b) < 0", "f(a) > 0 and f(b) > 0", "f(a) + f(b) = 0", "f(a) * f(b) < 0"));

        allQuestions.add(q("numerical", "easy",
                "Which interpolation method uses equally spaced data points?",
                "Lagrange Interpolation", "Newton's Divided Difference", "Newton's Forward Difference", "Cubic Spline", "Newton's Forward Difference"));

        // Medium
        allQuestions.add(q("numerical", "medium",
                "The Newton-Raphson method has which order of convergence?",
                "Linear", "Quadratic", "Cubic", "Logarithmic", "Quadratic"));

        allQuestions.add(q("numerical", "medium",
                "Simpson's 1/3 rule requires the number of intervals to be:",
                "Odd", "Even", "Prime", "Any positive integer", "Even"));

        allQuestions.add(q("numerical", "medium",
                "In Gauss-Seidel method, each variable is updated:",
                "After all variables are computed", "Using the latest available values", "Using values from the previous iteration only", "Randomly", "Using the latest available values"));

        allQuestions.add(q("numerical", "medium",
                "What is the error in the Trapezoidal Rule proportional to?",
                "h", "h^2", "h^3", "h^4", "h^2"));

        allQuestions.add(q("numerical", "medium",
                "Lagrange interpolation for n+1 data points produces a polynomial of degree at most:",
                "n+1", "n", "n-1", "2n", "n"));

        // Hard
        allQuestions.add(q("numerical", "hard",
                "Which method for solving linear systems converts the matrix to upper triangular form?",
                "Gauss-Seidel", "Jacobi Method", "Gaussian Elimination", "LU Decomposition", "Gaussian Elimination"));

        allQuestions.add(q("numerical", "hard",
                "The Runge-Kutta 4th order method (RK4) has a local truncation error of order:",
                "O(h^2)", "O(h^3)", "O(h^4)", "O(h^5)", "O(h^5)"));

        allQuestions.add(q("numerical", "hard",
                "In numerical differentiation, the central difference formula for f'(x) has error of order:",
                "O(h)", "O(h^2)", "O(h^3)", "O(h^4)", "O(h^2)"));

        allQuestions.add(q("numerical", "hard",
                "Which of the following is an iterative method for solving linear equations?",
                "Cramer's Rule", "Gaussian Elimination", "Gauss-Seidel Method", "LU Decomposition", "Gauss-Seidel Method"));

        allQuestions.add(q("numerical", "hard",
                "The Secant Method requires how many initial guesses?",
                "One", "Two", "Three", "None", "Two"));
    }

    // ===================== FULL STACK =====================
    private void loadFullStack() {
        // Easy
        allQuestions.add(q("fullstack", "easy",
                "What does HTML stand for?",
                "Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language"));

        allQuestions.add(q("fullstack", "easy",
                "Which CSS property is used to change the text color?",
                "font-color", "text-color", "color", "foreground", "color"));

        allQuestions.add(q("fullstack", "easy",
                "What does REST stand for in REST API?",
                "Remote Execution State Transfer", "Representational State Transfer", "Resource Endpoint State Transfer", "Reliable State Transfer", "Representational State Transfer"));

        allQuestions.add(q("fullstack", "easy",
                "Which HTTP method is used to retrieve data from a server?",
                "POST", "PUT", "DELETE", "GET", "GET"));

        allQuestions.add(q("fullstack", "easy",
                "What is JSX in React?",
                "A JavaScript library", "A syntax extension that looks like HTML in JavaScript", "A CSS framework", "A database query language", "A syntax extension that looks like HTML in JavaScript"));

        // Medium
        allQuestions.add(q("fullstack", "medium",
                "What is the purpose of the useEffect hook in React?",
                "To manage component state", "To handle side effects like API calls and subscriptions", "To create reusable UI components", "To define CSS styles", "To handle side effects like API calls and subscriptions"));

        allQuestions.add(q("fullstack", "medium",
                "Which HTTP status code indicates a resource was successfully created?",
                "200 OK", "201 Created", "204 No Content", "301 Moved Permanently", "201 Created"));

        allQuestions.add(q("fullstack", "medium",
                "What is CORS?",
                "A JavaScript framework", "Cross-Origin Resource Sharing — controls cross-domain requests", "A CSS layout system", "A database protocol", "Cross-Origin Resource Sharing — controls cross-domain requests"));

        allQuestions.add(q("fullstack", "medium",
                "In Node.js, what is the event loop responsible for?",
                "Managing database connections", "Handling asynchronous operations without blocking", "Compiling JavaScript code", "Managing memory allocation", "Handling asynchronous operations without blocking"));

        allQuestions.add(q("fullstack", "medium",
                "What does the 'virtual DOM' in React do?",
                "Stores data on the server", "Renders HTML directly to the browser", "Keeps a lightweight copy of the DOM to optimize updates", "Replaces the real DOM entirely", "Keeps a lightweight copy of the DOM to optimize updates"));

        // Hard
        allQuestions.add(q("fullstack", "hard",
                "What is the difference between authentication and authorization?",
                "They are the same thing", "Authentication verifies identity; authorization determines permissions", "Authorization verifies identity; authentication determines permissions", "Authentication is for APIs; authorization is for UIs", "Authentication verifies identity; authorization determines permissions"));

        allQuestions.add(q("fullstack", "hard",
                "In a microservices architecture, what is an API Gateway?",
                "A database for APIs", "A single entry point that routes requests to appropriate services", "A load balancer only", "A caching layer", "A single entry point that routes requests to appropriate services"));

        allQuestions.add(q("fullstack", "hard",
                "What is the purpose of JWT (JSON Web Token)?",
                "To encrypt database passwords", "To securely transmit information between parties as a signed token", "To compress JSON data", "To validate HTML forms", "To securely transmit information between parties as a signed token"));

        allQuestions.add(q("fullstack", "hard",
                "Which React hook should you use to avoid unnecessary re-renders of a child component?",
                "useEffect", "useCallback and useMemo", "useState", "useRef", "useCallback and useMemo"));

        allQuestions.add(q("fullstack", "hard",
                "What is the CAP theorem in distributed systems?",
                "A theorem about CPU, API, and Protocol", "A system can guarantee only 2 of: Consistency, Availability, Partition tolerance", "A caching strategy", "A security model", "A system can guarantee only 2 of: Consistency, Availability, Partition tolerance"));
    }

    // ===================== DBMS =====================
    private void loadDBMS() {
        // Easy
        allQuestions.add(q("dbms", "easy",
                "What does SQL stand for?",
                "Structured Query Language", "Simple Query Language", "Standard Query Logic", "Sequential Query Language", "Structured Query Language"));

        allQuestions.add(q("dbms", "easy",
                "Which SQL command is used to retrieve data from a table?",
                "INSERT", "UPDATE", "SELECT", "DELETE", "SELECT"));

        allQuestions.add(q("dbms", "easy",
                "What is a primary key in a database?",
                "A key used for encryption", "A unique identifier for each record in a table", "The first column of a table", "A foreign key reference", "A unique identifier for each record in a table"));

        allQuestions.add(q("dbms", "easy",
                "Which normal form eliminates partial dependencies?",
                "1NF", "2NF", "3NF", "BCNF", "2NF"));

        allQuestions.add(q("dbms", "easy",
                "What is a foreign key?",
                "A key that encrypts data", "A column that references the primary key of another table", "A key with no duplicates", "The last column in a table", "A column that references the primary key of another table"));

        // Medium
        allQuestions.add(q("dbms", "medium",
                "What is the difference between DELETE and TRUNCATE in SQL?",
                "They are identical", "DELETE removes specific rows and can be rolled back; TRUNCATE removes all rows and cannot be rolled back", "TRUNCATE removes specific rows; DELETE removes all rows", "DELETE is faster than TRUNCATE", "DELETE removes specific rows and can be rolled back; TRUNCATE removes all rows and cannot be rolled back"));

        allQuestions.add(q("dbms", "medium",
                "What does ACID stand for in database transactions?",
                "Atomicity, Consistency, Isolation, Durability", "Availability, Consistency, Integrity, Durability", "Atomicity, Concurrency, Isolation, Distribution", "Accuracy, Consistency, Isolation, Durability", "Atomicity, Consistency, Isolation, Durability"));

        allQuestions.add(q("dbms", "medium",
                "Which JOIN returns all rows from both tables, with NULLs where there is no match?",
                "INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "FULL OUTER JOIN"));

        allQuestions.add(q("dbms", "medium",
                "What is an index in a database?",
                "A backup of the database", "A data structure that speeds up data retrieval", "A constraint on a column", "A type of join", "A data structure that speeds up data retrieval"));

        allQuestions.add(q("dbms", "medium",
                "What is a deadlock in DBMS?",
                "A slow query", "A situation where two transactions wait for each other to release locks", "A corrupted database", "A failed transaction", "A situation where two transactions wait for each other to release locks"));

        // Hard
        allQuestions.add(q("dbms", "hard",
                "What is the difference between 3NF and BCNF?",
                "They are the same", "BCNF is stricter — every determinant must be a candidate key, unlike 3NF", "3NF is stricter than BCNF", "BCNF allows partial dependencies", "BCNF is stricter — every determinant must be a candidate key, unlike 3NF"));

        allQuestions.add(q("dbms", "hard",
                "In a B+ Tree index, where are the actual data records stored?",
                "In internal nodes", "In the root node", "In leaf nodes", "Distributed across all nodes", "In leaf nodes"));

        allQuestions.add(q("dbms", "hard",
                "What is a phantom read in database transactions?",
                "Reading a deleted row", "A transaction reads rows that were inserted by another transaction after the first read", "Reading corrupted data", "Reading the same row twice", "A transaction reads rows that were inserted by another transaction after the first read"));

        allQuestions.add(q("dbms", "hard",
                "Which isolation level prevents dirty reads, non-repeatable reads, and phantom reads?",
                "Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable", "Serializable"));

        allQuestions.add(q("dbms", "hard",
                "What is the purpose of the two-phase locking (2PL) protocol?",
                "To speed up queries", "To ensure serializability of transactions", "To reduce storage space", "To handle deadlocks", "To ensure serializability of transactions"));
    }

    // ===================== COMPUTER NETWORKS =====================
    private void loadComputerNetworks() {
        // Easy
        allQuestions.add(q("cn", "easy",
                "How many layers are in the OSI model?",
                "4", "5", "6", "7", "7"));

        allQuestions.add(q("cn", "easy",
                "What does IP stand for?",
                "Internet Protocol", "Internal Process", "Integrated Protocol", "Internet Processor", "Internet Protocol"));

        allQuestions.add(q("cn", "easy",
                "Which layer of the OSI model is responsible for routing?",
                "Data Link Layer", "Transport Layer", "Network Layer", "Session Layer", "Network Layer"));

        allQuestions.add(q("cn", "easy",
                "What is the default port number for HTTP?",
                "21", "22", "80", "443", "80"));

        allQuestions.add(q("cn", "easy",
                "What does DNS stand for?",
                "Data Network System", "Domain Name System", "Dynamic Network Service", "Distributed Name Server", "Domain Name System"));

        // Medium
        allQuestions.add(q("cn", "medium",
                "What is the difference between TCP and UDP?",
                "TCP is faster; UDP is reliable", "TCP is connection-oriented and reliable; UDP is connectionless and faster but unreliable", "They are the same protocol", "UDP is used for web browsing; TCP is for video streaming", "TCP is connection-oriented and reliable; UDP is connectionless and faster but unreliable"));

        allQuestions.add(q("cn", "medium",
                "What is subnetting?",
                "Connecting two networks", "Dividing a network into smaller sub-networks", "Encrypting network traffic", "Assigning MAC addresses", "Dividing a network into smaller sub-networks"));

        allQuestions.add(q("cn", "medium",
                "Which protocol is used to assign IP addresses automatically?",
                "DNS", "FTP", "DHCP", "ARP", "DHCP"));

        allQuestions.add(q("cn", "medium",
                "What is the purpose of ARP (Address Resolution Protocol)?",
                "To resolve domain names to IP addresses", "To map IP addresses to MAC addresses", "To route packets between networks", "To encrypt data in transit", "To map IP addresses to MAC addresses"));

        allQuestions.add(q("cn", "medium",
                "In the TCP three-way handshake, what is the correct sequence?",
                "SYN, ACK, SYN-ACK", "ACK, SYN, SYN-ACK", "SYN, SYN-ACK, ACK", "SYN-ACK, SYN, ACK", "SYN, SYN-ACK, ACK"));

        // Hard
        allQuestions.add(q("cn", "hard",
                "What is the difference between a hub, switch, and router?",
                "They all do the same thing", "Hub broadcasts to all; switch forwards to specific MAC; router routes between networks using IP", "Switch broadcasts to all; hub forwards to specific MAC; router uses DNS", "Router and switch are the same; hub is different", "Hub broadcasts to all; switch forwards to specific MAC; router routes between networks using IP"));

        allQuestions.add(q("cn", "hard",
                "What is BGP (Border Gateway Protocol) used for?",
                "Routing within a single network", "Routing between autonomous systems on the internet", "Assigning IP addresses", "Encrypting network traffic", "Routing between autonomous systems on the internet"));

        allQuestions.add(q("cn", "hard",
                "What is the purpose of HTTPS compared to HTTP?",
                "HTTPS is faster", "HTTPS encrypts data using TLS/SSL for secure communication", "HTTPS uses a different port than 443", "HTTPS only works on local networks", "HTTPS encrypts data using TLS/SSL for secure communication"));

        allQuestions.add(q("cn", "hard",
                "What is a VLAN (Virtual LAN)?",
                "A physical network segment", "A logical grouping of devices on a network regardless of physical location", "A type of wireless network", "A VPN protocol", "A logical grouping of devices on a network regardless of physical location"));

        allQuestions.add(q("cn", "hard",
                "In IPv4, what is the size of the address space?",
                "2^16 addresses", "2^32 addresses", "2^64 addresses", "2^128 addresses", "2^32 addresses"));
    }

    /**
     * Returns questions filtered by subject and difficulty.
     */
    public List<Question> getQuestions(String subject, String difficulty) {
        List<Question> result = new ArrayList<>();
        for (Question q : allQuestions) {
            if (q.getSubject().equalsIgnoreCase(subject) &&
                q.getDifficulty().equalsIgnoreCase(difficulty)) {
                result.add(q);
            }
        }
        return result;
    }

    public List<Question> getAllQuestions() {
        return allQuestions;
    }
}
