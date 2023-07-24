import React from 'react'
import { useParams } from 'react-router-dom';

const Codespaces = () => {
    const { lang } = useParams();
    console.log(lang)

    return (
    <div>
      <h1>Welcome to {lang} IDE!</h1>
    </div>
  )
}

export default Codespaces
