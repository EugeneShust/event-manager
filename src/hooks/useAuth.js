// Custom Hook pattern: Simplifies authentication state management using the AuthContext.
import { AuthContext } from '../contexts';

export const useAuth = () => useContext(AuthContext);
