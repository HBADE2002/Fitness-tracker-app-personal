function HomePage() {
  return (
    <div className="homepage-container">
      <h2>JOSH - The Fitness Tracker Application</h2>
      <p>Welcome to our fitness tracker app!</p>
      <p>
        Josh (or Joe-osh) is a all-in-one fitness tracker application, which is
        capable of tracking your daily workouts, goal requirements, and other
        important fitness metrics.
      </p>
      <p>
        This app provides a user-friendly interface, easy-to-use features, and a
        variety of options to help you achieve your fitness goals.
      </p>
      <h2>Key Features</h2>
        <div className="feature-flex">
            <div className="feature-item">
                <h3>Exercise Tracking</h3>
                <p>A practical workout tracker that is useful for your daily routine</p>
            </div>
            <div className="feature-item">
                <h3>Personalized Plans</h3>
                <p>Tailored workout and nutrition strategies based on your unique profile and goals.</p>
            </div>
            <div className="feature-item">
                <h3>Body Metrics Calculator</h3>
                <p>Calculate your Body metrics like BMI, Water Intake, and Macros by providing basic information</p>
            </div>
            <div className="feature-item">
                <h3>Community Support</h3>
                <p>Connect with like-minded individuals and participate in motivating challenges.</p>
            </div>
        </div>

    </div>
  );
}

export default HomePage;
