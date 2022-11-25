import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='text-center bg-secondary text-white py-10'>
                <h3 className='text-3xl uppercase font-bold'>Blog</h3>
                <p>See Our Latest Blogs</p>
            </div>
            <div className='w-11/12 mx-auto my-10'>
                <div className='w-11/12 mx-auto'>
                    <h2 className='text-3xl font-semibold flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>

                        <span>What are the different ways to manage a state in a React application?</span>
                    </h2>
                    <div className='lg:w-9/12 text-lg my-5'>
                        <p className="mt-2">
                            The state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders. The change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render.
                        </p>
                        <p className="mt-2">
                            As our application grows, it helps to be more intentional about how our state is organized and how the data flows between our components. Redundant or duplicate state is a common source of bugs. In this blog, we'll learn different ways to manage a state in a React application.
                        </p>
                        <h3 className='text-lg font-medium mt-2'>
                            There are four main types of state we need to properly manage in our React apps:
                        </h3>
                        <ol>
                            <li>1. Local state</li>
                            <li>2. Global state</li>
                            <li>3. Server state</li>
                            <li>4. URL state</li>
                        </ol>
                        <p className="mt-2">
                            Let's cover each of these in detail:
                        </p>
                        <p className="mt-2">
                            <strong>Local (UI) state</strong> - Local state is data we manage in one or another component.
                        </p>
                        <p className="mt-2">
                            Local state is most often managed in React using the useState hook. <br />

                            For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                        </p>
                        <p className="mt-2">
                            <strong>Global (UI) state</strong> - Global state is data we manage across multiple components.
                        </p>
                        <p className="mt-2">
                            Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                        </p>
                        <p className="mt-2">
                            A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. Sometimes state we think should be local might become global.
                        </p>
                        <p className="mt-2">
                            <strong>Server state</strong> -  Data that comes from an external server that must be integrated with our UI state.
                        </p>
                        <p className="mt-2">
                            Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br />
                            There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. <br />
                            Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                        </p>
                        <p className="mt-2">
                            <strong>URL state</strong> - Data that exists on our URLs, including the pathname and query parameters.
                        </p>
                        <p className="mt-2">
                            URL state is often missing as a category of state, but it is an important one.
                            In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! <br />

                            There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                        </p>
                    </div>
                </div>
                <div className='w-11/12 mx-auto'>
                    <h2 className='text-3xl font-semibold flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        <span>How does prototypical inheritance work?</span>

                    </h2>
                    <div className='lg:w-9/12 text-lg my-5'>
                        <p className="mt-2">
                            Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’.
                        </p>
                        <p className="mt-2">
                            Javascript’s version of class-based programming and other traditional class-based programming languages work with the same concept but does not work exactly similar. There are differences in its keyword, syntax, and how it works. There are also debates regarding pros and cons of Javascript’s version of class-based programming, but for simplicity’s sake and learning purposes, I do not want to go over those issues.
                            <a className='text-primary hover:font-medium' target='_blank' href="http://www.2ality.com/2011/11/javascript-classes.html" rel="noreferrer">See details here</a>


                        </p>

                        <p className="mt-2">
                            So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.
                        </p>


                        <p className="mt-2">
                            its best to read further about Prototypal Inheritance from mozilla doc. Code example below is just one of many ways of implementing Prototypal Inheritance.
                        </p>
                        <p className="mt-2 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                            </svg>

                            <a target='_blank' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain" className='font-semibold text-primary hover:text-secondary' rel="noreferrer">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain</a>
                        </p>
                    </div>
                </div>
                <div className='w-11/12 mx-auto'>
                    <h2 className='text-3xl font-semibold flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        <span>What is a unit test? Why should we write unit tests?</span>

                    </h2>
                    <div className='lg:w-9/12 text-lg my-5'>
                        <p className="mt-2">
                            In computer programming, unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use.
                        </p>
                        <p className="mt-2">
                            Before unit testing, capture and replay testing tools were the norm. In 1997, Kent Beck and Erich Gamma developed and released JUnit, a unit test framework that became popular with Java developers.[2] Google embraced automated testing around 2005–2006
                        </p>
                        <h3 className='my-2 font-semibold'>Why should we write unit tests?</h3>
                        <p className="mt-2 font-semibold text-2xl my-2">
                            Let’s look at some of the advantages of unit testing:
                        </p>
                        <ul className='list-disc'>
                            <li>
                                You can test units or functions of your project in isolation.
                            </li>
                            <li>Unit tests act as documentation for your code.</li>
                            <li>They enable you to catch bugs early in the development process.</li>
                            <li>Automated unit tests help a great deal with regression testing.</li>
                            <li>They detect code smells in your codebase. For example, if you’re having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</li>
                            <li>They contribute to higher code quality.</li>
                        </ul>
                        <p className="mt-2 font-semibold text-2xl my-2">
                            Conclusion
                        </p>
                        <p>
                            Unit tests generally exercise the functionality of the smallest possible unit of code (a method, class, or component) in a repeatable way. Although they can occasionally be complex (depending on the application), unit tests help you write better and cleaner code. Remember that a failing test is either doing its job correctly or poorly written in the first place.
                        </p>
                    </div>
                </div>
                <div className='w-11/12 mx-auto leading-10'>
                    <h2 className='text-3xl font-semibold flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        <span>React vs. Angular vs. Vue?</span>

                    </h2>
                    <div className='lg:w-9/12 text-lg my-5'>
                        <p className="mt-2">
                            This blog is a broad-gauge comparison of three most popular JavaScript frameworks: Vue vs React vs Angular, and in case you’re a developer in the making or currently thinking of launching your own project using one of these popular frameworks, we hope it will be helpful to pick the right solution for you.
                        </p>
                        <p className="mt-2">
                            Since recently, there were two major players on the front-end arena: Google-released Angular and React — a JavaScript library developed by Facebook. Though, in 2018 one more strong player entered the competition showing the ambitions to be recognized as the most favorable of JavaScript frameworks — Vue js.
                        </p>
                        <h3 className='my-2 font-semibold'>Vue vs React vs Angular</h3>
                        <h3 className='my-2 font-semibold'>Angular, React and Vue.js popularity</h3>
                        <p className="mt-2">
                            Angular vs React popularity is the opposition as old as the hills. Both of them are capable, up-to-date, and extensively used JavaScript frameworks that faced a significant change: their “duel” turned into a “truel” — Angular vs React popularity vs Vue.js popularity. We’ll have a look at four main measures to find out the most popular one: NPM trends, Stack Overflow Survey, GitHub stars, and open job offerings.
                        </p>
                        <ul className='list-disc leading-10'>
                            <li>
                                React remains to be the most popular of the JavaScript frameworks as to Node Package Manager reports.Whether you’re looking for more latest research, consider this Google Trends search, which splits up search trends.When it comes to the finest front-end frameworks, React.js is chosen by about 40% of developers around the world.So it is no surprise that the tags have over 100,000 postings on GitHub..
                            </li>
                            <li>
                                According to Stack Overflow Developer Survey Results 2021, React is the most loved by developers (40,1%) followed by Vue.js (18,9%) and only then Angular.js (22,9%).
                            </li>
                            <li>
                                The fourth edition of JavaScript Rising Stars that estimate the number of stars added on GitHub annually shows striking statistics: Vue.js takes the first place with 31,4k stars, leaving React with 22,4k stars on the second place and Angular.js (12k stars) on the fourth.
                            </li>
                        </ul>
                        <h3 className="mt-2 font-semibold text-2xl my-2">
                            Angular, Vue.js and React components
                        </h3>

                        <p>
                            The performance of the framework is determined by the most valuable parts — its components. Their workflow is related to the way in which it receives the input data, and the way it responds to that data. In general, a component receives input and alters its behavior in response to it. A modification in the UI of a certain portion of the webpage usually reflects a shift in behavior. The usage of a particular set reusing code is a breeze. A basket on an e-commerce site or a signup button on a social platform are examples of components.
                        </p>

                        <h3 className="mt-2 font-semibold text-2xl my-2">
                            Angular
                        </h3>
                        <p>
                            Components of Angular are named directives. They are markers on DOM elements, which are tracked by Angular. Angular separates the UI parts of components as attributes of HTML tags and their behavior in the form of JavaScript code. When comparing Angular with React, this is what makes it distinct.
                        </p>
                        <h3 className="mt-2 font-semibold text-2xl my-2">
                            React
                        </h3>
                        <p>
                            Contrary to Angular, React combines the UI and components behavior. For example, below is the code for a React Hello World element. To put it simply, the same part of the code is responsible for UI element creation and command of its behavior.
                        </p>
                        <h3 className="mt-2 font-semibold text-2xl my-2">
                            Vue.js
                        </h3>
                        <p>
                            In Vue.js UI and behavior are a part of the components. The framework is also very customizable which allows combining UI and components behavior within a script.
                        </p>
                        <div>
                            details Post: <a target='_blank' className='text-xl text-primary hover:text-accent' href='https://medium.com/swlh/vue-vs-react-vs-angular-what-framework-would-you-choose-5d77a3680b0d' rel="noreferrer">https://medium.com/swlh/vue-vs-react-vs-angular-what-framework-would-you-choose-5d77a3680b0d</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
