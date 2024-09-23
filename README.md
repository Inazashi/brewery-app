# Brewery Finder Application

This project is a **Single Page Application (SPA)** built with **React.js** that allows users to browse breweries from the Open Brewery DB API. Users can paginate through the breweries list, view detailed information about a specific brewery, and mark/unmark breweries as their favorites. The state of favorite breweries is managed globally using the **Context API**, and the app's styling is implemented using **plain CSS** to maintain simplicity and customizability.

---


### Key Components

#### **1. `BreweryList.js`**
The `BreweryList` component fetches a paginated list of breweries from the Open Brewery DB API. Each brewery is displayed with relevant details such as the name, type, and location. A favorite star icon allows users to mark a brewery as a favorite. This component also manages pagination, loading more items as the user requests.

- **Main responsibilities**:
  - Fetch and display a paginated list of breweries.
  - Provide a button to load more breweries.
  - Render favorite buttons that toggle between an outlined and filled star.

#### **2. `BreweryDetail.js`**
The `BreweryDetail` component fetches and displays detailed information about a specific brewery. It allows users to view the brewery's type, location, and website, and provides a favorite button that allows users to toggle the favorite status for that brewery.

- **Main responsibilities**:
  - Fetch and display detailed information about a single brewery.
  - Render a favorite button similar to the list view.

#### **3. `Spinner.js`**
The `Spinner` component provides a visual indicator (loading spinner) to be displayed when the app is waiting for data to load from the API. This enhances the user experience by providing feedback during asynchronous operations.

#### **4. `FavoritesContext.js`**
This is a global context provider responsible for managing the state of favorite breweries. It allows components to toggle favorite status and check if a brewery is marked as a favorite.

- **Main responsibilities**:
  - Provide functions (`toggleFavorite` and `isFavorite`) to manage favorite breweries.
  - Persist the favorite breweries list in local storage to ensure data persists across sessions.

---

## Design Decisions

### 1. **Choosing React over Next.js**

- **Project Requirements**: The business case revolves around building an interactive Single Page Application (SPA) that consumes data from a REST API and focuses on client-side rendering. Given the simplicity of the data-fetching and the absence of SEO requirements, React was chosen over Next.js for the following reasons:
  
  - **SPA vs. SSR/SSG**: Next.js is often chosen for projects that require server-side rendering (SSR) or static site generation (SSG), both of which are unnecessary in this case. React’s SPA approach allows for faster client-side routing and eliminates the complexity of SSR or SSG setups.
  
  - **Development Speed**: React’s lightweight setup is ideal for rapid prototyping and development, especially when server-side rendering is not a concern. The routing and state management are easily handled within the React ecosystem without the overhead of a full-fledged Next.js framework.

  - **Simpler Infrastructure**: By avoiding the SSR nature of Next.js, React provides a faster and simpler project setup for this task. Since the main focus is on user interactivity (pagination, favoriting, etc.), React’s SPA nature fits perfectly.

### 2. **Choosing Context API over Redux**

- **State Complexity**: The global state management required in this project is relatively simple—mainly to track a list of favorite breweries. Using **Redux** for this kind of state management would introduce unnecessary complexity (e.g., action creators, reducers, middleware).
  
  - **Context API Advantages**: The **Context API** is a native React feature that provides global state management without the need for an external library like Redux. Since the only shared state is the list of favorite breweries and related functions, Context API simplifies state management and avoids boilerplate code.

  - **Developer Experience**: By using the Context API, the development process is faster and less error-prone due to the reduced setup and smaller number of concepts to grasp compared to Redux.

  - **Performance Considerations**: Given the scale of the app, performance concerns such as excessive re-renders (which Redux addresses) are not significant. The Context API is lightweight, easy to integrate, and sufficient for the current scope.

### 3. **Using Plain CSS over Component Libraries or Preprocessors**

- **Customizability**: Plain CSS provides complete control over the styling and ensures that the application has a unique, custom look. Using component libraries like Material-UI or Bootstrap often comes with pre-defined styles that may require additional effort to override, which can lead to bloated stylesheets and unnecessary complexity.
  
  - **Lightweight and Minimal**: By using plain CSS, the project avoids unnecessary dependencies and ensures fast loading times, as there are no external CSS frameworks to download. The goal was to keep the project lightweight and simple.

  - **Maintainability**: The CSS for this project is organized per component (e.g., `BreweryList.css`, `BreweryDetail.css`). This allows for modular and maintainable styles that are easy to understand and modify if necessary. The separation of styles per component makes it easy to track and debug any styling-related issues.

  - **Sass Consideration**: While **Sass** is a powerful tool, its advanced features (e.g., variables, mixins, nesting) are not necessary for a project of this scale. Since the design requirements are straightforward, plain CSS suffices. Introducing Sass would have added unnecessary tooling overhead.

### 4. **User Interface and Experience (UI/UX) Considerations**

- **Pagination & Infinite Scroll**: The brewery list uses a **load more** button for pagination, which is simple and user-friendly. Infinite scrolling could lead to performance issues or confusion if the user scrolls indefinitely. The explicit "Load More" button offers more control over the content loading, ensuring the user is aware of the pagination state.

- **Favorite Button UX**: The favorite button uses an intuitive star icon that visually indicates whether the brewery is marked as a favorite. The button toggles between an outlined star (not favorited) and a filled star (favorited). This provides immediate visual feedback, improving the user experience.

- **Loading State (Spinner)**: A spinner is displayed when loading data from the API. This gives users immediate feedback that the app is working and prevents confusion during potentially long API calls.

- **Responsive Design**: The app is fully responsive and adapts to different screen sizes. Media queries ensure that the UI remains user-friendly on both desktop and mobile devices.

---

## How to Run the Project

### Prerequisites
- **Node.js** and **npm** installed on your machine.

### Installation

1. Clone the repository:
git clone https://github.com/Inazashi/brewery-app.git

2. Navigate to the project directory:
cd brewery-app

3. Install dependencies:
npm install

4. Start the development server:
npm start

5. Open your browser and navigate to:
http://localhost:3000