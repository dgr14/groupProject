import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import View from './View';
import Footer from './Footer';
import Styles from './App.module.css';
import Entry from './Entry';
import { withContext } from "./AppContext"
// import ExpenseList from './components/ExpenseList';

function MainView(props) {
  return (
    <div className={Styles.mainReturnDiv}>
      <Header />
      <div>
        <button onClick={() => props.logout()}>Logout</button>
      </div>
      <div className={Styles.viewDiv}>
      <Navbar />
      <Entry />
      <View />
      </div>

      <Footer />
    </div>
  );
}

export default withContext(MainView)