import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProfileItems = ({
  profile: {
    user: { _id, avatar, name },

    skills,
    company,
    location,
    status
  }
}) => {
  return (
    <Fragment>
      <div className="profile bg-light">
        <img className="round-img" src={avatar} alt="avatar" />
        <div>
          <h2>{name}</h2>
          <p>
            {status} {company && <span>at {company}</span>}
          </p>
          <p className="my-1">{location && <span>{location}</span>}</p>
          <Link to={`/profile/${_id}`} className="btn btn-primary">
            View Profile
          </Link>
        </div>
        <ul>
          {skills.slice(0, 5).map((skill, index) => (
            <li key={index} className="text-primary">
              <i className="fas fa-check" /> {skill}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

ProfileItems.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItems;
