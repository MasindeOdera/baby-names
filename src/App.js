import React, { Fragment } from 'react';
import { NamePicker } from './components/name-picker';
import { Search } from './components/search';
import { ShortList } from './components/short-list';
import { ResetSearch } from './components/reset-search';
import { Footer } from './components/footer';

function App() {

  return (
    <Fragment>
      <Search />
      <NamesContainer />
    </Fragment>
  )
}

function NamesContainer() {
  return (
    <main>
        <ShortList />
        <NamePicker />
        <ResetSearch />
        <Footer />
      </main>
  )
}

export default App;
