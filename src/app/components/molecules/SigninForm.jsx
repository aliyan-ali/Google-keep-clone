// import React from 'react'
// import Image from 'next/image';
// import arrowsvg from '../atoms/img/arrow.svg'
// import SigninEmailInput from '../atoms/SigninEmailInput'
// import SigninPassword from '../atoms/SigninPassword'
// import style from "./SigninForm.css";


// function SigninForm({ email, password, setEmail, setPassword, handleSignup }) {
//   return (
//     <div className="signin-form">
//       <div className="sign-input">
//         <SigninEmailInput email={email} setEmail={setEmail} />
//         <SigninPassword password={password} setPassword={setPassword} />
//       </div>
//       <div>
//         <button
//           name="submitSignin"
//           className="btn signin-btn"
//           onSubmit={handleSignup}
//         >
//           <p>Signin</p>
//           <Image src={arrowsvg} width={30} height={25} alt=">" />
//         </button>
//       </div>
//       <div>
//         <button name="nagivateSignin" className="btn signup-btn">
//           Signup
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SigninForm








import React from "react";
import Image from "next/image";
import arrowsvg from "../atoms/img/arrow.svg";
import SigninEmailInput from "../atoms/SigninEmailInput";
import SigninPassword from "../atoms/SigninPassword";
import style from "./SigninForm.css";

function SigninForm({
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
  onSubmit,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(); // Call the onSubmit function passed as a prop
  };

  return (
    <form className="signin-form" onSubmit={handleSubmit}>
      <div className="sign-input">
        {/* adding name for user */}
        <input 
          className="name-input input"
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <SigninEmailInput email={email} setEmail={setEmail} />
        <SigninPassword password={password} setPassword={setPassword} />
      </div>
      <div>
        <button name="submitSignin" className="btn signin-btn" type="submit">
          <p>Signin</p>
          <Image src={arrowsvg} width={30} height={25} alt=">" />
        </button>
      </div>
      <div>
        <button name="navigateSignin" className="btn signup-btn">
          Signup
        </button>
      </div>
    </form>
  );
}

export default SigninForm;