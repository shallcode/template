import React from 'react';
import { ChangeColorButton } from '../_components';

const App = () => (
    <div>
        <ChangeColorButton/>
    </div>
)

export default App;

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         const { dispatch } = this.props;
//     }

//     render() {
//         const { colorActions } = this.props;
//         return (
//             <div>
//                 <h1>Testing App</h1>
//                 <ChangeColorButton />
//             </div>
//         );
//     }
// }

// function mapStateToProps(state) {
//     const { alert } = state;
//     return {
//         alert
//     };
// }

// const connectedApp = connect(mapStateToProps)(App);

// export { connectedApp as App };