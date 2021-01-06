import './App.css';
import PollForm from './components/PollForm';
import { ChakraProvider } from '@chakra-ui/react';
import { Switch, Route } from 'react-router-dom';
import PollTitle from './components/PollTitle';
import Poll from './components/Poll';
import Results from './components/Results';
function App() {
  return (
    
    <div className="">
      <ChakraProvider>
        <PollTitle></PollTitle>
        <Switch>
        <Route path='/poll/:pollId' component={Poll}></Route>
        <Route path='/results/:pollId' component={Results}></Route>
        <Route path='/' component={PollForm}></Route>
      </Switch>
      </ChakraProvider>
    </div>
  );
}

export default App;
