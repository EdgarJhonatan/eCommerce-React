import { API_URL } from "../../constants/env";

function Home() {
  return (
    <>
      <div>
        <h1>Home {API_URL}</h1>
        <p>Este es mi ambiente de desarrollo</p>
      </div>
    </>
  );
}

export default Home;