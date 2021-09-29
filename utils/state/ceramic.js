import { useCeramic } from 'use-ceramic';
import { useEffect, useState } from 'react';
import { createContainer } from 'unstated-next'; // Global state provider

function useCeramicState() {
  const ceramic = useCeramic();

  const [authenticated, setAuthenticated] = useState(ceramic.isAuthenticated);
  const [authenticating, setAuthenticating] = useState(false);
  const [name, setName] = useState(null);

  const authenticate = async () => {
    setAuthenticating(true);
    try {
      const authProvider = await ceramic.connect();
      await ceramic.authenticate(authProvider);

      if (ceramic.isAuthenticated && !name) {
        ceramic.idx.get('basicProfile').then((profile) => {
          if (profile && profile.name) {
            setName(profile.name);
          }
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setAuthenticating(false);
    }
  };

  useEffect(() => {
    const subscription = ceramic.isAuthenticated$.subscribe(
      (isAuthenticated) => {
        setAuthenticated(isAuthenticated);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    ceramic,
    authenticated,
    authenticating,
    authenticate,
    name,
  };
}

export const ceramicState = createContainer(useCeramicState);
