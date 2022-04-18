import React from 'react';

const Blog = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <h3> Difference between authorization and authentication?</h3>
          <p className="mt-3">
            Authentication is the process of verifying who someone is,
            <br />
            <br />
            whereas authorization is the process of verifying what specific
            applications, files, and data a user has access to.
          </p>

          <h3 className="mt-5">
            What other services does firebase provide other than authentication?
          </h3>
          <p>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app.
            <br />
            firebase can be used in IOS, Android, and also web platform.
          </p>
        </div>

        <div className="col-md-6">
          <h3>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h3>
          <p className="mt-4">
            <strong>Why we are using firebase</strong>
            <br />
            Firebase helps us to build and run successful apps. Firebase manages
            all data real-time in the database. So, the exchange of data to and
            fro from the database is easy and quick.
            <br />
            <strong className="mt-4">
              What other options do i have to implement authentication
              <ul>
                <li>twitter</li>
                <li>microsoft</li>
                <li>Yahoo</li>
                <li>Phone number</li>
                <li>many more</li>
              </ul>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
