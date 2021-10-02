import { FaGithub, FaTimes } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/client";

import style from "./style.module.scss";

export function SignInButton() {
  const [session] = useSession();

  session;

  return session ? (
    <button
      className={style.signInButton}
      type="button"
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={style.closeIcon} />
    </button>
  ) : (
    <button
      className={style.signInButton}
      type="button"
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  );
}
