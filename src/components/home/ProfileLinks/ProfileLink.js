import React from 'react';
import { profileLinks } from '../../../data';
import "./ProfileLink.scss";
import { Link } from 'react-router-dom';

const ProfileLink = () => {
    return (
          <div className="profile_dashboard_links_wrapper">
            {profileLinks.map((link,index) => {
              return (
                <div key={link.id}>
                  <Link to={link?.path} className='profile_hiding_link'>
                      <div className="profile_mobile_icon_link_container"
                      >
                        <img
                          src={link.image}
                          alt=""
                          className="profile_mobile_icon"
                        />
                        <p className="profile_mobile_text">{link.text}</p>
                      </div>
                      </Link>
                     <hr className={`profile_mobile_line ${
                    index === 4 && "profile_mobile_line_hidden"}`}/>
                </div>
              );
            })}
          </div>
      );
};

export default ProfileLink;