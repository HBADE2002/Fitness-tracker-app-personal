function HomePage() {
  return (
    <>
      <div className="homepage-container">
        <h2 className="font-text-heading">JOSH - The Fitness Tracker App</h2>
        <div className="p-container">
          <p className="welcome-text">Welcome to our fitness tracker app!</p>
          <p className="description-text">
            <span className="highlighted-text">Josh (or Joe-osh)</span> is an
            all-in-one fitness tracker application, which is capable of tracking
            your daily workouts, goal requirements, and other important fitness
            metrics.
          </p>
          <p className="description-text">
            This app provides a user-friendly interface, easy-to-use features,
            and a variety of options to help you achieve your fitness goals.
          </p>
        </div>
        <div className="homepage-images-grid">
            <img src="https://www.circlehealthgroup.co.uk/-/media/circle/articles/blogs/health-matters/hero/10-health-benefits-of-cycling.jpg?rev=87e9800e7af8410a911eb77ce09d0bdd&webp=true&h=700&iar=1&w=1600&crop=1&hash=D80AEF36B27DE9E9BD268D63AA6045FB" alt="image-cycling" />
            <img src="https://img.freepik.com/premium-photo/couple-jogging-by-lake-with-lake-background_1316799-2179.jpg?w=740" alt="images-jogging" />
            <img src="https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=400https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Body Metrics Calculator" />
            <img src="https://eliteclubs.com/wp-content/uploads/2021/08/walking-for-exercise.png" alt="Community Support" />
  
        </div>
        <div className="home-container" >
        <h2 className="welcome-text" style={{marginLeft:'490px'}}>Key Features</h2>
        <div className="feature-flex welcome-text">
          <div className="feature-item ">
            <h3>Exercise Tracking</h3>
            <p>
              A practical workout tracker that is useful for your daily routine
            </p>
          </div>
          <div className="feature-item">
            <h3>Personalized Plans</h3>
            <p>
              Tailored workout and nutrition strategies based on your unique
              profile and goals.
            </p>
          </div>
          <div className="feature-item">
            <h3>Body Metrics Calculator</h3>
            <p>
              Calculate your Body metrics like BMI, Water Intake, and Macros by
              providing basic information
            </p>
          </div>
          <div className="feature-item">
            <h3>Community Support</h3>
            <p>
              Connect with like-minded individuals and participate in motivating
              challenges.
            </p>
          </div>
        </div>
        </div>
        
         {/* Footer Section */}
      <footer className="footer">
        <p>
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by Hrishikesh Bade
        </p>
      </footer>
      </div>

     
    </>
  );
}

export default HomePage;
