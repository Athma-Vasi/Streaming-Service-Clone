import { useState } from 'react';

function useAuth() {
  const [user, setUser] = useState();

  return <div>useAuth</div>;
}

export default useAuth;
