
import "./style.scss";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebase";

export function SignIn(){


function handleGoogleSignIn(){
   const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
  
}





 return (
<div className="container">
<h1>red dead redemption 2 abaixo</h1>

<span>
We are wandering in a lawless land
Crying out: Redemption!
</span>

<button type="button"  className="button" onClick={handleGoogleSignIn} >
   Loge com Google
</button>
</div>



);
}