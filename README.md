<h1>Contributing to Indux Properties</h1>

<p>To contributeg to this project follow the steps below to get started.</p>

<hr>

<h2>🛠 How to Contribute</h2>

<h3>1. Fork the Repository</h3>
<ol>
    <li>Navigate to the repository on GitHub.</li>
    <li>Click the <strong>Fork</strong> button in the upper-right corner of the page to create a copy of the repository in your GitHub account.</li>
</ol>

<h3>2. Clone the Forked Repository</h3>
<ol>
    <li>Clone the forked repository to your local machine:
        <pre><code>git clone https://github.com/&lt;your-username&gt;/&lt;repo-name&gt;.git</code></pre>
    </li>
    <li>Navigate to the project directory:
        <pre><code>cd &lt;repo-name&gt;</code></pre>
    </li>
</ol>

<h3>3. Make Your Changes</h3>
<ol>
    <li>Create a new branch for your changes:
        <pre><code>git checkout -b &lt;branch-name&gt;</code></pre>
    </li>
    <li>Make the necessary changes or additions in the codebase.</li>
</ol>

<h3>4. Commit Your Changes</h3>
<ol>
    <li>Stage your changes:
        <pre><code>git add .</code></pre>
    </li>
    <li>Commit your changes with a descriptive message:
        <pre><code>git commit -m "Add: [&lt;describe your changes briefly&gt;]"</code></pre>
    </li>
</ol>

<h3>5. Push to Your Forked Repository</h3>
<ol>
    <li>Push the branch to your forked repository:
        <pre><code>git push origin &lt;branch-name&gt;</code></pre>
    </li>
</ol>

<h3>6. Create a Pull Request (PR)</h3>
<ol>
    <li>Go to the original repository on GitHub.</li>
    <li>Click the <strong>Pull Requests</strong> tab.</li>
    <li>Click the <strong>New Pull Request</strong> button.</li>
    <li>Select <strong>Compare across forks</strong>.</li>
    <li>Choose your fork and branch, then provide a title and description for the PR.</li>
    <li>Submit the pull request for review.</li>
</ol>

<hr>

<h2>✍️ Writing a Good Pull Request</h2>

<p>To ensure your pull request (PR) is clear and easy to review, follow these steps:</p>

<h3>1. Use a Descriptive Title</h3>
<ul>
    <li>Keep the title short but informative.</li>
    <li>Clearly state what your PR does, e.g., <code>Fix: Resolve login issue</code> or <code>Add: User profile feature</code>.</li>
</ul>

<h3>2. Provide a Detailed Description</h3>
<p>Include the following in your PR description:</p>
<ul>
    <li><strong>Purpose:</strong> What does this PR aim to achieve?</li>
    <li><strong>Changes Made:</strong> List the changes or new features added. Be specific.</li>
    <li><strong>Issue Reference:</strong> If your PR fixes a reported issue, mention it using <code>Fixes #<issue-number></code>.</li>
    <li><strong>Testing Instructions:</strong> How did you test your changes? Include steps so reviewers can verify them.</li>
    <li><strong>Screenshots (if applicable):</strong> Add screenshots for UI changes to make it easier for reviewers.</li>
</ul>

<p>Example PR description:</p>
<pre><code>
### Purpose
Fix the bug causing login failures when the password field is left blank.

### Changes Made
- Updated the validation logic in <code>auth.js</code>.
- Added error handling for empty password fields.

### Testing Instructions
1. Go to the login page.
2. Try logging in with a blank password field.
3. Ensure the error message "Password is required" appears.

Fixes #42
</code></pre>

<h3>3. Keep Changes Small and Focused</h3>
<ul>
    <li>Make sure your PR focuses on a single feature or bug fix. Avoid bundling multiple unrelated changes in one PR.</li>
</ul>

<h3>4. Follow Coding Standards</h3>
<ul>
    <li>Ensure your code adheres to the project’s style guide or conventions.</li>
    <li>Run linters and formatters if they’re part of the project.</li>
</ul>

<h3>5. Test Your Changes</h3>
<ul>
    <li>Thoroughly test your changes locally before submitting the PR.</li>
    <li>If the project has automated tests, make sure they pass successfully.</li>
</ul>

<h3>6. Request a Review</h3>
<ul>
    <li>Assign reviewers if required.</li>
    <li>Mention maintainers in the comments if you need their attention.</li>
</ul>

<hr>

<h2>🚀 How to Use the Project Locally</h2>

<ol>
    <li>After cloning the repository, navigate to the <code>client</code> directory:
        <pre><code>cd client</code></pre>
    </li>
    <li>Install the required dependencies:
        <pre><code>npm install</code></pre>
    </li>
    <li>Start the development server:
        <pre><code>npm run dev</code></pre>
    </li>
    <li>Open your browser and navigate to the provided URL (usually <code>http://localhost:3000</code>).</li>
</ol>

<hr>

<p>Feel free to reach out if you have any questions or need further assistance! 😊</p>
