import React from "react";
import headshot from "../images/Akshay_Patel.jpg"; // Adjust the path based on your directory structure

interface ProfileProps {
  name: string;
  bio: string;
  tag: string;
  title: string;
}

const Profile: React.FC<ProfileProps> = ({ name, bio, tag, title }) => {
  return (
    <div itemScope itemType="https://schema.org/Person">
                      <img
          src={headshot}
          alt="akshay patel - software engineer at scale ai and venture scout at pear vc"
          style={{
            width: "100px",
            borderRadius: "10%",
            marginRight: "10px",
          }}
          itemProp="image"
        />
        <h1 className="typewriter" itemProp="name">
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1>hi! i'm {name}.</h1>
          </div>
        </h1>

      {/** This is my Profile Section */}
      <div className="profile-container">
        <p className="bio" itemProp="description">{bio}</p>
        
        {/* SEO-friendly content about current roles */}
        <div style={{ marginTop: "20px", fontSize: "14px" }}>
          <p><strong>current roles:</strong></p>
                      <ul style={{ listStyle: "none", padding: 0 }}>
              <li>• software engineer at <strong>scale ai</strong> - building data infrastructure for ai applications</li>
              <li>• venture scout at <strong>pear vc</strong> - sourcing and evaluating early-stage startups</li>
            </ul>
            <p><strong>education:</strong> university of california, berkeley m.e.t 22'</p>
        </div>
        
        <div style={{ marginTop: "20px" }}>
          <a
            href="https://github.com/akshay-patel-y"
            className="fa fa-github fa-3x"
            aria-label="akshay patel's github profile"
            title="github - akshay patel"
          ></a>
          <a
            href="https://www.linkedin.com/in/akshay-patel-/"
            className="fa fa-linkedin fa-3x"
            aria-label="akshay patel's linkedin profile"
            title="linkedin - akshay patel"
            itemProp="sameAs"
          ></a>
          <a
            href="mailto:akshaypatel.y@gmail.com"
            className="fa fa-envelope fa-3x"
            aria-label="email akshay patel"
            title="email - akshaypatel.y@gmail.com"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
