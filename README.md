# Quiz App 🎯

A web-based trivia quiz application built with vanilla JavaScript, HTML, and CSS. Test your knowledge across multiple categories including General Knowledge, Movies, Video Games, Animals, and Japanese Manga & Anime.

## 🌟 Features

- **Multiple Categories**: Choose from 5 different quiz categories
- **Interactive Gameplay**: Multiple choice questions with immediate feedback
- **Score Tracking**: Real-time score display during gameplay
- **High Scores**: Save and view top 5 high scores with usernames
- **Progress Indicator**: Visual progress bar showing question completion
- **Responsive Design**: Works on desktop and mobile devices
- **Dynamic Questions**: Fetches questions from Open Trivia Database API

## 🎮 Available Categories

1. **General Knowledge** - Test your overall knowledge
2. **Entertainment: Film** - Movie trivia and cinema facts
3. **Entertainment: Video Games** - Gaming knowledge and history
4. **Animals** - Wildlife and animal facts
5. **Entertainment: Japanese Manga & Anime** - Anime and manga trivia

## 📁 Project Structure

```
Quiz App/
├── index.html              # Main landing page
├── selectcategories.html    # Category selection page
├── game.html               # Quiz gameplay page
├── end.html                # Score submission page
├── highscores.html         # High scores display page
├── style.css               # Main stylesheet
├── game.css                # Game-specific styles
├── selectcategories.css    # Category selection styles
├── highscores.css          # High scores page styles
├── game.js                 # Game logic and API integration
├── selectcategories.js     # Category selection functionality
├── end.js                  # Score saving functionality
├── highscores.js           # High scores display logic
├── questions.json          # Static question data (fallback)
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for fetching questions from API)

### Installation

1. **Clone or download** the repository to your local machine
2. **Navigate** to the project directory
3. **Open** `index.html` in your web browser

### Running Locally

Since this is a client-side application, you can run it in several ways:

#### Option 1: Direct File Opening

- Simply double-click on `index.html` to open in your default browser

#### Option 2: Local Server (Recommended)

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## 🎯 How to Play

1. **Start**: Click "Play" on the main menu
2. **Select Category**: Choose your preferred quiz category
3. **Answer Questions**: Select the correct answer from 4 options
4. **Track Progress**: Watch your score and progress bar
5. **Save Score**: Enter your username to save your high score
6. **View Rankings**: Check the high scores leaderboard

## 🔧 Technical Details

### Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, animations, and responsive design
- **Vanilla JavaScript**: Game logic, DOM manipulation, and API calls
- **Local Storage**: Persistent high score storage
- **Open Trivia Database API**: Dynamic question fetching

### Key Features Implementation

#### Dynamic Question Loading

```javascript
// Fetches questions from Open Trivia Database API
const triviaUrl = categoryUrls[selectedCategoryId];
fetch(triviaUrl)
  .then((res) => res.json())
  .then((loadedQuestions) => {
    // Process and format questions
  });
```

#### Score Management

- Real-time score tracking during gameplay
- Local storage for persistent high scores
- Maximum of 5 high scores stored
- Automatic sorting by score (highest first)

#### Progress Tracking

- Visual progress bar
- Question counter
- Score display

### API Integration

The app uses the [Open Trivia Database API](https://opentdb.com/) to fetch questions:

- **Endpoint**: `https://opentdb.com/api.php`
- **Parameters**:
  - `amount=10` (10 questions per quiz)
  - `difficulty=easy`
  - `type=multiple` (multiple choice)
  - `category=[ID]` (specific category)

## 🎨 Styling

The application features a modern, clean design with:

- Purple gradient backgrounds
- Smooth hover effects
- Responsive button designs
- Mobile-friendly layout
- Visual feedback for user interactions

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🐛 Known Issues

- Some category URLs in the code have minor formatting issues (extra spaces)
- Network dependency for question fetching (fallback to local questions.json)

## 🚧 Future Enhancements

- [ ] Add difficulty selection (Easy, Medium, Hard)
- [ ] Implement timer for each question
- [ ] Add more quiz categories
- [ ] Include question explanations
- [ ] Add sound effects and animations
- [ ] Implement user profiles and statistics
- [ ] Add multiplayer functionality
- [ ] Offline mode with cached questions

## Acknowledgments

- [Open Trivia Database](https://opentdb.com/) for providing the trivia questions API
- Font families and design inspiration from modern web applications

---

**Enjoy testing your knowledge with the Quiz App!** 🧠✨
