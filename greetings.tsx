import React, { FC } from 'react';

// Définir une interface pour typer les props
interface GreetingProps {
  name: string;
}

// Utiliser FC (Functional Component) pour typer le composant
const Greeting: FC<GreetingProps> = ({ name }) => {
  return <div>Bonjour, {name} !</div>;
};

export default Greeting;

/* Je crée une interface qui représente la manière dont les éléments sont passés du composant Greeting. 
Il est important de souligner que le paramètre de bienvenue et de type Props. */