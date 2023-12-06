const questions = [
    {
        question: "1. What does HTML stand for?",
        answers: [
            { text: "HyperText Markup Language", isCorrect: true },
            { text: "High-level Text Management Language", isCorrect: false },
            { text: "Hyperlink and Text Management Language", isCorrect: false },
            { text: "High-level Text Markup Language", isCorrect: false }
        ]
    },
    {
        question: "2. Which HTML tag is used to define an ordered list?",
        answers: [
            { text: "<ul>", isCorrect: false },
            { text: "<ol>", isCorrect: true },
            { text: "<li>", isCorrect: false },
            { text: "<dl>", isCorrect: false }
        ]
    },
    {
        question: "3. What is the purpose of the HTML <head> element?",
        answers: [
            { text: "It contains the main content of the document.", isCorrect: false },
            { text: "It defines the navigation links of the document.", isCorrect: false },
            { text: "It contains metadata about the document.", isCorrect: true },
            { text: "It defines the structure of the document.", isCorrect: false }
        ]
    },
    {
        question: "4. Which HTML tag is used to create a hyperlink?",
        answers: [
            { text: "<a>", isCorrect: true },
            { text: "<link>", isCorrect: false },
            { text: "<href>", isCorrect: false },
            { text: "<url>", isCorrect: false }
        ]
    },
    {
        question: "5. In HTML, what does the <img> tag represent?",
        answers: [
            { text: "A link", isCorrect: false },
            { text: "An image", isCorrect: true },
            { text: "A paragraph", isCorrect: false },
            { text: "A table", isCorrect: false }
        ]
    },
    {
        question: "6. Which attribute is used to specify the alternate text for an image in HTML?",
        answers: [
            { text: "alt", isCorrect: true },
            { text: "src", isCorrect: false },
            { text: "title", isCorrect: false },
            { text: "link", isCorrect: false }
        ]
    },
    {
        question: "7. What is the isCorrect HTML for creating a line break?",
        answers: [
            { text: "<br>", isCorrect: true },
            { text: "<lb>", isCorrect: false },
            { text: "<break>", isCorrect: false },
            { text: "<newline>", isCorrect: false }
        ]
    },
    {
        question: "8. Which HTML tag is used to define the structure of an HTML document?",
        answers: [
            { text: "<body>", isCorrect: false },
            { text: "<header>", isCorrect: false },
            { text: "<main>", isCorrect: false },
            { text: "<html>", isCorrect: true }
        ]
    },
    {
        question: "9. What is the purpose of the HTML <footer> element?",
        answers: [
            { text: "It defines a section in a document.", isCorrect: false },
            { text: "It contains metadata about the document.", isCorrect: false },
            { text: "It specifies a footer for a document or section.", isCorrect: true },
            { text: "It creates a hyperlink.", isCorrect: false }
        ]
    },
    {
        question: "10. Which HTML tag is used to define a table?",
        answers: [
            { text: "<table>", isCorrect: true },
            { text: "<tr>", isCorrect: false },
            { text: "<td>", isCorrect: false },
            { text: "<th>", isCorrect: false }
        ]
    },
];

export default questions;