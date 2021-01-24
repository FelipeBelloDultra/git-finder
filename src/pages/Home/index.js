import React, { useCallback, useState } from 'react';

import './index.css';

const Home = () => {
  const [repos, setRepos] = useState([]);

  const handleSubmit = useCallback(() => {
    // CODE
  }, []);

  return (
    <div className="container">
      <main className="search-group">
        <span>Git <br /> Finder</span>

        <form className="button-group" onSubmit={handleSubmit}>
          <input type="text" />
          <button>Procurar</button>
        </form>
      </main>

      <aside className="list-repos">
        <div className="repo-wrapper">
          {repos.map((repo) => (
            <a href="/">
              {repo.name}
            </a>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default Home;
