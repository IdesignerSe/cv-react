import profilePic from "../../assets/profile.jpg";

export default function ProfilePhoto() {
  return (
    <div className="profile-photo">
      <img
        src={profilePic}
        alt="Profile"
        className="profile-pic"
      />
    </div>
  )
}
