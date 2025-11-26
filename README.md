# Learn to Code - Interactive Coding Platform

An interactive coding education platform built with Next.js, featuring 17 progressively challenging JavaScript problems with an in-browser code editor, test cases, and detailed explanations.

## ✨ Features

- **Interactive Code Editor**: Built with CodeMirror for a smooth coding experience
- **17 Progressive Problems**: From beginner-friendly basics to advanced algorithms
  - 13 Easy problems (JavaScript fundamentals)
  - 2 Medium problems (algorithms and data structures)
  - 2 Hard problems (complex algorithmic challenges)
- **Real-time Testing**: Run your code against multiple test cases instantly
- **Solution Explanations**: Detailed explanations with code examples for every problem
- **Video Tutorials**: YouTube video embeds for visual learners (coming soon for most problems)
- **Progress Tracking**: Automatically saves your solved problems and code in localStorage
- **Responsive Design**: Built with Tailwind CSS for a beautiful UI on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/nazimboudeffa/learntocode-nextjs.git
cd learntocode-nextjs

# Install dependencies
npm install
# or
yarn install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm start
```

## 📚 Problem Categories

### Easy (Beginner-Friendly)
1. **Sum Two Numbers** - Basic arithmetic and return statements
2. **Multiply Two Numbers** - Function parameters and multiplication
3. **Is Even** - Conditionals and modulo operator
4. **First Letter** - String indexing and character access
5. **Sum Array** - Array iteration and accumulation
6. **Max Number** - Array methods and Math utilities
7. **Filter Positive** - Array filtering techniques
8. **Repeat String** - String manipulation and loops
9. **Reverse String** - String reversal algorithms
10. **Count Vowels** - String iteration and character checking
11. **Palindrome** - String comparison and manipulation
12. **FizzBuzz** - Classic logic problem with conditionals
13. **High and Low** - Array operations and string parsing

### Medium
14. **Two Sum** - Hash map usage and array algorithms
15. **Is Anagram** - String manipulation and character frequency

### Hard
16. **Merge Intervals** - Advanced array manipulation and sorting
17. **Longest Substring** - Sliding window algorithm

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Editor**: [CodeMirror](https://codemirror.net/) via @uiw/react-codemirror
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Toast Notifications**: [React Hot Toast](https://react-hot-toast.com/)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── problems/          # Problems list and workspace
│   │   └── [slug]/        # Dynamic problem pages
│   │       └── explanation/ # Solution explanations
├── components/            # React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Problems.tsx      # Problems table
│   └── Workspace/        # Code editor components
├── problems/             # Problem definitions
│   ├── list/            # Individual problem files
│   ├── types/           # TypeScript types
│   └── utils/           # Browser-safe assertion utilities
└── hooks/               # Custom React hooks
```

## 🎯 How It Works

1. **Browse Problems**: View all problems sorted by difficulty on the problems page
2. **Select a Problem**: Click on any problem to open the interactive workspace
3. **Write Your Solution**: Use the built-in code editor with syntax highlighting
4. **Run Tests**: Execute your code against predefined test cases
5. **View Explanation**: Check the solution explanation page for hints and complete solutions
6. **Track Progress**: Your solved problems are automatically saved

## 🔧 Adding New Problems

To add a new problem:

1. Create a new file in `src/problems/list/`:

```typescript
import assert from "../utils/assert";
import { ProblemElement } from "../types/problem";

const starterCode = `function yourFunction(param) {
  // Write your code here
}`;

function handler(fn: Function) {
  assert.assertStrictEqual(fn(input), expectedOutput);
  return true;
}

export const yourProblem: ProblemElement = {
  id: "your-problem",
  slug: "yourproblem",
  title: "Your Problem Title",
  difficulty: "Easy",
  category: "Category Name",
  order: 17, // Next available order
  problemStatement: "Problem description...",
  examples: [/* test cases */],
  constraints: "Constraints...",
  starterCode,
  handlerFunction: handler,
  solution: `<h3>Solution</h3><p>Explanation...</p>`,
  videoId: "youtube-video-id" // Optional
};
```

2. Register it in `src/problems/list/index.ts`
3. Your problem will automatically appear in the problems list!

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new problems
- Improve existing explanations
- Fix bugs or enhance features
- Add video tutorials

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Built with inspiration from coding education platforms like LeetCode and designed to help beginners learn JavaScript fundamentals through hands-on practice.

---

Made with ❤️ by [Nazim Boudeffa](https://github.com/nazimboudeffa)
