import React from 'react';

const LanguagesList = ({ languages }) => {
  // console.log(languages);
  const language = Object.values(languages);
  console.log(language);
  return (
    <div>
      <h3>Languages:</h3>
      {language.map((l, index) => (
        <ul>
          <li key={l[index]}>{l}</li>
        </ul>
      ))}
    </div>
  );
};

export default LanguagesList;
