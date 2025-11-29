import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import { useLocation, useNavigate } from "react-router-dom";

const Auth = () => {
  const getPuter = () =>
    typeof window !== "undefined" && window.puter ? window.puter : null;

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [_user, setUser] = useState(null);

  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate(next);
  }, [isAuthenticated, next, navigate]);

  useEffect(() => {
    const checkAuth = async () => {
      const puter = getPuter();
      if (!puter) {
        console.log("Puter.js not available");
        setIsLoading(false);
        return;
      }

      try {
        const currentUser = await puter.auth.getUser();
        if (currentUser) {
          setUser(currentUser);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch {
        // User is not authenticated
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const signOut = async () => {
    const puter = getPuter();
    if (!puter) {
      console.log("Puter.js not available");
      return;
    }

    setIsLoading(true);

    try {
      await puter.auth.signOut();
      setUser(null);
      setIsAuthenticated(false);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Sign out failed";
      console.log(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async () => {
    const puter = getPuter();
    if (!puter) {
      console.log("Puter.js not available");
      return;
    }

    setIsLoading(true);

    try {
      await puter.auth.signIn();
      // After successful sign in, get user data
      const currentUser = await puter.auth.getUser();
      if (currentUser) {
        setUser(currentUser);
        setIsAuthenticated(true);
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Sign in failed";
      console.log(msg);
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-orange-100 via-white  to-green-100">
      <div className="min-h-screen  max-w-md m-auto flex justify-center items-center h-full ">
        <div className="h-full w-full ">
          <div className=" h-fit w-full shadow-lg border-neutral-200 border bg-neutral-50  rounded-2xl flex flex-col text-center p-10 gap-5  ">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl">Welcome To Chey AI </h1>
              <p className="text-sm text-neutral-600">
                Login To Continue Your Cooking
              </p>
            </div>
            <div>
              {isLoading ? (
                <>
                  <Button
                    btnname={"Signing You In ..."}
                    cn={
                      "text-sm sm:text-lg py-1 px-8 rounded-full animate-pulse"
                    }
                  />
                </>
              ) : (
                <>
                  {isAuthenticated ? (
                    <Button
                      e={signOut}
                      btnname={"Log Out"}
                      cn={
                        "text-sm sm:text-lg py-1 px-8 rounded-full animate-pulse"
                      }
                    />
                  ) : (
                    <Button
                      btnname={"Login"}
                      e={signIn}
                      cn={
                        "text-sm sm:text-lg py-1 px-8 rounded-full animate-pulse"
                      }
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
