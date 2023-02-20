import React from 'react';

const Blogs = () => {
    return (
        <div className='p-5'>
            <div className='mb-4'>
                <h1 className='text-xl font-bold'>
                    Q-1: Difference between javascript and nodejs
                </h1>
                <div>
                    Execution environment: JavaScript runs in a web browser,
                    while Node.js runs on the server side.

                    Runtime environment: JavaScript requires a web browser to run,
                    while Node.js requires a runtime environment like the V8 engine.

                    Built-in modules: JavaScript has a limited set of built-in modules,
                    while Node.js provides a rich set of built-in modules and libraries.

                    APIs: JavaScript has APIs for manipulating the DOM and interacting with the web browser,
                    while Node.js has APIs for file system operations, network programming, and more.

                    Asynchronous programming: JavaScript supports asynchronous programming with callbacks,
                    promises, and async/await, while Node.js is built for asynchronous programming and provides
                    a non-blocking I/O model.

                    Use cases: JavaScript is primarily used for web development,
                    while Node.js is used for server-side development, network programming,
                    and building real-time applications like chat apps and games.
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='text-xl font-bold'>
                    Q-2: when should you use nodejs and when should you use mongodb
                </h1>
                <div>
                    Node.js is a server-side runtime environment that is ideal for building server-side applications,
                    APIs, and real-time applications, while MongoDB is a NoSQL database that is ideal
                    for storing large amounts of data, handling complex data structures, and scaling horizontally.
                    They can be used together to build powerful web applications,
                    with Node.js providing the server-side logic and MongoDB
                    providing the data storage and retrieval.
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='text-xl font-bold'>
                    Q-3: Difference between sql and nosql databases.
                </h1>
                <div>
                    Data model: SQL databases use a fixed schema to store and organize data in tables,
                    while NoSQL databases use flexible data models such as key-value, document store, or graph databases.

                    Scalability: SQL databases are vertically scalable, meaning they can handle
                    increased traffic by upgrading the hardware resources, while NoSQL databases are horizontally scalable,
                    meaning they can handle increased traffic by adding more servers to the cluster.

                    Consistency: SQL databases provide strong consistency, ensuring that all data is valid and up-to-date,
                    while NoSQL databases provide eventual consistency, meaning that data may not be consistent across
                    all nodes in the database at any given time.

                    Transactions: SQL databases support transactions, allowing multiple operations to be grouped together
                    and either all executed or none executed, while NoSQL databases may not support transactions or may support
                    a limited form of transactions.
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='text-xl font-bold'>
                    Q-4: What is the purpose of jwt and how does it work
                </h1>
                <div>
                    JWTs are used for securely transmitting information between parties as a digitally
                    signed and encrypted JSON object. They are commonly used for authentication
                    and authorization purposes in web applications and provide a lightweight and secure way
                    to transmit data.
                </div>
            </div>
        </div>
    );
};

export default Blogs;