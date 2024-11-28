
import { getAuth } from 'firebase/auth';
import { getIdToken } from 'firebase/auth';

export const fetchMockData = async () => {
  const user = getAuth().currentUser;
  if (!user) {
    navigate("/login"); // redirect to login page
    return;
  }
  if (user) {
    const token = await getIdToken(user);
    const response = await fetch("http://localhost:3000/your-resource", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
  }
};
