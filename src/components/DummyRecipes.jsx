import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DummyRecipes.css';

const DummyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {



    axios
      .get('https://dummyjson.com/recipes')
      .then((res) => {
        setRecipes(res.data.recipes);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('레시피 데이터를 불러오지 못했습니다.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="recipes-wrap">로딩 중...</div>;
  if (error) return <div className="recipes-wrap">{error}</div>;

  return (
    <div className="recipes-wrap">
      <h2>recipes</h2>
      <ul>
        {recipes.map((r) => (
          <li key={r.id}>
            <span>#{r.id}</span>

            <div className="img-wrap">
              <img src={r.image} alt={r.name} />
            </div>

            <h2>{r.name}</h2>

            <ol>
              {r.instructions.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ol>

            {r.tags.map((u) => (
              <span key={u}>{u}</span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DummyRecipes;