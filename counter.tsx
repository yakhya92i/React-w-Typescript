import React, { Component } from 'react';

// Définir une interface pour typer l'état
interface CounterState {
count: number;
}

class Counter extends Component<{}, CounterState> {
// Initialiser l'état avec le type défini
state: CounterState = {
    count: 0,
};

// Typer la méthode d'incrémentation
increment = (): void => {
    this.setState({ count: this.state.count + 1 });
};

render() {
    return (
    <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
    </div>
    );
}
}

export default Counter;

/* Dans cette situation, l'erreur a été causée par le fait que le rendu de composant et le rendu ici défini n'étaient pas identiques.
La représentation d'un composant renvoie void, tandis que celle-ci renvoie du JSX.
Ainsi, j'ai spécifié le type de retour du render afin d'éliminer l'erreur. */
