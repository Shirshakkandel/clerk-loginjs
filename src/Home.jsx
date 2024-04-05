import { SignInButton, SignOutButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

const Home = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div>
      <h1>Sign in with this button</h1>

      {!user && <SignInButton mode="modal" redirectUrl="/dashboard" />}
      {user && <SignOutButton />}
    </div>
  );
};

export default Home;
