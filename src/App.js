import ObjectList from './components/ObjectList';
import BoardBtns from './components/BoardBtns';
import Board from './components/Board';
import Layout from './Layout/Layout';

export default function App() {
  return (
    <>
      <Layout>
        <ObjectList />
        <Board />
        <BoardBtns />
      </Layout>
    </>
  );
};


