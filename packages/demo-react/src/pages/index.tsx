import { Routes, Route } from 'react-router-dom';
import { Example } from './example';

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Example />} />
      <Route
        path="/react/*"
        element={
          <micro-app iframe name='my-app' url='http://localhost:3002/react/'></micro-app>
        }
      />
      <Route
        path="/vue/*"
        element={
          <micro-app iframe name='my-app' url='http://localhost:3004/vue/'></micro-app>

        }
      />
      <Route
        path="/rsbuild-react/*"
        element={
          <micro-app  name='my-app' url='http://localhost:3003/rsbuild-react/'></micro-app>
        }
      />
    </Routes>
  );
}
